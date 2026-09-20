import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, roc_auc_score
from sklearn.model_selection import RandomizedSearchCV

df = pd.read_csv(r"services\mlops\data\raw\master.csv", low_memory=False)
df['event_date'] = pd.to_datetime(df['event_date'])
df = df.sort_values('event_date').reset_index(drop=True)

weight_map = {
    "Strawweight": 115, "Flyweight": 125, "Bantamweight": 135,
    "Featherweight": 145, "Lightweight": 155, "Welterweight": 170,
    "Middleweight": 185, "Light Heavyweight": 205, "Heavyweight": 265,
    "Women's Strawweight": 115, "Women's Flyweight": 125,
    "Women's Bantamweight": 135, "Women's Featherweight": 145
}
df['weight_limit'] = df['weight_class'].map(weight_map).fillna(170)

K_FACTOR = 32
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

ROLLING_STATS = [
    'sig_landed', 'sig_atmp', 'kd', 'td_success', 'td_atmp',
    'sub_att', 'ctrl_seconds', 'sig_str_landed_head', 'sig_str_landed_body',
    'sig_str_landed_leg', 'sig_str_landed_distance', 'sig_str_landed_clinch',
    'sig_str_landed_ground', 'total_str_landed'
]

STANCE_ENCODE = {'Orthodox': 0, 'Southpaw': 1, 'Switch': 2}

fighter_history = {}
fighter_elo = {}
enriched = []

print("Fase 1: Construindo features temporais expandidas...")
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
        if not recent: return 0.0
        return np.mean([x.get('was_finish', 0) for x in recent])

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
    is_finish = 1 if row.get('method','') in ['KO/TKO','Submission'] else 0

    if r_won or b_won:
        r_exp = expected_score(r_elo_pre, b_elo_pre)
        b_exp = expected_score(b_elo_pre, r_elo_pre)
        fighter_elo[r_id] += K_FACTOR * (r_won - r_exp)
        fighter_elo[b_id] += K_FACTOR * (b_won - b_exp)

    base_stats = {}
    for stat in ROLLING_STATS:
        col_r = f'r_total_{stat}'
        col_b = f'b_total_{stat}'
        base_stats[stat] = safe_float(row.get(col_r, 0))
        base_stats[f'b_{stat}'] = safe_float(row.get(col_b, 0))

    fighter_history[r_id].append({
        'date': date, 'win': r_won, 'was_finish': is_finish if r_won else 0,
        **{s: safe_float(row.get(f'r_total_{s}', 0)) for s in ROLLING_STATS}
    })
    fighter_history[b_id].append({
        'date': date, 'win': b_won, 'was_finish': is_finish if b_won else 0,
        **{s: safe_float(row.get(f'b_total_{s}', 0)) for s in ROLLING_STATS}
    })

df_feat = pd.DataFrame(enriched)
df_merged = pd.merge(df, df_feat, on='fight_id', how='left')

df_merged = df_merged[df_merged['result_status'] == 'win'].copy()
df_merged['winner'] = np.where(df_merged['winner_id'] == df_merged['r_fighter_id'], 'R', 'B')

df_merged['r_height_cm'] = df_merged['r_height'].apply(parse_height)
df_merged['b_height_cm'] = df_merged['b_height'].apply(parse_height)
df_merged['r_reach_cm'] = df_merged['r_reach_inches'] * 2.54
df_merged['b_reach_cm'] = df_merged['b_reach_inches'] * 2.54
df_merged['r_dob'] = pd.to_datetime(df_merged['r_dob'], errors='coerce')
df_merged['b_dob'] = pd.to_datetime(df_merged['b_dob'], errors='coerce')
df_merged['r_age'] = (df_merged['event_date'] - df_merged['r_dob']).dt.days / 365.25
df_merged['b_age'] = (df_merged['event_date'] - df_merged['b_dob']).dt.days / 365.25
df_merged['r_stance_enc'] = df_merged['r_stance'].map(STANCE_ENCODE).fillna(-1)
df_merged['b_stance_enc'] = df_merged['b_stance'].map(STANCE_ENCODE).fillna(-1)

print("Fase 2: Calculando deltas...")
final = pd.DataFrame()
final['fight_id'] = df_merged['fight_id']
final['winner'] = df_merged['winner']

final['delta_elo'] = df_merged['r_elo'] - df_merged['b_elo']
final['delta_days_inactive'] = df_merged['r_days_inactive'] - df_merged['b_days_inactive']
final['delta_streak'] = df_merged['r_streak'] - df_merged['b_streak']
final['delta_win_rate'] = df_merged['r_win_rate_5'] - df_merged['b_win_rate_5']
final['delta_finish_rate'] = df_merged['r_finish_rate'] - df_merged['b_finish_rate']
final['delta_experience'] = df_merged['r_num_fights'] - df_merged['b_num_fights']
final['delta_height'] = df_merged['r_height_cm'] - df_merged['b_height_cm']
final['delta_reach'] = df_merged['r_reach_cm'] - df_merged['b_reach_cm']
final['delta_age'] = df_merged['r_age'] - df_merged['b_age']
final['r_age_over35'] = (df_merged['r_age'] > 35).astype(int)
final['b_age_over35'] = (df_merged['b_age'] > 35).astype(int)
final['stance_matchup'] = df_merged['r_stance_enc'] - df_merged['b_stance_enc']

for stat in ROLLING_STATS:
    final[f'delta_roll_{stat}'] = df_merged[f'r_roll_{stat}'] - df_merged[f'b_roll_{stat}']

final = final.dropna()

inv = final.copy()
inv['winner'] = inv['winner'].map({'R': 'B', 'B': 'R'})
delta_cols = [c for c in inv.columns if c.startswith('delta_')]
for c in delta_cols:
    inv[c] = -inv[c]
inv[['r_age_over35', 'b_age_over35']] = inv[['b_age_over35', 'r_age_over35']].values
inv['stance_matchup'] = -inv['stance_matchup']

sym = pd.concat([final, inv], ignore_index=True).drop_duplicates(subset=['fight_id', 'winner'])
sym['target'] = (sym['winner'] == 'R').astype(int)
feature_cols = [c for c in sym.columns if c not in ['fight_id', 'winner', 'target']]

X = sym[feature_cols]
y = sym['target']
X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.30, random_state=42, stratify=y)
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.50, random_state=42, stratify=y_temp)

print(f"\nSplit: Train {len(X_train)} | Val {len(X_val)} | Test {len(X_test)}")
print(f"Features usadas: {len(feature_cols)}")

print("\n--- EXPERIMENTO A: XGBoost com features expandidas (defaults) ---")
clf_a = xgb.XGBClassifier(n_estimators=200, max_depth=4, learning_rate=0.05, subsample=0.8,
                           colsample_bytree=0.8, early_stopping_rounds=15, random_state=42, eval_metric='logloss')
clf_a.fit(X_train, y_train, eval_set=[(X_val, y_val)], verbose=False)
y_pred_a = clf_a.predict(X_test)
y_prob_a = clf_a.predict_proba(X_test)[:, 1]
acc_a = accuracy_score(y_test, y_pred_a)
roc_a = roc_auc_score(y_test, y_prob_a)
print(f"   Acc: {acc_a:.4f} | ROC-AUC: {roc_a:.4f}")

print("\n--- EXPERIMENTO B: XGBoost com hyperparameter tuning ---")
param_dist = {
    'n_estimators': [100, 200, 300, 500],
    'max_depth': [3, 4, 5, 6],
    'learning_rate': [0.01, 0.03, 0.05, 0.1],
    'subsample': [0.7, 0.8, 0.9],
    'colsample_bytree': [0.6, 0.7, 0.8, 0.9],
    'min_child_weight': [1, 3, 5],
    'gamma': [0, 0.1, 0.3],
    'reg_alpha': [0, 0.1, 0.5],
    'reg_lambda': [1, 1.5, 2]
}
search = RandomizedSearchCV(
    xgb.XGBClassifier(eval_metric='logloss', random_state=42),
    param_distributions=param_dist,
    n_iter=50, cv=5, scoring='roc_auc', random_state=42, n_jobs=-1, verbose=0
)
search.fit(X_train, y_train)
best = search.best_estimator_
y_pred_b = best.predict(X_test)
y_prob_b = best.predict_proba(X_test)[:, 1]
acc_b = accuracy_score(y_test, y_pred_b)
roc_b = roc_auc_score(y_test, y_prob_b)
print(f"   Best params: {search.best_params_}")
print(f"   Acc: {acc_b:.4f} | ROC-AUC: {roc_b:.4f}")

print("\n--- FEATURE IMPORTANCE (Top 15) ---")
importances = pd.Series(best.feature_importances_, index=feature_cols).sort_values(ascending=False)
for feat, imp in importances.head(15).items():
    print(f"   {feat}: {imp:.4f}")

print("\n--- RESUMO COMPARATIVO ---")
print(f"   Modelo anterior (6 deltas simples):      Acc ~0.6138 | ROC-AUC ~0.6625")
print(f"   Modelo avancado (ablation, 9 deltas):    Acc ~0.6205 | ROC-AUC ~0.6607")
print(f"   Modelo expandido (A, {len(feature_cols)} features):     Acc {acc_a:.4f} | ROC-AUC {roc_a:.4f}")
print(f"   Modelo tuned (B, {len(feature_cols)} features):        Acc {acc_b:.4f} | ROC-AUC {roc_b:.4f}")
