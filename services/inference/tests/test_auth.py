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
    """Requisicoes para /predict sem o header interno devem ser bloqueadas."""
    payload = {"features": {"delta_elo": 0.0, "delta_days_inactive": 0.0, "delta_streak": 0.0, "delta_win_rate": 0.0, "delta_finish_rate": 0.0, "delta_experience": 0.0, "delta_height": 0.0, "delta_reach": 0.0, "delta_age": 0.0, "r_age_over35": 0, "b_age_over35": 0, "stance_matchup": 0.0, "delta_roll_sig_landed": 0.0, "delta_roll_sig_atmp": 0.0, "delta_roll_kd": 0.0, "delta_roll_td_success": 0.0, "delta_roll_td_atmp": 0.0, "delta_roll_sub_att": 0.0, "delta_roll_ctrl_seconds": 0.0, "delta_roll_sig_str_landed_head": 0.0, "delta_roll_sig_str_landed_body": 0.0, "delta_roll_sig_str_landed_leg": 0.0, "delta_roll_sig_str_landed_distance": 0.0, "delta_roll_sig_str_landed_clinch": 0.0, "delta_roll_sig_str_landed_ground": 0.0, "delta_roll_total_str_landed": 0.0}}
    response = client.post("/predict", json=payload)
    assert response.status_code == 403

def test_predict_with_valid_auth_header():
    """Requisicoes com a chave correta devem ser processadas com sucesso."""
    payload = {"features": {"delta_elo": 0.0, "delta_days_inactive": 0.0, "delta_streak": 0.0, "delta_win_rate": 0.0, "delta_finish_rate": 0.0, "delta_experience": 0.0, "delta_height": 0.0, "delta_reach": 0.0, "delta_age": 0.0, "r_age_over35": 0, "b_age_over35": 0, "stance_matchup": 0.0, "delta_roll_sig_landed": 0.0, "delta_roll_sig_atmp": 0.0, "delta_roll_kd": 0.0, "delta_roll_td_success": 0.0, "delta_roll_td_atmp": 0.0, "delta_roll_sub_att": 0.0, "delta_roll_ctrl_seconds": 0.0, "delta_roll_sig_str_landed_head": 0.0, "delta_roll_sig_str_landed_body": 0.0, "delta_roll_sig_str_landed_leg": 0.0, "delta_roll_sig_str_landed_distance": 0.0, "delta_roll_sig_str_landed_clinch": 0.0, "delta_roll_sig_str_landed_ground": 0.0, "delta_roll_total_str_landed": 0.0}}
    headers = {"x-internal-api-key": "test_key_123"}
    response = client.post("/predict", json=payload, headers=headers)
    assert response.status_code == 200

def test_reload_model_without_auth():
    """A rota reload-model deve ser protegida."""
    response = client.post("/reload-model")
    assert response.status_code == 403

def test_reload_model_with_auth():
    """A rota reload-model recarrega com a chave certa."""
    headers = {"x-internal-api-key": "test_key_123"}
    response = client.post("/reload-model", headers=headers)
    assert response.status_code == 200
    assert response.json()["status"] == "success"
