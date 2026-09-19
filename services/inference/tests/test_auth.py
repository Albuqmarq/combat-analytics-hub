import os
import pytest
from fastapi.testclient import TestClient

# Define ambiente antes de importar a aplicacao para o config ler corretamente
os.environ["INTERNAL_API_KEY"] = "test_key_123"

from app.main import app

client = TestClient(app)

def test_health_check_public():
    """A rota health deve ser acessivel sem autenticacao para orquestradores."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok", "service": "inference"}

def test_predict_without_auth_header():
    """Requisições para /predict sem o header interno devem ser bloqueadas."""
    payload = {
        "fighter_a": {"height_cm": 180, "reach_cm": 180, "age": 30, "slpm": 4.0, "str_acc": 50.0, "sapm": 3.0, "str_def": 60.0, "td_avg": 1.0, "td_acc": 40.0, "td_def": 70.0, "sub_avg": 0.5},
        "fighter_b": {"height_cm": 180, "reach_cm": 180, "age": 30, "slpm": 4.0, "str_acc": 50.0, "sapm": 3.0, "str_def": 60.0, "td_avg": 1.0, "td_acc": 40.0, "td_def": 70.0, "sub_avg": 0.5}
    }
    response = client.post("/predict", json=payload)
    assert response.status_code == 403
    assert response.json()["detail"] == "Acesso negado: chave de integracao interna invalida ou ausente"

def test_predict_with_invalid_auth_header():
    """Requisições para /predict com chave errada devem ser bloqueadas."""
    payload = {
        "fighter_a": {"height_cm": 180, "reach_cm": 180, "age": 30, "slpm": 4.0, "str_acc": 50.0, "sapm": 3.0, "str_def": 60.0, "td_avg": 1.0, "td_acc": 40.0, "td_def": 70.0, "sub_avg": 0.5},
        "fighter_b": {"height_cm": 180, "reach_cm": 180, "age": 30, "slpm": 4.0, "str_acc": 50.0, "sapm": 3.0, "str_def": 60.0, "td_avg": 1.0, "td_acc": 40.0, "td_def": 70.0, "sub_avg": 0.5}
    }
    headers = {"x-internal-api-key": "wrong_key"}
    response = client.post("/predict", json=payload, headers=headers)
    assert response.status_code == 403
    assert response.json()["detail"] == "Acesso negado: chave de integracao interna invalida ou ausente"

def test_predict_with_valid_auth_header():
    """Requisições com a chave correta devem ser processadas com sucesso."""
    payload = {
        "fighter_a": {"height_cm": 180, "reach_cm": 180, "age": 30, "slpm": 4.0, "str_acc": 50.0, "sapm": 3.0, "str_def": 60.0, "td_avg": 1.0, "td_acc": 40.0, "td_def": 70.0, "sub_avg": 0.5},
        "fighter_b": {"height_cm": 180, "reach_cm": 180, "age": 30, "slpm": 4.0, "str_acc": 50.0, "sapm": 3.0, "str_def": 60.0, "td_avg": 1.0, "td_acc": 40.0, "td_def": 70.0, "sub_avg": 0.5}
    }
    headers = {"x-internal-api-key": "test_key_123"}
    response = client.post("/predict", json=payload, headers=headers)
    assert response.status_code == 200
    assert "fighter_a_win_probability" in response.json()
