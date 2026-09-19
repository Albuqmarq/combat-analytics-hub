
# Ponto de entrada do Inference Service.

from fastapi import FastAPI, Depends

from app.schemas.predict import PredictRequest, PredictResponse
from app.engine.predictor import calculate_prediction
from app.dependencies import verify_internal_api_key

app = FastAPI(
    title="CombatAnalytics - Inference Service",
    description="Microsserviço responsável exclusivamente pela inferência de ML",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    """Rota leve pra outros serviços checarem se este está no ar."""
    return {"status": "ok", "service": "inference"}


# Agora é POST (recebe dados no corpo da requisição) e devolve exatamente
# o formato definido em PredictResponse. O parâmetro 'data: PredictRequest'
# faz o FastAPI validar automaticamente o JSON recebido contra o schema.
# Se faltar um campo ou vier tipo errado, ele já recusa antes de chegar
# na nossa função. A rota é protegida pela chave de integração interna.
@app.post("/predict", response_model=PredictResponse, dependencies=[Depends(verify_internal_api_key)])
def predict(data: PredictRequest):
    return calculate_prediction(data)