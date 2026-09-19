import pandas as pd
import glob
import os

# Paths
dir_2025 = r"C:\Users\marco\Downloads\UFC 2025 Dataset  Fights Fighters & Events\data"
dir_1994_2026 = r"C:\Users\marco\Downloads\UFC DATASETS 1994-2026"

def analyze_csv(filepath, name):
    print(f"\n{'='*50}")
    print(f"Dataset: {name}")
    print(f"{'='*50}")
    try:
        df = pd.read_csv(filepath, low_memory=False)
        print(f"Shape: {df.shape[0]} rows, {df.shape[1]} columns")
        
        # Determine if there's a date column
        date_col = next((c for c in df.columns if 'date' in c.lower()), None)
        if date_col:
            df[date_col] = pd.to_datetime(df[date_col], errors='coerce')
            latest = df[date_col].max()
            earliest = df[date_col].min()
            print(f"Date range: {earliest} to {latest}")
            
        print("\nColumns:")
        cols = df.columns.tolist()
        print(", ".join(cols[:20]) + ("..." if len(cols) > 20 else ""))
        
        # Check nulls
        print("\nMissing values (top 5):")
        nulls = df.isnull().sum().sort_values(ascending=False).head(5)
        for k, v in nulls.items():
            print(f"  {k}: {v} nulls ({v/df.shape[0]*100:.1f}%)")
            
        return df
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return None

# Analyze 2025 Dataset
print("=== ANALYSING UFC 2025 Dataset ===")
fights_2025 = analyze_csv(os.path.join(dir_2025, "Fights.csv"), "Fights.csv (2025)")
fighters_2025 = analyze_csv(os.path.join(dir_2025, "Fighters.csv"), "Fighters.csv (2025)")
stats_2025 = analyze_csv(os.path.join(dir_2025, "Fighters Stats.csv"), "Fighters Stats.csv (2025)")

# Analyze 1994-2026 Dataset
print("\n=== ANALYSING UFC 1994-2026 Dataset ===")
master_2026 = analyze_csv(os.path.join(dir_1994_2026, "master.csv"), "master.csv (1994-2026)")
fight_2026 = analyze_csv(os.path.join(dir_1994_2026, "fight.csv"), "fight.csv (1994-2026)")
fighter_2026 = analyze_csv(os.path.join(dir_1994_2026, "fighter.csv"), "fighter.csv (1994-2026)")

# Comparison
print("\n=== COMPARISON ===")
if fights_2025 is not None and master_2026 is not None:
    print(f"Total fights in 2025 dataset: {fights_2025.shape[0]}")
    print(f"Total fights in 2026 master dataset: {master_2026.shape[0]}")
