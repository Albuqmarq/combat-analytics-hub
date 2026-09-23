import logging
from fastapi import FastAPI, BackgroundTasks, Security, HTTPException, Header
import httpx
import os
from pydantic import BaseModel

from app.pipeline.data_prep import main as run_data_prep
from app.pipeline.feature_engineering import main as run_feature_engineering
from app.pipeline.train_model import train_and_evaluate
from app.pipeline.data_connector import run_data_connector
from app.pipeline.build_catalog import build_catalog

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(
    title="MLOps API",
    description="Servico de treinamento e pipeline de dados",
    version="1.0.0"
)

# Simulando uma chave interna em memoria (em prod vira do .env)
INTERNAL_API_KEY = os.getenv("INTERNAL_API_KEY", "test_key_123")
INFERENCE_URL = os.getenv("INFERENCE_URL", "http://localhost:8001")

def verify_internal_api_key(x_internal_api_key: str = Header(None)):
    if not x_internal_api_key or x_internal_api_key != INTERNAL_API_KEY:
        raise HTTPException(status_code=403, detail="Acesso negado: chave de integracao interna invalida ou ausente")
    return x_internal_api_key

class PipelineResponse(BaseModel):
    status: str
    message: str

def execute_full_pipeline():
    logger.info("=== INICIANDO PIPELINE DE MLOPS ===")
    try:
        logger.info("1/5 - Ingestao de dados (conector Kaggle, com fallback)...")
        run_data_connector()

        logger.info("2/5 - Preparando dados limpos...")
        run_data_prep()

        logger.info("3/5 - Engenharia de features temporais...")
        run_feature_engineering()

        logger.info("4/5 - Treinando modelo XGBoost e gerando XAI...")
        train_and_evaluate()

        logger.info("5/5 - Regerando catalogo de lutadores...")
        build_catalog()
        
        logger.info("Notificando Inference Service para recarregamento...")
        try:
            with httpx.Client() as client:
                response = client.post(
                    f"{INFERENCE_URL}/reload-model",
                    headers={"x-internal-api-key": INTERNAL_API_KEY},
                    timeout=10.0
                )
                response.raise_for_status()
            logger.info("Inference Service recarregado com sucesso.")
        except Exception as e:
            logger.error(f"Aviso: Nao foi possivel recarregar Inference Service: {e}")

        logger.info("=== PIPELINE DE MLOPS CONCLUIDO COM SUCESSO ===")
    except Exception as e:
        logger.error(f"Erro catastrofico no pipeline: {str(e)}")

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "mlops"}

@app.post("/pipeline/run", response_model=PipelineResponse, dependencies=[Security(verify_internal_api_key)])
def trigger_pipeline(background_tasks: BackgroundTasks):
    """
    Gatilho assincrono para rodar toda a esteira de MLOps em background.
    Ideal para uso com cronjobs, GitHub Actions ou acionamento manual administrativo.
    """
    background_tasks.add_task(execute_full_pipeline)
    return PipelineResponse(status="accepted", message="Pipeline MLOps iniciado em background.")
