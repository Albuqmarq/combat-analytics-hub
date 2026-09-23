from fastapi import FastAPI, Request, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import httpx
import os
import json
import logging
from pathlib import Path
from pydantic import BaseModel

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

from app.core.logging import StructuredLoggingMiddleware

# Configurando Rate Limiter
limiter = Limiter(key_func=get_remote_address)

app = FastAPI(
    title="Combat Analytics Hub - API Gateway",
    description="Gateway central com Rate Limiting, Logs Estruturados e Proxy resiliente",
    version="1.0.0"
)

# Adicionando o middleware de telemetria
app.add_middleware(StructuredLoggingMiddleware)

# Registrando o limiter
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Configurando CORS seguro (em producao, restrinja os origens permitidos)
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Endpoints internos
INFERENCE_URL = os.getenv("INFERENCE_URL", "http://localhost:8001")
MLOPS_URL = os.getenv("MLOPS_URL", "http://localhost:8002")
# Segredos sem default fraco: devem vir do ambiente (.env / secrets do orquestrador).
INTERNAL_API_KEY = os.getenv("INTERNAL_API_KEY")
ADMIN_API_KEY = os.getenv("ADMIN_API_KEY")

if not INTERNAL_API_KEY:
    logger.warning("INTERNAL_API_KEY nao definido no ambiente; chamadas internas irao falhar.")

def verify_admin_key(x_admin_api_key: str = Header(default=None)):
    """Protege rotas administrativas (ex.: disparo de treino). Exige o header
    x-admin-api-key igual a ADMIN_API_KEY. Se a chave nao estiver configurada,
    a rota fica indisponivel (fail-closed) em vez de aberta."""
    if not ADMIN_API_KEY:
        raise HTTPException(status_code=503, detail="Rota administrativa desabilitada (ADMIN_API_KEY nao configurada)")
    if not x_admin_api_key or x_admin_api_key != ADMIN_API_KEY:
        raise HTTPException(status_code=403, detail="Acesso negado: chave de administrador invalida ou ausente")

class PredictPayload(BaseModel):
    features: dict

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "gateway"}

@app.post("/api/v1/predict")
@limiter.limit("30/minute")
async def proxy_predict(request: Request, payload: PredictPayload):
    """
    Repassa a predicao para o Inference Service de forma resiliente.
    """
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{INFERENCE_URL}/predict",
                json=payload.model_dump(),
                headers={"x-internal-api-key": INTERNAL_API_KEY},
                timeout=5.0
            )
            response.raise_for_status()
            return response.json()
    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="Inference Service indisponivel (Timeout)")
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Erro no Inference Service")
    except Exception as e:
        logger.error(f"Erro inesperado no proxy predict: {e}")
        raise HTTPException(status_code=500, detail="Erro interno do servidor")

@app.post("/api/v1/admin/train", dependencies=[Depends(verify_admin_key)])
@limiter.limit("1/minute")
async def proxy_train(request: Request):
    """
    Aciona o pipeline de treinamento no MLOps.
    Protegida por token de administrador (header x-admin-api-key) + rate limit + CORS estrito.
    """
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{MLOPS_URL}/pipeline/run",
                headers={"x-internal-api-key": INTERNAL_API_KEY},
                timeout=10.0
            )
            response.raise_for_status()
            return response.json()
    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="MLOps Service indisponivel (Timeout)")
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Erro no MLOps Service")
    except Exception as e:
        logger.error(f"Erro inesperado no proxy train: {e}")
        raise HTTPException(status_code=500, detail="Erro interno do servidor")

# Catalogo de lutadores servido pelo backend (evita embutir ~2MB no bundle do front).
# Carregado uma unica vez em memoria na subida do servico.
_FIGHTERS_PATH = Path(__file__).resolve().parent / "data" / "fighters.json"
try:
    _FIGHTERS = json.loads(_FIGHTERS_PATH.read_text(encoding="utf-8"))
except Exception as e:
    logger.error(f"Nao foi possivel carregar {_FIGHTERS_PATH}: {e}")
    _FIGHTERS = []

# Indice por id e uma projecao "leve" para listagem (sem radar/stats detalhados).
_FIGHTERS_BY_ID = {f["id"]: f for f in _FIGHTERS}
_LIGHT_FIELDS = ("id", "name", "category", "record", "elo", "country", "flag")
_FIGHTERS_LIGHT = [{k: f[k] for k in _LIGHT_FIELDS} for f in _FIGHTERS]
logger.info(f"Catalogo de lutadores carregado: {len(_FIGHTERS)} atletas")


@app.get("/api/v1/fighters")
@limiter.limit("60/minute")
def get_fighters(request: Request, search: str = "", limit: int = 50, offset: int = 0):
    """Lista paginada e pesquisavel (payload leve). O front busca sob demanda.
    O limite alto e permitido porque a projecao leve e pequena (~80 bytes/atleta)."""
    limit = max(1, min(limit, 3000))
    offset = max(0, offset)
    q = search.strip().lower()
    items = _FIGHTERS_LIGHT
    if q:
        items = [f for f in items if q in f["name"].lower()]
    total = len(items)
    return {"total": total, "limit": limit, "offset": offset, "items": items[offset:offset + limit]}


@app.get("/api/v1/fighters/{fighter_id}")
@limiter.limit("120/minute")
def get_fighter(request: Request, fighter_id: str):
    """Retorna o perfil completo de um lutador (todas as stats + radar)."""
    fighter = _FIGHTERS_BY_ID.get(fighter_id)
    if not fighter:
        raise HTTPException(status_code=404, detail="Lutador nao encontrado")
    return fighter


_METRICS_PATH = Path(__file__).resolve().parent / "data" / "model_metrics.json"


@app.get("/api/v1/model/metrics")
@limiter.limit("60/minute")
def get_model_metrics(request: Request):
    """Metricas honestas do modelo (teste temporal), para a landing page."""
    try:
        return json.loads(_METRICS_PATH.read_text(encoding="utf-8"))
    except Exception:
        raise HTTPException(status_code=404, detail="Metricas do modelo indisponiveis")


@app.get("/api/v1/events")
@limiter.limit("20/minute")
def get_events(request: Request):
    # Futuramente buscara do banco de dados
    return {"events": [{"id": 123, "name": "UFC 300: Pereira vs. Hill", "date": "2024-04-13"}]}
