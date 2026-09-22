from fastapi import FastAPI, Request, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import httpx
import os
import logging
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
INTERNAL_API_KEY = os.getenv("INTERNAL_API_KEY", "test_key_123")

class PredictPayload(BaseModel):
    features: dict

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "gateway"}

@app.post("/api/v1/predict")
@limiter.limit("5/minute")
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

@app.post("/api/v1/admin/train")
@limiter.limit("1/minute")
async def proxy_train(request: Request):
    """
    Aciona o pipeline de treinamento no MLOps. Rota restrita e rigorosamente baseada em rate limit.
    """
    # Aqui, poderiamos verificar um token JWT admin. Por simplicidade, assumimos Rate Limit + CORS estrito.
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

# Mock rotas para frontend
@app.get("/api/v1/fighters")
@limiter.limit("20/minute")
def get_fighters(request: Request):
    # Futuramente buscara do MongoDB/Feature Store
    return {"fighters": [{"id": 1, "name": "Jon Jones"}, {"id": 2, "name": "Alex Pereira"}]}

@app.get("/api/v1/events")
@limiter.limit("20/minute")
def get_events(request: Request):
    # Futuramente buscara do banco de dados
    return {"events": [{"id": 123, "name": "UFC 300: Pereira vs. Hill", "date": "2024-04-13"}]}
