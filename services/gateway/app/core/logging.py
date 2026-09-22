import time
import logging
import uuid
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)
logger = logging.getLogger("gateway")

class StructuredLoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        request_id = request.headers.get("x-request-id", str(uuid.uuid4()))
        start_time = time.time()
        
        # Log de entrada
        logger.info(f"START request_id={request_id} method={request.method} path={request.url.path}")
        
        response = None
        try:
            response = await call_next(request)
        except Exception as e:
            process_time = (time.time() - start_time) * 1000
            logger.error(f"ERROR request_id={request_id} method={request.method} path={request.url.path} time={process_time:.2f}ms error={str(e)}")
            raise e
            
        process_time = (time.time() - start_time) * 1000
        
        # Adicionar cabecalho de tracking
        response.headers["x-request-id"] = request_id
        response.headers["x-process-time"] = str(process_time)
        
        # Log de saida
        logger.info(f"END request_id={request_id} method={request.method} path={request.url.path} status={response.status_code} time={process_time:.2f}ms")
        
        return response
