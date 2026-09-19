from typing import Optional
from fastapi import Header, HTTPException, status
from app.config import settings

def verify_internal_api_key(
    x_internal_api_key: Optional[str] = Header(default=None)
) -> str:
    """
    Valida a chave de integracao interna enviada pelo Gateway ou MLOps.
    Rejeita a requisicao com status 403 Forbidden caso a chave seja invalida ou ausente.
    """
    if not x_internal_api_key or x_internal_api_key != settings.internal_api_key:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Acesso negado: chave de integracao interna invalida ou ausente",
        )
    return x_internal_api_key
