import logging
from pathlib import Path
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

K_FACTOR = 32

def expected_score(rating_a, rating_b):
    return 1 / (1 + 10 ** ((rating_b - rating_a) / 400))

def build_temporal_features(df: pd.DataFrame) -> pd.DataFrame:
    logger.info("Construindo features temporais avançadas (Elo, Inatividade, Streaks, Rolling Avg)...")
    df['event_date'] = pd.to_datetime(df['event_date'], errors='coerce')
    df = df.sort_values('event_date').reset_index(drop=True)
    
    weight_map = {
        "Strawweight": 115, "Flyweight": 125, "Bantamweight": 135,
        "Featherweight": 145, "Lightweight": 155, "Welterweight": 170,
        "Middleweight": 185, "Light Heavyweight": 205, "Heavyweight": 265,
        "Women's Strawweight": 115, "Women's Flyweight": 125,
        "Women's Bantamweight": 135, "Women's Featherweight": 145
    }
    df['weight_limit'] = df['weight_class'].map(weight_map).fillna(170)
    
    fighter_stats = {}
    fighter_elo = {}
    enriched_rows = []
    
    for idx, row in df.iterrows():
        r_id = row['r_fighter_id']
        b_id = row['b_fighter_id']
        date = row['event_date']
        
        if r_id not in fighter_stats: fighter_stats[r_id] = []
        if b_id not in fighter_stats: fighter_stats[b_id] = []
        if r_id not in fighter_elo: fighter_elo[r_id] = 1500.0
        if b_id not in fighter_elo: fighter_elo[b_id] = 1500.0
        
        r_elo_pre = fighter_elo[r_id]
        b_elo_pre = fighter_elo[b_id]
        
        r_hist = fighter_stats[r_id]
        b_hist = fighter_stats[b_id]
        
        r_days_inactive = (date - r_hist[-1]['date']).days if r_hist else 0
        b_days_inactive = (date - b_hist[-1]['date']).days if b_hist else 0
        
        def get_streak(hist):
            streak = 0
            for h in reversed(hist):
                if h['win'] == 1:
                    if streak >= 0: streak += 1
                    else: break
                elif h['win'] == 0:
                    if streak <= 0: streak -= 1
                    else: break
            return streak
            
        r_streak = get_streak(r_hist)
        b_streak = get_streak(b_hist)
        
        def get_rolling(hist, col, n=5):
            recent = hist[-n:]
            if not recent: return 0.0
            return np.mean([x[col] for x in recent])
            
        r_roll_sig = get_rolling(r_hist, 'sig_landed')
        b_roll_sig = get_rolling(b_hist, 'sig_landed')
        r_roll_td = get_rolling(r_hist, 'td_success')
        b_roll_td = get_rolling(b_hist, 'td_success')
        
        r_won = 1 if row['winner_id'] == r_id else 0
        b_won = 1 if row['winner_id'] == b_id else 0
        
        row_features = {
            'fight_id': row['fight_id'],
            'r_elo_pre': r_elo_pre, 'b_elo_pre': b_elo_pre,
            'r_days_inactive': r_days_inactive, 'b_days_inactive': b_days_inactive,
            'r_streak': r_streak, 'b_streak': b_streak,
            'r_roll_sig': r_roll_sig, 'b_roll_sig': b_roll_sig,
            'r_roll_td': r_roll_td, 'b_roll_td': b_roll_td
        }
        enriched_rows.append(row_features)
        
        if r_won or b_won:
            r_exp = expected_score(r_elo_pre, b_elo_pre)
            b_exp = expected_score(b_elo_pre, r_elo_pre)
            fighter_elo[r_id] += K_FACTOR * (r_won - r_exp)
            fighter_elo[b_id] += K_FACTOR * (b_won - b_exp)
            
        def safe_float(val):
            try: return float(val)
            except: return 0.0
            
        fighter_stats[r_id].append({'date': date, 'win': r_won, 'sig_landed': safe_float(row.get('r_total_sig_landed', 0)), 'td_success': safe_float(row.get('r_total_td_success', 0))})
        fighter_stats[b_id].append({'date': date, 'win': b_won, 'sig_landed': safe_float(row.get('b_total_sig_landed', 0)), 'td_success': safe_float(row.get('b_total_td_success', 0))})

    df_feat = pd.DataFrame(enriched_rows)
    df_merged = pd.merge(df, df_feat, on='fight_id', how='left')
    return df_merged

def calculate_deltas(df: pd.DataFrame) -> pd.DataFrame:
    df_feat = pd.DataFrame()
    df_feat['fight_id'] = df['fight_id']
    df_feat['winner'] = df['winner']
    
    df_feat['delta_roll_sig'] = df['r_roll_sig'] - df['b_roll_sig']
    df_feat['delta_roll_td'] = df['r_roll_td'] - df['b_roll_td']
    df_feat['delta_height_cm'] = df['r_height_cm'] - df['b_height_cm']
    df_feat['delta_reach_cm'] = df['r_reach_cm'] - df['b_reach_cm']
    
    df['r_dob'] = pd.to_datetime(df['r_dob'], errors='coerce')
    df['b_dob'] = pd.to_datetime(df['b_dob'], errors='coerce')
    r_age = (df['event_date'] - df['r_dob']).dt.days / 365.25
    b_age = (df['event_date'] - df['b_dob']).dt.days / 365.25
    df_feat['delta_age'] = r_age - b_age
    
    r_age_penalty = ((r_age > 35) & (df['weight_limit'] <= 170)).astype(int)
    b_age_penalty = ((b_age > 35) & (df['weight_limit'] <= 170)).astype(int)
    df_feat['delta_age_penalty'] = r_age_penalty - b_age_penalty
    
    df_feat['delta_elo'] = df['r_elo_pre'] - df['b_elo_pre']
    df_feat['delta_inactivity'] = df['r_days_inactive'] - df['b_days_inactive']
    df_feat['delta_streak'] = df['r_streak'] - df['b_streak']
    
    return df_feat.dropna()

def symmetrize_data(df: pd.DataFrame) -> pd.DataFrame:
    df_inverted = df.copy()
    
    df_inverted['winner'] = df_inverted['winner'].map({'R': 'B', 'B': 'R'})
    
    delta_cols = [c for c in df_inverted.columns if c.startswith('delta_')]
    for c in delta_cols:
        df_inverted[c] = -df_inverted[c]
        
    df_symmetric = pd.concat([df, df_inverted], ignore_index=True)
    df_symmetric = df_symmetric.drop_duplicates(subset=['fight_id', 'winner'])
    
    return df_symmetric

def split_and_save(df: pd.DataFrame, output_dir: Path):
    df_valid = df.dropna(subset=['winner']).copy()
    df_valid['target'] = (df_valid['winner'] == 'R').astype(int)
    
    features_to_keep = [c for c in df_valid.columns if c.startswith('delta_')] + ['target']
    df_final = df_valid[features_to_keep]

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
    
    df_enriched = build_temporal_features(df)
    df_features = calculate_deltas(df_enriched)
    df_symmetric = symmetrize_data(df_features)
    
    split_and_save(df_symmetric, output_dir)
    logger.info("Processo concluido com sucesso")

if __name__ == "__main__":
    main()
