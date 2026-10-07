import numpy as np
import pandas as pd
from app.pipeline.data_prep import parse_height, parse_reach, clean_dataset


def test_parse_height():
    assert parse_height("5'10\"") == 177.80
    assert parse_height("6'4\"") == 193.04
    assert np.isnan(parse_height(np.nan))
    assert np.isnan(parse_height("invalid"))


def test_parse_reach():
    assert parse_reach("70\"") == 177.80
    assert parse_reach("84\"") == 213.36
    assert parse_reach(70) == 177.80          # aceita numero (polegadas)
    assert np.isnan(parse_reach(np.nan))
    assert np.isnan(parse_reach("invalid"))


def test_clean_dataset():
    # Schema real do master.csv (prefixos r_/b_, result_status, reach em polegadas).
    df_raw = pd.DataFrame({
        "result_status": ["win", "win", "no contest"],
        "winner_id": [1, 20, 3],
        "r_fighter_id": [1, 2, 3],
        "b_fighter_id": [10, 20, 30],
        "r_height": ["5'10\"", "6'0\"", "5'8\""],
        "b_height": ["5'9\"", "5'11\"", "6'2\""],
        "r_reach_inches": [70.0, 72.0, 74.0],
        "b_reach_inches": [72.0, 70.0, 76.0],
        "r_slpm": [4.0, 3.5, 2.0],
        "b_slpm": [3.0, 4.5, 5.0],
        "r_str_def": [60, 50, 40],
        "b_str_def": [55, 65, 70],
        "r_td_def": [80, 90, 70],
        "b_td_def": [75, 85, 60],
    })

    df_clean = clean_dataset(df_raw)

    # Mantem apenas as 2 lutas com result_status == 'win' (remove a "no contest").
    assert len(df_clean) == 2

    # Conversoes de altura/envergadura para cm.
    assert "r_height_cm" in df_clean.columns
    assert "r_reach_cm" in df_clean.columns

    row = df_clean.iloc[0]
    assert row["winner"] == "R"            # winner_id (1) == r_fighter_id (1)
    assert row["r_height_cm"] == 177.80
    assert row["r_reach_cm"] == 177.80

    # Segunda luta: winner_id (20) == b_fighter_id (20) -> vitoria do azul.
    assert df_clean.iloc[1]["winner"] == "B"
