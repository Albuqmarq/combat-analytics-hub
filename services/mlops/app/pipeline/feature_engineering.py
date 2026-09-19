import logging
from pathlib import Path
import pandas as pd
from sklearn.model_selection import train_test_split

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def calculate_deltas(df: pd.DataFrame) -> pd.DataFrame:
    df_feat = df.copy()
    
    if 'slpm_a' in df_feat.columns and 'slpm_b' in df_feat.columns:
        df_feat['delta_slpm'] = df_feat['slpm_a'] - df_feat['slpm_b']
        
    if 'str_def_a' in df_feat.columns and 'str_def_b' in df_feat.columns:
        df_feat['delta_str_def'] = df_feat['str_def_a'] - df_feat['str_def_b']
        
    if 'td_def_a' in df_feat.columns and 'td_def_b' in df_feat.columns:
        df_feat['delta_td_def'] = df_feat['td_def_a'] - df_feat['td_def_b']
        
    if 'height_a_cm' in df_feat.columns and 'height_b_cm' in df_feat.columns:
        df_feat['delta_height_cm'] = df_feat['height_a_cm'] - df_feat['height_b_cm']
        
    if 'reach_a_cm' in df_feat.columns and 'reach_b_cm' in df_feat.columns:
        df_feat['delta_reach_cm'] = df_feat['reach_a_cm'] - df_feat['reach_b_cm']
        
    if 'age_a' in df_feat.columns and 'age_b' in df_feat.columns:
        df_feat['delta_age'] = df_feat['age_a'].astype(float) - df_feat['age_b'].astype(float)

    return df_feat

def symmetrize_data(df: pd.DataFrame) -> pd.DataFrame:
    df_inverted = df.copy()
    
    rename_map = {}
    for col in df.columns:
        if col.endswith('_a'):
            rename_map[col] = col[:-2] + '_b'
        elif col.endswith('_b'):
            rename_map[col] = col[:-2] + '_a'
        elif col.endswith('_a_cm'):
            rename_map[col] = col.replace('_a_cm', '_b_cm')
        elif col.endswith('_b_cm'):
            rename_map[col] = col.replace('_b_cm', '_a_cm')
            
    df_inverted = df_inverted.rename(columns=rename_map)
    
    delta_cols = [c for c in df_inverted.columns if c.startswith('delta_')]
    for c in delta_cols:
        df_inverted[c] = -df_inverted[c]
        
    if 'winner' in df_inverted.columns:
        df_inverted['winner'] = df_inverted['winner'].map({'A': 'B', 'B': 'A'})
        
    df_symmetric = pd.concat([df, df_inverted], ignore_index=True)
    df_symmetric = df_symmetric.drop_duplicates()
    
    return df_symmetric

def split_and_save(df: pd.DataFrame, output_dir: Path):
    if 'winner' not in df.columns:
        logger.warning("Coluna 'winner' nao encontrada. Salvando dataset completo sem split.")
        df.to_parquet(output_dir / "features_full.parquet", index=False)
        return

    df_valid = df.dropna(subset=['winner']).copy()
    df_valid['target'] = (df_valid['winner'] == 'A').astype(int)
    
    train_df, temp_df = train_test_split(df_valid, test_size=0.30, random_state=42, stratify=df_valid['target'])
    val_df, test_df = train_test_split(temp_df, test_size=0.50, random_state=42, stratify=temp_df['target'])
    
    logger.info(f"Splits gerados: Treino ({len(train_df)}), Validacao ({len(val_df)}), Teste ({len(test_df)})")
    
    output_dir.mkdir(parents=True, exist_ok=True)
    train_df.to_parquet(output_dir / "train.parquet", index=False)
    val_df.to_parquet(output_dir / "val.parquet", index=False)
    test_df.to_parquet(output_dir / "test.parquet", index=False)

def main():
    base_dir = Path(__file__).resolve().parent.parent.parent
    input_path = base_dir / "data" / "processed" / "ufc_data_clean.parquet"
    output_dir = base_dir / "data" / "features"
    
    if not input_path.exists():
        logger.error(f"Arquivo de origem nao encontrado: {input_path}")
        return
        
    logger.info("Iniciando engenharia de features")
    df = pd.read_parquet(input_path)
    
    df_features = calculate_deltas(df)
    df_symmetric = symmetrize_data(df_features)
    
    split_and_save(df_symmetric, output_dir)
    logger.info("Processo concluido com sucesso")

if __name__ == "__main__":
    main()
