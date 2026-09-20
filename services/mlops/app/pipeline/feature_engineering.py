import logging
from pathlib import Path
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

K_FACTOR = 32
STANCE_ENCODE = {'Orthodox': 0, 'Southpaw': 1, 'Switch': 2}

ROLLING_STATS = [
    'sig_landed', 'sig_atmp', 'kd', 'td_success', 'td_atmp',
    'sub_att', 'ctrl_seconds', 'sig_str_landed_head', 'sig_str_landed_body',
    'sig_str_landed_leg', 'sig_str_landed_distance', 'sig_str_landed_clinch',
    'sig_str_landed_ground', 'total_str_landed'
]

def expected_score(ra, rb):
    return 1 / (1 + 10 ** ((rb - ra) / 400))

def parse_height(h):
    if pd.isna(h) or not isinstance(h, str): return np.nan
    try:
        p = h.replace('"','').replace(' ','').split("'")
        return round(float(p[0]) * 30.48 + (float(p[1]) if len(p) > 1 and p[1] else 0) * 2.54, 2)
    except: return np.nan

def safe_float(v):
    try: return float(v)
    except: return 0.0

def build_temporal_features(df: pd.DataFrame) -> pd.DataFrame:
    logger.info("Construindo features temporais (Elo, Rolling Avg x14, Streaks, Inatividade, Win Rate, Finish Rate)...")
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

    fighter_history = {}
    fighter_elo = {}
    enriched = []

    for idx, row in df.iterrows():
        r_id, b_id = row['r_fighter_id'], row['b_fighter_id']
        date = row['event_date']

        if r_id not in fighter_history: fighter_history[r_id] = []
        if b_id not in fighter_history: fighter_history[b_id] = []
        if r_id not in fighter_elo: fighter_elo[r_id] = 1500.0
        if b_id not in fighter_elo: fighter_elo[b_id] = 1500.0

        r_hist, b_hist = fighter_history[r_id], fighter_history[b_id]
        r_elo_pre, b_elo_pre = fighter_elo[r_id], fighter_elo[b_id]

        r_days = (date - r_hist[-1]['date']).days if r_hist else 0
        b_days = (date - b_hist[-1]['date']).days if b_hist else 0

        def get_streak(hist):
            s = 0
            for h in reversed(hist):
                if h['win'] == 1:
                    if s >= 0: s += 1
                    else: break
                elif h['win'] == 0:
                    if s <= 0: s -= 1
                    else: break
            return s

        def get_rolling(hist, col, n=5):
            recent = hist[-n:]
            return np.mean([x.get(col, 0) for x in recent]) if recent else 0.0

        def get_win_rate(hist, n=5):
            recent = hist[-n:]
            return np.mean([x['win'] for x in recent]) if recent else 0.5

        def get_finish_rate(hist, n=10):
            recent = hist[-n:]
            return np.mean([x.get('was_finish', 0) for x in recent]) if recent else 0.0

        feat = {
            'fight_id': row['fight_id'],
            'r_elo': r_elo_pre, 'b_elo': b_elo_pre,
            'r_days_inactive': r_days, 'b_days_inactive': b_days,
            'r_streak': get_streak(r_hist), 'b_streak': get_streak(b_hist),
            'r_win_rate_5': get_win_rate(r_hist, 5), 'b_win_rate_5': get_win_rate(b_hist, 5),
            'r_finish_rate': get_finish_rate(r_hist), 'b_finish_rate': get_finish_rate(b_hist),
            'r_num_fights': len(r_hist), 'b_num_fights': len(b_hist),
        }
        for stat in ROLLING_STATS:
            feat[f'r_roll_{stat}'] = get_rolling(r_hist, stat)
            feat[f'b_roll_{stat}'] = get_rolling(b_hist, stat)
        enriched.append(feat)

        r_won = 1 if row['winner_id'] == r_id else 0
        b_won = 1 if row['winner_id'] == b_id else 0
        is_finish = 1 if row.get('method', '') in ['KO/TKO', 'Submission'] else 0

        if r_won or b_won:
            r_exp = expected_score(r_elo_pre, b_elo_pre)
            b_exp = expected_score(b_elo_pre, r_elo_pre)
            fighter_elo[r_id] += K_FACTOR * (r_won - r_exp)
            fighter_elo[b_id] += K_FACTOR * (b_won - b_exp)

        fighter_history[r_id].append({
            'date': date, 'win': r_won, 'was_finish': is_finish if r_won else 0,
            **{s: safe_float(row.get(f'r_total_{s}', 0)) for s in ROLLING_STATS}
        })
        fighter_history[b_id].append({
            'date': date, 'win': b_won, 'was_finish': is_finish if b_won else 0,
            **{s: safe_float(row.get(f'b_total_{s}', 0)) for s in ROLLING_STATS}
        })

    df_feat = pd.DataFrame(enriched)
    return pd.merge(df, df_feat, on='fight_id', how='left')

def calculate_deltas(df: pd.DataFrame) -> pd.DataFrame:
    r_age = np.nan
    b_age = np.nan

    if 'r_height' in df.columns:
        df['r_height_cm'] = df['r_height'].apply(parse_height)
        df['b_height_cm'] = df['b_height'].apply(parse_height)

    if 'r_reach_inches' in df.columns:
        df['r_reach_cm'] = df['r_reach_inches'] * 2.54
        df['b_reach_cm'] = df['b_reach_inches'] * 2.54

    df['r_dob'] = pd.to_datetime(df['r_dob'], errors='coerce')
    df['b_dob'] = pd.to_datetime(df['b_dob'], errors='coerce')
    r_age = (df['event_date'] - df['r_dob']).dt.days / 365.25
    b_age = (df['event_date'] - df['b_dob']).dt.days / 365.25

    if 'r_stance' in df.columns:
        df['r_stance_enc'] = df['r_stance'].map(STANCE_ENCODE).fillna(-1)
        df['b_stance_enc'] = df['b_stance'].map(STANCE_ENCODE).fillna(-1)
    else:
        df['r_stance_enc'] = -1
        df['b_stance_enc'] = -1

    out = pd.DataFrame()
    out['fight_id'] = df['fight_id']
    out['winner'] = df['winner']

    out['delta_elo'] = df['r_elo'] - df['b_elo']
    out['delta_days_inactive'] = df['r_days_inactive'] - df['b_days_inactive']
    out['delta_streak'] = df['r_streak'] - df['b_streak']
    out['delta_win_rate'] = df['r_win_rate_5'] - df['b_win_rate_5']
    out['delta_finish_rate'] = df['r_finish_rate'] - df['b_finish_rate']
    out['delta_experience'] = df['r_num_fights'] - df['b_num_fights']
    out['delta_height'] = df['r_height_cm'] - df['b_height_cm']
    out['delta_reach'] = df['r_reach_cm'] - df['b_reach_cm']
    out['delta_age'] = r_age - b_age
    out['r_age_over35'] = (r_age > 35).astype(int)
    out['b_age_over35'] = (b_age > 35).astype(int)
    out['stance_matchup'] = df['r_stance_enc'] - df['b_stance_enc']

    for stat in ROLLING_STATS:
        out[f'delta_roll_{stat}'] = df[f'r_roll_{stat}'] - df[f'b_roll_{stat}']

    return out.dropna()

def symmetrize_data(df: pd.DataFrame) -> pd.DataFrame:
    inv = df.copy()
    inv['winner'] = inv['winner'].map({'R': 'B', 'B': 'R'})
    delta_cols = [c for c in inv.columns if c.startswith('delta_')]
    for c in delta_cols:
        inv[c] = -inv[c]
    inv[['r_age_over35', 'b_age_over35']] = inv[['b_age_over35', 'r_age_over35']].values
    inv['stance_matchup'] = -inv['stance_matchup']
    sym = pd.concat([df, inv], ignore_index=True)
    return sym.drop_duplicates(subset=['fight_id', 'winner'])

def split_and_save(df: pd.DataFrame, output_dir: Path):
    df_valid = df.dropna(subset=['winner']).copy()
    df_valid['target'] = (df_valid['winner'] == 'R').astype(int)
    features_to_keep = [c for c in df_valid.columns if c not in ['fight_id', 'winner']]
    df_final = df_valid[features_to_keep]

    train_df, temp_df = train_test_split(df_final, test_size=0.30, random_state=42, stratify=df_final['target'])
    val_df, test_df = train_test_split(temp_df, test_size=0.50, random_state=42, stratify=temp_df['target'])

    logger.info(f"Splits: Treino ({len(train_df)}), Validacao ({len(val_df)}), Teste ({len(test_df)})")
    logger.info(f"Features finais: {len(features_to_keep) - 1}")

    output_dir.mkdir(parents=True, exist_ok=True)
    train_df.to_parquet(output_dir / "train.parquet", index=False)
    val_df.to_parquet(output_dir / "val.parquet", index=False)
    test_df.to_parquet(output_dir / "test.parquet", index=False)

def main():
    base_dir = Path(__file__).resolve().parent.parent.parent
    input_path = base_dir / "data" / "raw" / "master.csv"
    output_dir = base_dir / "data" / "features"

    if not input_path.exists():
        logger.error(f"Arquivo nao encontrado: {input_path}")
        return

    logger.info("Iniciando engenharia de features v3")
    df = pd.read_csv(input_path, low_memory=False)

    df_enriched = build_temporal_features(df)
    df_enriched = df_enriched[df_enriched['result_status'] == 'win'].copy()
    df_enriched['winner'] = np.where(df_enriched['winner_id'] == df_enriched['r_fighter_id'], 'R', 'B')

    df_deltas = calculate_deltas(df_enriched)
    df_sym = symmetrize_data(df_deltas)
    split_and_save(df_sym, output_dir)
    logger.info("Concluido")

if __name__ == "__main__":
    main()
