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


class MatchupPayload(BaseModel):
    red: str
    blue: str
    mode: str = "absoluto"

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


# Traducao dos fatores SHAP para rotulos + detalhe amigavel (para o veredito da Arena).
def _detail_reach(a, b, w, l): return f"{abs(w['reachCm'] - l['reachCm'])} cm a mais de envergadura para controlar a distancia."
def _detail_age(a, b, w, l): return f"{abs(w['age'] - l['age'])} anos mais novo — recuperacao e explosao a favor."
def _detail_elo(a, b, w, l): return "Rating mais alto, construido contra adversarios de nivel."
def _detail_streak(a, b, w, l): return f"Vem de {w['streak']} vitoria(s) seguida(s)."
def _detail_height(a, b, w, l): return f"{abs(w['heightCm'] - l['heightCm'])} cm a mais de altura."
def _detail_inactive(a, b, w, l): return "Lutou mais recentemente — menos ferrugem."
def _detail_exp(a, b, w, l): return f"{w['numFights']} lutas no cartel, contra {l['numFights']}."

_FACTOR_META = {
    "delta_elo": ("Nivel dos adversarios", _detail_elo),
    "delta_age": ("Juventude", _detail_age),
    "r_age_over35": ("Fator idade", lambda a, b, w, l: "Idade acima de 35 pesa contra."),
    "b_age_over35": ("Fator idade", lambda a, b, w, l: "Idade acima de 35 pesa contra."),
    "delta_reach": ("Alcance e envergadura", _detail_reach),
    "delta_height": ("Estatura", _detail_height),
    "delta_streak": ("Momento na carreira", _detail_streak),
    "delta_win_rate": ("Consistencia de vitorias", lambda a, b, w, l: "Vem vencendo com mais regularidade."),
    "delta_finish_rate": ("Poder de finalizacao", lambda a, b, w, l: "Mais chance de acabar a luta antes do tempo."),
    "delta_experience": ("Experiencia no octogono", _detail_exp),
    "delta_days_inactive": ("Ritmo de luta", _detail_inactive),
    "delta_roll_sig_landed": ("Volume de golpes", lambda a, b, w, l: "Conecta mais golpes significativos por luta."),
    "delta_roll_total_str_landed": ("Volume total de golpes", lambda a, b, w, l: "Mantem um ritmo de golpes mais alto."),
    "delta_roll_td_success": ("Jogo de quedas", lambda a, b, w, l: "Leva vantagem na disputa de quedas e controle."),
    "delta_roll_td_atmp": ("Iniciativa de quedas", lambda a, b, w, l: "Busca mais a queda para ditar onde a luta acontece."),
    "delta_roll_sub_att": ("Perigo no chao", lambda a, b, w, l: "Mais recursos de finalizacao se a luta for ao solo."),
    "delta_roll_kd": ("Poder de nocaute", lambda a, b, w, l: "Mais perigo de knockdown em pe."),
    "delta_roll_ctrl_seconds": ("Dominio de chao", lambda a, b, w, l: "Controla mais tempo por cima."),
    "stance_matchup": ("Confronto de bases", lambda a, b, w, l: "A combinacao de guardas (ortodoxa/canhota) favorece."),
}


def _map_factor(raw: str, red: dict, blue: dict) -> dict:
    """Converte '(Lutador A) Vantagem em delta_elo' no formato do design."""
    favors = "red" if "(Lutador A)" in raw else "blue"
    key = raw.split(" ")[-1].strip()
    winner, loser = (red, blue) if favors == "red" else (blue, red)
    label, detail_fn = _FACTOR_META.get(key, (key, lambda a, b, w, l: ""))
    return {"label": label, "detail": detail_fn(red, blue, winner, loser), "favors": favors}


@app.post("/api/v1/predict/matchup")
@limiter.limit("30/minute")
async def predict_matchup(request: Request, payload: MatchupPayload):
    """Prediz um confronto por ids (red/blue) e devolve ja no formato do veredito:
    probabilidades + fatores traduzidos. Monta as features no servidor."""
    red = _FIGHTERS_BY_ID.get(payload.red)
    blue = _FIGHTERS_BY_ID.get(payload.blue)
    if not red or not blue:
        raise HTTPException(status_code=404, detail="Lutador nao encontrado")
    try:
        async with httpx.AsyncClient() as client:
            resp = await client.post(
                f"{INFERENCE_URL}/predict",
                json={"features": _build_features(red, blue, payload.mode)},
                headers={"x-internal-api-key": INTERNAL_API_KEY},
                timeout=5.0,
            )
            resp.raise_for_status()
            pred = resp.json()
    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="Inference Service indisponivel (Timeout)")
    except Exception as e:
        logger.error(f"Erro no predict/matchup: {e}")
        raise HTTPException(status_code=500, detail="Erro interno do servidor")

    return {
        "redProbability": round(pred["fighter_a_win_probability"] * 100),
        "blueProbability": round(pred["fighter_b_win_probability"] * 100),
        "factors": [_map_factor(f, red, blue) for f in pred.get("key_factors", [])],
    }


_METRICS_PATH = Path(__file__).resolve().parent / "data" / "model_metrics.json"


# --- Confrontos em destaque (preditos pelo modelo, calculados no gateway) ---
_STANCE_ENC = {"Orthodox": 0, "Southpaw": 1, "Switch": 2}
# Pares recomendados (ids do catalogo). Superfights e classicos reconheciveis.
_FEATURED_PAIRS = [
    ("jon-jones", "tom-aspinall"),
    ("islam-makhachev", "charles-oliveira"),
    ("alex-pereira", "israel-adesanya"),
    ("georges-st-pierre", "khabib-nurmagomedov"),
]
_featured_cache = None


def _build_features(a: dict, b: dict, mode: str = "absoluto") -> dict:
    """Monta as 26 features de delta a partir de dois lutadores do catalogo
    (mesma logica/escala usada no treino e no front). No modo 'p4p' as
    diferencas fisicas (altura/alcance) sao zeradas."""
    enc_a = _STANCE_ENC.get(a.get("stance"), -1)
    enc_b = _STANCE_ENC.get(b.get("stance"), -1)
    p4p = mode == "p4p"
    return {
        "delta_elo": a["elo"] - b["elo"],
        "delta_days_inactive": a["daysInactive"] - b["daysInactive"],
        "delta_streak": a["streak"] - b["streak"],
        "delta_win_rate": a["winRate"] - b["winRate"],
        "delta_finish_rate": a["finishRate"] - b["finishRate"],
        "delta_experience": a["numFights"] - b["numFights"],
        "delta_height": 0 if p4p else a["heightCm"] - b["heightCm"],
        "delta_reach": 0 if p4p else a["reachCm"] - b["reachCm"],
        "delta_age": a["age"] - b["age"],
        "r_age_over35": 1 if a["age"] > 35 else 0,
        "b_age_over35": 1 if b["age"] > 35 else 0,
        "stance_matchup": enc_a - enc_b,
        "delta_roll_sig_landed": a["strikingLanded"] - b["strikingLanded"],
        "delta_roll_sig_atmp": 0,
        "delta_roll_kd": a["knockdownRate"] - b["knockdownRate"],
        "delta_roll_td_success": a["takedownSuccess"] - b["takedownSuccess"],
        "delta_roll_td_atmp": a["tdAtmp"] - b["tdAtmp"],
        "delta_roll_sub_att": a["subAtt"] - b["subAtt"],
        "delta_roll_ctrl_seconds": a["ctrlSeconds"] - b["ctrlSeconds"],
        "delta_roll_sig_str_landed_head": 0,
        "delta_roll_sig_str_landed_body": 0,
        "delta_roll_sig_str_landed_leg": 0,
        "delta_roll_sig_str_landed_distance": 0,
        "delta_roll_sig_str_landed_clinch": 0,
        "delta_roll_sig_str_landed_ground": 0,
        "delta_roll_total_str_landed": a["strikingLanded"] - b["strikingLanded"],
    }


@app.get("/api/v1/featured")
@limiter.limit("60/minute")
def get_featured(request: Request):
    """Confrontos em destaque ja preditos pelo modelo (cacheado apos o 1o calculo)."""
    global _featured_cache
    if _featured_cache is not None:
        return {"matchups": _featured_cache}

    out = []
    try:
        with httpx.Client() as client:
            for id_a, id_b in _FEATURED_PAIRS:
                a, b = _FIGHTERS_BY_ID.get(id_a), _FIGHTERS_BY_ID.get(id_b)
                if not a or not b:
                    continue
                resp = client.post(
                    f"{INFERENCE_URL}/predict",
                    json={"features": _build_features(a, b)},
                    headers={"x-internal-api-key": INTERNAL_API_KEY},
                    timeout=5.0,
                )
                resp.raise_for_status()
                pred = resp.json()
                out.append({
                    "a": {k: a[k] for k in _LIGHT_FIELDS},
                    "b": {k: b[k] for k in _LIGHT_FIELDS},
                    "probA": pred["fighter_a_win_probability"],
                    "probB": pred["fighter_b_win_probability"],
                })
    except Exception as e:
        logger.error(f"Falha ao montar confrontos em destaque: {e}")
        # Retorna o que conseguiu (pode ser vazio); nao cacheia falha parcial.
        return {"matchups": out}

    _featured_cache = out
    return {"matchups": out}


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
