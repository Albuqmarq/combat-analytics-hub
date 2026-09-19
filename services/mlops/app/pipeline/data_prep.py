import pandas as pd
import numpy as np
import logging
from pathlib import Path

# Configuracao de log padronizada
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def parse_height(height_str: str) -> float:
    """Converte altura no formato americano (e.g. 5'10") para centimetros."""
    if pd.isna(height_str) or not isinstance(height_str, str):
        return np.nan
    try:
        parts = height_str.replace('"', '').split("'")
        feet = float(parts[0])
        inches = float(parts[1]) if len(parts) > 1 and parts[1] else 0.0
        return round((feet * 30.48) + (inches * 2.54), 2)
    except Exception:
        return np.nan

def parse_reach(reach_str: str) -> float:
    """Converte envergadura (e.g. 70") para centimetros."""
    if pd.isna(reach_str) or not isinstance(reach_str, str):
        return np.nan
    try:
        inches = float(reach_str.replace('"', ''))
        return round(inches * 2.54, 2)
    except Exception:
        return np.nan

def clean_dataset(df: pd.DataFrame) -> pd.DataFrame:
    """
    Realiza a limpeza do dataset tabular:
    - Remocao de valores nulos em colunas vitais
    - Conversao de unidades imperiais para metricas (cm)
    - Casting de tipos padronizados
    """
    logger.info(f"Iniciando limpeza. Shape original: {df.shape}")

    # Remove registros com nomes de atletas nulos
    df = df.dropna(subset=['fighter_a', 'fighter_b', 'winner']).copy()

    # Conversao de alturas e envergaduras
    for col in ['height_a', 'height_b']:
        if col in df.columns:
            df[col + '_cm'] = df[col].apply(parse_height)
            df = df.drop(columns=[col])

    for col in ['reach_a', 'reach_b']:
        if col in df.columns:
            df[col + '_cm'] = df[col].apply(parse_reach)
            df = df.drop(columns=[col])

    # Colunas vitais que nao podem ser nulas para o modelo
    critical_cols = [
        'slpm_a', 'slpm_b', 
        'str_def_a', 'str_def_b', 
        'td_def_a', 'td_def_b',
        'height_a_cm', 'height_b_cm',
        'reach_a_cm', 'reach_b_cm'
    ]
    
    # Preenchimento de metricas faltantes (imputation basica ou drop)
    # Por ora, descartamos combates sem metricas basicas de striking
    missing_before = len(df)
    existing_criticals = [c for c in critical_cols if c in df.columns]
    df = df.dropna(subset=existing_criticals)
    missing_after = len(df)
    
    logger.info(f"Removidas {missing_before - missing_after} linhas com dados criticos nulos.")
    
    # Converte idades para inteiros se existirem
    for col in ['age_a', 'age_b']:
        if col in df.columns:
            df[col] = df[col].astype('Int64')

    logger.info(f"Limpeza concluida. Shape final: {df.shape}")
    return df

def main():
    base_dir = Path(__file__).resolve().parent.parent.parent
    raw_path = base_dir / "data" / "raw" / "ufc_data.csv"
    processed_path = base_dir / "data" / "processed" / "ufc_data_clean.parquet"

    if not raw_path.exists():
        logger.error(f"Arquivo fonte nao encontrado: {raw_path}")
        return

    logger.info(f"Lendo dataset bruto de: {raw_path}")
    df_raw = pd.read_csv(raw_path)
    
    df_clean = clean_dataset(df_raw)
    
    # Salva dataset final otimizado
    processed_path.parent.mkdir(parents=True, exist_ok=True)
    df_clean.to_parquet(processed_path, index=False)
    logger.info(f"Dataset processado e salvo em: {processed_path}")

if __name__ == "__main__":
    main()
