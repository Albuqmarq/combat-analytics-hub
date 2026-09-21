import os
from fastapi.testclient import TestClient

os.environ["INTERNAL_API_KEY"] = "mlops_key_123"

from app.main import app

client = TestClient(app)

def test_health_check_public():
    """A rota health deve ser publica."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["service"] == "mlops"

def test_trigger_pipeline_without_auth():
    """O gatilho de pipeline deve ser protegido contra acessos publicos."""
    response = client.post("/pipeline/run")
    assert response.status_code == 403

def test_trigger_pipeline_with_invalid_auth():
    """Chaves invalidas devem ser bloqueadas."""
    headers = {"x-internal-api-key": "wrong_key"}
    response = client.post("/pipeline/run", headers=headers)
    assert response.status_code == 403

def test_trigger_pipeline_with_valid_auth():
    """O pipeline deve ser aceito e enfileirado com a chave correta."""
    headers = {"x-internal-api-key": "mlops_key_123"}
    response = client.post("/pipeline/run", headers=headers)
    assert response.status_code == 200
    assert response.json()["status"] == "accepted"
