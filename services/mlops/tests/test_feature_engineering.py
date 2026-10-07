import pandas as pd
from app.pipeline.feature_engineering import calculate_deltas, symmetrize_data, ROLLING_STATS


def _enriched_row():
    """Monta uma luta ja enriquecida (saida de build_temporal_features),
    no schema real que calculate_deltas espera."""
    row = {
        "fight_id": [1], "winner": ["R"], "event_date": [pd.Timestamp("2021-01-01")],
        "r_elo": [1600.0], "b_elo": [1500.0],
        "r_days_inactive": [100], "b_days_inactive": [200],
        "r_streak": [3], "b_streak": [1],
        "r_win_rate_5": [0.8], "b_win_rate_5": [0.6],
        "r_finish_rate": [0.5], "b_finish_rate": [0.2],
        "r_num_fights": [10], "b_num_fights": [8],
        "r_height": ["6'0\""], "b_height": ["5'10\""],
        "r_reach_inches": [76.0], "b_reach_inches": [72.0],
        "r_dob": [pd.Timestamp("1990-01-01")], "b_dob": [pd.Timestamp("1995-01-01")],
        "r_stance": ["Orthodox"], "b_stance": ["Southpaw"],
    }
    for s in ROLLING_STATS:
        row[f"r_roll_{s}"] = [2.0]
        row[f"b_roll_{s}"] = [1.0]
    return pd.DataFrame(row)


def test_calculate_deltas():
    out = calculate_deltas(_enriched_row())
    assert len(out) == 1
    assert out["delta_elo"].iloc[0] == 100.0
    assert out["delta_experience"].iloc[0] == 2
    assert out["delta_streak"].iloc[0] == 2
    assert round(out["delta_height"].iloc[0], 2) == 5.08      # 182.88 - 177.80
    assert round(out["delta_reach"].iloc[0], 2) == 10.16      # 193.04 - 182.88
    assert out["delta_roll_sig_landed"].iloc[0] == 1.0
    # r ~31 anos, b ~26 -> nenhum acima de 35
    assert out["r_age_over35"].iloc[0] == 0
    assert out["b_age_over35"].iloc[0] == 0


def test_symmetrize_data():
    df = pd.DataFrame({
        "fight_id": [1], "winner": ["R"], "event_date": [pd.Timestamp("2020-01-01")],
        "delta_elo": [50.0], "delta_age": [3.0],
        "r_age_over35": [1], "b_age_over35": [0], "stance_matchup": [1],
    })

    sym = symmetrize_data(df)
    assert len(sym) == 2

    inv = sym.iloc[1]
    assert inv["winner"] == "B"               # vencedor invertido
    assert inv["delta_elo"] == -50.0          # deltas negados
    assert inv["delta_age"] == -3.0
    assert inv["r_age_over35"] == 0            # flags de idade trocadas
    assert inv["b_age_over35"] == 1
    assert inv["stance_matchup"] == -1         # matchup de base negado
