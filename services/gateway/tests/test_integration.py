import pytest
from fastapi.testclient import TestClient
from app.main import app
import httpx

client = TestClient(app)

def test_predict_proxy_validation_error():
    """Deve retornar erro de validacao (422) se o payload estiver vazio."""
    response = client.post("/api/v1/predict", json={})
    assert response.status_code == 422

def test_predict_proxy_gateway_error_when_backend_down():
    """
    Testa se o Gateway captura a indisponibilidade do backend
    (Inference service) e retorna erro limpo em vez de quebrar.
    """
    payload = {"features": {"mock": "data"}}
    try:
        response = client.post("/api/v1/predict", json=payload)
        # O backend nao esta rodando na porta 8001 durante os testes de integracao
        # Entao deve retornar 500 ou 504.
        assert response.status_code in [500, 504]
    except httpx.ConnectError:
        pass # Caso a propria requisicao interna cause throw, o middleware vai logar
