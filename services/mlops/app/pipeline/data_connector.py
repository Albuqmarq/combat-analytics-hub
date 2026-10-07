"""Conector de dados: baixa um dataset atualizado do Kaggle e o promove a master.csv.

Substitui o antigo scraper (que era mock e nao gravava nada) por uma fonte real e
atualizavel. Funciona quando as credenciais do Kaggle estao no ambiente; caso
contrario, faz fallback seguro mantendo o master.csv atual (nunca quebra a esteira).

Variaveis de ambiente:
  KAGGLE_USERNAME, KAGGLE_KEY  -> credenciais da API do Kaggle
  KAGGLE_DATASET               -> slug do dataset (ex.: "mdabbert/ultimate-ufc-dataset")
  KAGGLE_CSV                   -> (opcional) nome do CSV dentro do dataset a promover
"""
import os
import shutil
import logging
from pathlib import Path

import pandas as pd

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

# Colunas minimas que o master.csv precisa ter para alimentar o pipeline de features.
REQUIRED_COLUMNS = {"fight_id", "event_date", "r_fighter_id", "b_fighter_id", "winner_id"}


def _promote_if_compatible(candidate: Path, master_path: Path) -> bool:
    """Valida o schema de um CSV baixado e, se compativel, o promove a master.csv."""
    try:
        head = pd.read_csv(candidate, nrows=5, low_memory=False)
    except Exception as e:
        logger.warning(f"Nao foi possivel ler {candidate.name}: {e}")
        return False

    missing = REQUIRED_COLUMNS - set(head.columns)
    if missing:
        logger.warning(f"{candidate.name} ignorado: faltam colunas {sorted(missing)}")
        return False

    # Backup do master atual antes de sobrescrever.
    if master_path.exists():
        shutil.copy2(master_path, master_path.with_suffix(".csv.bak"))
    shutil.copy2(candidate, master_path)
    logger.info(f"master.csv atualizado a partir de {candidate.name}")
    return True


def run_data_connector():
    """Passo de ingestao da esteira. Idempotente e tolerante a falhas."""
    base_dir = Path(__file__).resolve().parents[2]  # services/mlops
    raw_dir = base_dir / "data" / "raw"
    master_path = raw_dir / "master.csv"
    raw_dir.mkdir(parents=True, exist_ok=True)

    dataset = os.getenv("KAGGLE_DATASET")
    has_creds = bool(os.getenv("KAGGLE_USERNAME") and os.getenv("KAGGLE_KEY"))

    if not dataset or not has_creds:
        logger.info(
            "Conector Kaggle inativo (defina KAGGLE_DATASET + KAGGLE_USERNAME/KAGGLE_KEY). "
            "Mantendo o master.csv atual."
        )
        return

    try:
        # Import tardio: a dependencia so e exigida quando o conector e realmente usado.
        from kaggle.api.kaggle_api_extended import KaggleApi
    except Exception as e:
        logger.warning(f"Pacote 'kaggle' indisponivel ({e}). Mantendo o master.csv atual.")
        return

    try:
        api = KaggleApi()
        api.authenticate()
        logger.info(f"Baixando dataset do Kaggle: {dataset}")
        api.dataset_download_files(dataset, path=str(raw_dir), unzip=True, quiet=True)
    except Exception as e:
        logger.warning(f"Falha ao baixar do Kaggle ({e}). Mantendo o master.csv atual.")
        return

    # Escolhe o CSV a promover: o configurado, ou o maior CSV baixado.
    wanted = os.getenv("KAGGLE_CSV")
    candidates = sorted(raw_dir.glob("*.csv"), key=lambda p: p.stat().st_size, reverse=True)
    candidates = [c for c in candidates if c.name != "master.csv"]

    if wanted:
        candidates = [c for c in candidates if c.name == wanted] or candidates

    for candidate in candidates:
        if _promote_if_compatible(candidate, master_path):
            return

    logger.warning("Nenhum CSV compativel encontrado no dataset. Mantendo o master.csv atual.")


if __name__ == "__main__":
    run_data_connector()
