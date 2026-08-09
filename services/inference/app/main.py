
# Ponto de entrada do Inference Service.

from fastapi import FastAPI

from app.schemas.predict import PredictRequest, PredictResponse
from app.engine.predictor import calculate_prediction

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
# faz o FastAPI validar automaticamente o JSON recebido contra o schema —
# se faltar um campo ou vier tipo errado, ele já recusa antes de chegar
# na nossa função.
@app.post("/predict", response_model=PredictResponse)
def predict(data: PredictRequest):
    return calculate_prediction(data)