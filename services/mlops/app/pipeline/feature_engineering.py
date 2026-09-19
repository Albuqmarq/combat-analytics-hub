import logging
from pathlib import Path
import pandas as pd
from sklearn.model_selection import train_test_split

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def calculate_deltas(df: pd.DataFrame) -> pd.DataFrame:
    df_feat = df.copy()
    
    if 'r_slpm' in df_feat.columns and 'b_slpm' in df_feat.columns:
        df_feat['delta_slpm'] = df_feat['r_slpm'] - df_feat['b_slpm']
        
    if 'r_str_def' in df_feat.columns and 'b_str_def' in df_feat.columns:
        df_feat['delta_str_def'] = df_feat['r_str_def'] - df_feat['b_str_def']
        
    if 'r_td_def' in df_feat.columns and 'b_td_def' in df_feat.columns:
        df_feat['delta_td_def'] = df_feat['r_td_def'] - df_feat['b_td_def']
        
    if 'r_height_cm' in df_feat.columns and 'b_height_cm' in df_feat.columns:
        df_feat['delta_height_cm'] = df_feat['r_height_cm'] - df_feat['b_height_cm']
        
    if 'r_reach_cm' in df_feat.columns and 'b_reach_cm' in df_feat.columns:
        df_feat['delta_reach_cm'] = df_feat['r_reach_cm'] - df_feat['b_reach_cm']

    return df_feat

def symmetrize_data(df: pd.DataFrame) -> pd.DataFrame:
    df_inverted = df.copy()
    
    rename_map = {}
    for col in df.columns:
        if col.startswith('r_'):
            rename_map[col] = 'b_' + col[2:]
        elif col.startswith('b_'):
            rename_map[col] = 'r_' + col[2:]
            
    df_inverted = df_inverted.rename(columns=rename_map)
    
    delta_cols = [c for c in df_inverted.columns if c.startswith('delta_')]
    for c in delta_cols:
        df_inverted[c] = -df_inverted[c]
        
    if 'winner' in df_inverted.columns:
        df_inverted['winner'] = df_inverted['winner'].map({'R': 'B', 'B': 'R'})
        
    df_symmetric = pd.concat([df, df_inverted], ignore_index=True)
    df_symmetric = df_symmetric.drop_duplicates(subset=['fight_id', 'winner'])
    
    return df_symmetric

def split_and_save(df: pd.DataFrame, output_dir: Path):
    if 'winner' not in df.columns:
        logger.warning("Coluna 'winner' nao encontrada. Salvando dataset completo sem split.")
        df.to_parquet(output_dir / "features_full.parquet", index=False)
        return

    df_valid = df.dropna(subset=['winner']).copy()
    df_valid['target'] = (df_valid['winner'] == 'R').astype(int)
    
    features_to_keep = [c for c in df_valid.columns if c.startswith('delta_')] + ['target']
    df_final = df_valid[features_to_keep].dropna()

    train_df, temp_df = train_test_split(df_final, test_size=0.30, random_state=42, stratify=df_final['target'])
    val_df, test_df = train_test_split(temp_df, test_size=0.50, random_state=42, stratify=temp_df['target'])
    
    logger.info(f"Splits gerados: Treino ({len(train_df)}), Validacao ({len(val_df)}), Teste ({len(test_df)})")
    
    output_dir.mkdir(parents=True, exist_ok=True)
    train_df.to_parquet(output_dir / "train.parquet", index=False)
    val_df.to_parquet(output_dir / "val.parquet", index=False)
    test_df.to_parquet(output_dir / "test.parquet", index=False)

def main():
    base_dir = Path(__file__).resolve().parent.parent.parent
    input_path = base_dir / "data" / "processed" / "master_clean.parquet"
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
