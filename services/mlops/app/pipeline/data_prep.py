import pandas as pd
import numpy as np
import logging
from pathlib import Path

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def parse_height(height_str: str) -> float:
    if pd.isna(height_str) or not isinstance(height_str, str):
        return np.nan
    try:
        parts = height_str.replace('"', '').replace(' ', '').split("'")
        feet = float(parts[0])
        inches = float(parts[1]) if len(parts) > 1 and parts[1] else 0.0
        return round((feet * 30.48) + (inches * 2.54), 2)
    except Exception:
        return np.nan

def clean_dataset(df: pd.DataFrame) -> pd.DataFrame:
    logger.info(f"Iniciando limpeza. Shape original: {df.shape}")

    df = df[df['result_status'] == 'win'].copy()
    
    df['winner'] = np.where(df['winner_id'] == df['r_fighter_id'], 'R', 'B')

    for col in ['r_height', 'b_height']:
        if col in df.columns:
            df[col + '_cm'] = df[col].apply(parse_height)
            df = df.drop(columns=[col])

    for col in ['r_reach_inches', 'b_reach_inches']:
        if col in df.columns:
            df[col.replace('_inches', '_cm')] = df[col] * 2.54
            df = df.drop(columns=[col])

    # Substituir colunas que nao existem, usar o que tem
    # O master ja tem r_slpm, b_slpm, etc.
    critical_cols = [
        'r_slpm', 'b_slpm', 
        'r_str_def', 'b_str_def', 
        'r_td_def', 'b_td_def',
        'r_height_cm', 'b_height_cm'
    ]
    
    existing_criticals = [c for c in critical_cols if c in df.columns]
    missing_before = len(df)
    df = df.dropna(subset=existing_criticals)
    missing_after = len(df)
    
    logger.info(f"Removidas {missing_before - missing_after} linhas com dados criticos nulos.")
    logger.info(f"Limpeza concluida. Shape final: {df.shape}")
    return df

def main():
    base_dir = Path(__file__).resolve().parent.parent.parent
    raw_path = base_dir / "data" / "raw" / "master.csv"
    processed_path = base_dir / "data" / "processed" / "master_clean.parquet"

    if not raw_path.exists():
        logger.error(f"Arquivo fonte nao encontrado: {raw_path}")
        return

    logger.info(f"Lendo dataset bruto de: {raw_path}")
    df_raw = pd.read_csv(raw_path, low_memory=False)
    
    df_clean = clean_dataset(df_raw)
    
    processed_path.parent.mkdir(parents=True, exist_ok=True)
    df_clean.to_parquet(processed_path, index=False)
    logger.info(f"Dataset processado e salvo em: {processed_path}")

if __name__ == "__main__":
    main()
