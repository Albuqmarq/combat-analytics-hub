import pytest
import pandas as pd
import numpy as np
from app.pipeline.data_prep import parse_height, parse_reach, clean_dataset

def test_parse_height():
    assert parse_height("5'10\"") == 177.80
    assert parse_height("6'4\"") == 193.04
    assert np.isnan(parse_height(np.nan))
    assert np.isnan(parse_height("invalid"))

def test_parse_reach():
    assert parse_reach("70\"") == 177.80
    assert parse_reach("84\"") == 213.36
    assert np.isnan(parse_reach(np.nan))

def test_clean_dataset():
    data = {
        "fighter_a": ["Fighter 1", "Fighter 2", np.nan],
        "fighter_b": ["Fighter A", "Fighter B", "Fighter C"],
        "winner": ["A", "B", "A"],
        "height_a": ["5'10\"", np.nan, "6'0\""],
        "height_b": ["5'9\"", "5'11\"", "6'2\""],
        "reach_a": ["70\"", "72\"", "74\""],
        "reach_b": ["72\"", "70\"", "76\""],
        "slpm_a": [4.0, 3.5, 2.0],
        "slpm_b": [3.0, 4.5, 5.0],
        "str_def_a": [60, 50, 40],
        "str_def_b": [55, 65, 70],
        "td_def_a": [80, 90, 70],
        "td_def_b": [75, 85, 60],
        "age_a": [30, 25, 28],
        "age_b": [32, 27, 30]
    }
    df_raw = pd.DataFrame(data)
    df_clean = clean_dataset(df_raw)
    
    # Deve remover a linha 2 (Fighter 2) por ter height_a_cm == NaN
    # e a linha 3 (index 2) por ter fighter_a nulo
    assert len(df_clean) == 1
    
    # Verifica conversoes da linha 1
    row = df_clean.iloc[0]
    assert row["fighter_a"] == "Fighter 1"
    assert row["height_a_cm"] == 177.80
    assert row["reach_a_cm"] == 177.80
    assert row["age_a"] == 30
