import os
import time
import logging
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError
from sqlalchemy.orm import declarative_base, sessionmaker

logger = logging.getLogger(__name__)

# Configuração da URL do banco de dados (padrão para SQLite em fallback local, mas usa Postgres no Docker)
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./combat.db")

# Criação do engine
# Se for SQLite, precisamos do check_same_thread=False
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(DATABASE_URL, connect_args=connect_args)

# Criando a fábrica de sessões
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para criar os modelos
Base = declarative_base()

def init_db(retries: int = 10, delay: float = 3.0):
    """Cria as tabelas, aguardando o banco ficar pronto (retry).
    Evita quebrar o gateway na subida enquanto o Postgres ainda inicializa."""
    # Importa os modelos para registra-los no metadata antes do create_all.
    from app.db import models  # noqa: F401

    for attempt in range(1, retries + 1):
        try:
            Base.metadata.create_all(bind=engine)
            logger.info("Banco de dados inicializado (tabelas garantidas).")
            return
        except OperationalError as e:
            logger.warning(f"Banco indisponivel (tentativa {attempt}/{retries}): {e}")
            if attempt == retries:
                logger.error("Nao foi possivel conectar ao banco apos varias tentativas.")
                raise
            time.sleep(delay)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
