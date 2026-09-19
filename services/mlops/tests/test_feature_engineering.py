import pandas as pd
from app.pipeline.feature_engineering import calculate_deltas, symmetrize_data

def test_calculate_deltas():
    df = pd.DataFrame({
        'slpm_a': [5.0], 'slpm_b': [3.0],
        'str_def_a': [60], 'str_def_b': [50],
        'td_def_a': [80], 'td_def_b': [70],
        'height_a_cm': [180.0], 'height_b_cm': [175.0],
        'reach_a_cm': [185.0], 'reach_b_cm': [180.0],
        'age_a': [30], 'age_b': [25]
    })
    
    df_feat = calculate_deltas(df)
    assert df_feat['delta_slpm'].iloc[0] == 2.0
    assert df_feat['delta_str_def'].iloc[0] == 10
    assert df_feat['delta_td_def'].iloc[0] == 10
    assert df_feat['delta_height_cm'].iloc[0] == 5.0
    assert df_feat['delta_reach_cm'].iloc[0] == 5.0
    assert df_feat['delta_age'].iloc[0] == 5.0

def test_symmetrize_data():
    df = pd.DataFrame({
        'fighter_a': ['Adesanya'], 'fighter_b': ['Borrachinha'],
        'winner': ['A'],
        'delta_slpm': [2.0],
        'slpm_a': [5.0], 'slpm_b': [3.0]
    })
    
    df_sym = symmetrize_data(df)
    assert len(df_sym) == 2
    
    inverted_row = df_sym.iloc[1]
    assert inverted_row['fighter_a'] == 'Borrachinha'
    assert inverted_row['fighter_b'] == 'Adesanya'
    assert inverted_row['winner'] == 'B'
    assert inverted_row['delta_slpm'] == -2.0
    assert inverted_row['slpm_a'] == 3.0
    assert inverted_row['slpm_b'] == 5.0
