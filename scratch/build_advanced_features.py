import pandas as pd
import numpy as np
from datetime import datetime

print("Lendo master.csv...")
df = pd.read_csv(r"services\mlops\data\raw\master.csv", low_memory=False)
df['event_date'] = pd.to_datetime(df['event_date'])
df = df.sort_values('event_date').reset_index(drop=True)

# Parse weight classes to numeric limits (rough estimation in lbs)
weight_map = {
    "Strawweight": 115, "Flyweight": 125, "Bantamweight": 135,
    "Featherweight": 145, "Lightweight": 155, "Welterweight": 170,
    "Middleweight": 185, "Light Heavyweight": 205, "Heavyweight": 265,
    "Women's Strawweight": 115, "Women's Flyweight": 125,
    "Women's Bantamweight": 135, "Women's Featherweight": 145
}
df['weight_limit'] = df['weight_class'].map(weight_map).fillna(170)

# Initialize structures
fighter_stats = {} # fighter_id -> list of dicts with fight results and stats
fighter_elo = {} # fighter_id -> float

K_FACTOR = 32

def expected_score(rating_a, rating_b):
    return 1 / (1 + 10 ** ((rating_b - rating_a) / 400))

enriched_rows = []

print("Calculando features temporais (Elo, Inatividade, Streaks, Rolling Avg)...")
for idx, row in df.iterrows():
    r_id = row['r_fighter_id']
    b_id = row['b_fighter_id']
    date = row['event_date']
    
    # Initialize missing fighters
    if r_id not in fighter_stats: fighter_stats[r_id] = []
    if b_id not in fighter_stats: fighter_stats[b_id] = []
    if r_id not in fighter_elo: fighter_elo[r_id] = 1500.0
    if b_id not in fighter_elo: fighter_elo[b_id] = 1500.0
    
    # 1. Elo Rating BEFORE the fight
    r_elo_pre = fighter_elo[r_id]
    b_elo_pre = fighter_elo[b_id]
    
    # 2. Inactivity
    r_hist = fighter_stats[r_id]
    b_hist = fighter_stats[b_id]
    
    r_days_inactive = (date - r_hist[-1]['date']).days if r_hist else 0
    b_days_inactive = (date - b_hist[-1]['date']).days if b_hist else 0
    
    # 3. Streaks
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
    
    # 4. Rolling Averages (last 5 fights)
    def get_rolling(hist, col, n=5):
        recent = hist[-n:]
        if not recent: return 0.0
        return np.mean([x[col] for x in recent])
        
    r_roll_sig_landed = get_rolling(r_hist, 'sig_landed')
    b_roll_sig_landed = get_rolling(b_hist, 'sig_landed')
    r_roll_td_success = get_rolling(r_hist, 'td_success')
    b_roll_td_success = get_rolling(b_hist, 'td_success')
    
    # Check if the result was a win
    r_won = 1 if row['winner_id'] == r_id else 0
    b_won = 1 if row['winner_id'] == b_id else 0
    
    # Save features for this row
    row_features = {
        'fight_id': row['fight_id'],
        'r_elo_pre': r_elo_pre, 'b_elo_pre': b_elo_pre,
        'r_days_inactive': r_days_inactive, 'b_days_inactive': b_days_inactive,
        'r_streak': r_streak, 'b_streak': b_streak,
        'r_roll_sig_landed': r_roll_sig_landed, 'b_roll_sig_landed': b_roll_sig_landed,
        'r_roll_td_success': r_roll_td_success, 'b_roll_td_success': b_roll_td_success,
        'weight_limit': row['weight_limit']
    }
    enriched_rows.append(row_features)
    
    # UPDATE ELO AFTER FIGHT
    if r_won or b_won: # ignore draws for simplicity
        r_exp = expected_score(r_elo_pre, b_elo_pre)
        b_exp = expected_score(b_elo_pre, r_elo_pre)
        fighter_elo[r_id] = r_elo_pre + K_FACTOR * (r_won - r_exp)
        fighter_elo[b_id] = b_elo_pre + K_FACTOR * (b_won - b_exp)
        
    # UPDATE HISTORY
    # safely parse fight stats
    def safe_float(val):
        try: return float(val)
        except: return 0.0
        
    fighter_stats[r_id].append({
        'date': date, 'win': r_won, 
        'sig_landed': safe_float(row.get('r_total_sig_landed', 0)),
        'td_success': safe_float(row.get('r_total_td_success', 0))
    })
    fighter_stats[b_id].append({
        'date': date, 'win': b_won, 
        'sig_landed': safe_float(row.get('b_total_sig_landed', 0)),
        'td_success': safe_float(row.get('b_total_td_success', 0))
    })

df_feat = pd.DataFrame(enriched_rows)
df_final = pd.merge(df, df_feat, on='fight_id', how='left')

df_final.to_parquet(r"services\mlops\data\processed\master_enriched.parquet", index=False)
print("Features avancadas salvas em master_enriched.parquet")
