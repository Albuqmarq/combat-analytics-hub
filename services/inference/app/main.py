from fastapi import FastAPI, Depends, HTTPException, Security
import logging

from app.schemas.predict import PredictRequest, PredictResponse
from app.engine.predictor import calculate_prediction, reload_model_engine
from app.dependencies import verify_internal_api_key

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Inference API",
    description="Servico de inferencia em tempo real protegido e resiliente.",
    version="1.0.0"
)

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "inference"}

@app.post("/predict", response_model=PredictResponse, dependencies=[Security(verify_internal_api_key)])
def predict(request: PredictRequest):
    try:
        return calculate_prediction(request)
    except Exception as e:
        logger.error(f"Erro ao processar predicao: {str(e)}")
        raise HTTPException(status_code=500, detail="Erro interno no motor de predicao.")

@app.post("/reload-model", dependencies=[Security(verify_internal_api_key)])
def reload_model():
    """
    Rota para forcar o recarregamento dinamico do artefato (modelo) em memoria.
    Chamada pelo MLOps Service via Gateway logo apos um novo treino terminar.
    """
    try:
        reload_model_engine()
        return {"status": "success", "message": "Motor de inferencia recarregado com sucesso."}
    except Exception as e:
        logger.error(f"Erro ao recarregar modelo: {str(e)}")
        raise HTTPException(status_code=500, detail="Erro interno ao recarregar o modelo.")