import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, roc_auc_score

print("Lendo master_enriched.csv...")
df = pd.read_csv(r"services\mlops\data\processed\master_enriched.csv", low_memory=False)
df['event_date'] = pd.to_datetime(df['event_date'], errors='coerce')
weight_map = {"Strawweight": 115, "Flyweight": 125, "Bantamweight": 135, "Featherweight": 145, "Lightweight": 155, "Welterweight": 170, "Middleweight": 185, "Light Heavyweight": 205, "Heavyweight": 265, "Women's Strawweight": 115, "Women's Flyweight": 125, "Women's Bantamweight": 135, "Women's Featherweight": 145}
df['weight_limit'] = df['weight_class'].map(weight_map).fillna(170)
df = df[df['result_status'] == 'win'].copy()
df['winner'] = np.where(df['winner_id'] == df['r_fighter_id'], 'R', 'B')

def parse_height(height_str: str) -> float:
    if pd.isna(height_str) or not isinstance(height_str, str): return np.nan
    try:
        parts = height_str.replace('"', '').replace(' ', '').split("'")
        feet = float(parts[0])
        inches = float(parts[1]) if len(parts) > 1 and parts[1] else 0.0
        return round((feet * 30.48) + (inches * 2.54), 2)
    except: return np.nan

df['r_height_cm'] = df['r_height'].apply(parse_height)
df['b_height_cm'] = df['b_height'].apply(parse_height)
df['r_reach_cm'] = df['r_reach_inches'] * 2.54
df['b_reach_cm'] = df['b_reach_inches'] * 2.54

# Age parsing
df['r_dob'] = pd.to_datetime(df['r_dob'], errors='coerce')
df['b_dob'] = pd.to_datetime(df['b_dob'], errors='coerce')
df['r_age'] = (df['event_date'] - df['r_dob']).dt.days / 365.25
df['b_age'] = (df['event_date'] - df['b_dob']).dt.days / 365.25

# Threshold feature: is age > 35 in a division <= 170 lbs?
df['r_age_penalty'] = ((df['r_age'] > 35) & (df['weight_limit'] <= 170)).astype(int)
df['b_age_penalty'] = ((df['b_age'] > 35) & (df['weight_limit'] <= 170)).astype(int)

# DELTAS
df_feat = pd.DataFrame()
df_feat['fight_id'] = df['fight_id']
df_feat['winner'] = df['winner']

df_feat['delta_roll_sig'] = df['r_roll_sig_landed'] - df['b_roll_sig_landed']
df_feat['delta_roll_td'] = df['r_roll_td_success'] - df['b_roll_td_success']
df_feat['delta_height'] = df['r_height_cm'] - df['b_height_cm']
df_feat['delta_reach'] = df['r_reach_cm'] - df['b_reach_cm']
df_feat['delta_age'] = df['r_age'] - df['b_age']

df_feat['delta_elo'] = df['r_elo_pre'] - df['b_elo_pre']
df_feat['delta_inactivity'] = df['r_days_inactive'] - df['b_days_inactive']
df_feat['delta_streak'] = df['r_streak'] - df['b_streak']
df_feat['delta_age_penalty'] = df['r_age_penalty'] - df['b_age_penalty']

# Drop NAs
df_feat = df_feat.dropna()

# SYMMETRIZE
df_inverted = df_feat.copy()
df_inverted['winner'] = df_inverted['winner'].map({'R': 'B', 'B': 'R'})
delta_cols = [c for c in df_inverted.columns if c.startswith('delta_')]
for c in delta_cols:
    df_inverted[c] = -df_inverted[c]

df_sym = pd.concat([df_feat, df_inverted], ignore_index=True)
df_sym = df_sym.drop_duplicates(subset=['fight_id', 'winner'])

df_sym['target'] = (df_sym['winner'] == 'R').astype(int)
df_sym = df_sym.drop(columns=['fight_id', 'winner'])

train_df, temp_df = train_test_split(df_sym, test_size=0.30, random_state=42, stratify=df_sym['target'])
val_df, test_df = train_test_split(temp_df, test_size=0.50, random_state=42, stratify=temp_df['target'])

def train_and_eval(features, name):
    X_tr, y_tr = train_df[features], train_df['target']
    X_v, y_v = val_df[features], val_df['target']
    X_te, y_te = test_df[features], test_df['target']
    
    clf = xgb.XGBClassifier(n_estimators=100, max_depth=4, learning_rate=0.05, 
                            subsample=0.8, early_stopping_rounds=10, random_state=42, eval_metric='logloss')
    clf.fit(X_tr, y_tr, eval_set=[(X_v, y_v)], verbose=False)
    
    y_pred = clf.predict(X_te)
    y_prob = clf.predict_proba(X_te)[:, 1]
    
    acc = accuracy_score(y_te, y_pred)
    roc = roc_auc_score(y_te, y_prob)
    print(f"[{name}] Acc: {acc:.4f} | ROC-AUC: {roc:.4f}")

base_features = ['delta_roll_sig', 'delta_roll_td', 'delta_height', 'delta_reach', 'delta_age']

print("\n--- RESULTADOS DOS EXPERIMENTOS ---")
train_and_eval(base_features, "1. BASE (Rolling Avg 5 lutas + Físico)")
train_and_eval(base_features + ['delta_elo'], "2. BASE + Elo Rating")
train_and_eval(base_features + ['delta_inactivity'], "3. BASE + Inatividade")
train_and_eval(base_features + ['delta_streak'], "4. BASE + Sequência de Vitórias (Streak)")
train_and_eval(base_features + ['delta_age_penalty'], "5. BASE + Penalidade Idade > 35 em Peso Leve")
train_and_eval(base_features + ['delta_elo', 'delta_inactivity', 'delta_streak', 'delta_age_penalty'], "6. TODAS AS FEATURES COMBINADAS")
