import pandas as pd
import json

def generate_fighters_db():
    print("Carregando master_enriched.csv...")
    df = pd.read_csv('services/mlops/data/processed/master_enriched.csv')
    
    # Cada linha eh uma luta com R_fighter e B_fighter.
    # Vamos extrair os ultimos stats de cada lutador.
    
    fighters = {}
    
    if 'event_date' in df.columns:
        df['event_date'] = pd.to_datetime(df['event_date'])
        df = df.sort_values('event_date')
    
    for _, row in df.iterrows():
        # Red Fighter
        r_name = row.get('r_fighter_name', '')
        if pd.notna(r_name) and r_name != '':
            fighters[r_name] = {
                'id': str(r_name).replace(' ', '-').lower(),
                'name': r_name,
                'category': row.get('weight_class', 'Desconhecido'),
                'record': f"0-0-0",
                'country': 'Desconhecido',
                'flag': '🏳️',
                'age': 30, # Nao temos calculo de age facil aqui, vamo fixar ou calcular se 'r_dob' for data
                'heightCm': 175.0,
                'reachCm': 180.0,
                'weightKg': 70.0,
                'elo': float(row.get('r_elo_pre', 1500)) if pd.notna(row.get('r_elo_pre')) else 1500.0,
                'daysInactive': int(row.get('r_days_inactive', 0)) if pd.notna(row.get('r_days_inactive')) else 0,
                'winRate': 0.5,
                'finishRate': 0.1,
                'strikingLanded': float(row.get('r_roll_sig_landed', 2.0)) if pd.notna(row.get('r_roll_sig_landed')) else 2.0,
                'takedownSuccess': float(row.get('r_roll_td_success', 1.0)) if pd.notna(row.get('r_roll_td_success')) else 1.0,
                'knockdownRate': 0.1,
            }
            
        # Blue Fighter
        b_name = row.get('b_fighter_name', '')
        if pd.notna(b_name) and b_name != '':
            fighters[b_name] = {
                'id': str(b_name).replace(' ', '-').lower(),
                'name': b_name,
                'category': row.get('weight_class', 'Desconhecido'),
                'record': f"0-0-0",
                'country': 'Desconhecido',
                'flag': '🏳️',
                'age': 30,
                'heightCm': 175.0,
                'reachCm': 180.0,
                'weightKg': 70.0,
                'elo': float(row.get('b_elo_pre', 1500)) if pd.notna(row.get('b_elo_pre')) else 1500.0,
                'daysInactive': int(row.get('b_days_inactive', 0)) if pd.notna(row.get('b_days_inactive')) else 0,
                'winRate': 0.5,
                'finishRate': 0.1,
                'strikingLanded': float(row.get('b_roll_sig_landed', 2.0)) if pd.notna(row.get('b_roll_sig_landed')) else 2.0,
                'takedownSuccess': float(row.get('b_roll_td_success', 1.0)) if pd.notna(row.get('b_roll_td_success')) else 1.0,
                'knockdownRate': 0.1,
            }

    # Filter out empty names or invalid
    fighters_list = list(fighters.values())
    
    # Sort by elo descending to have the best fighters on top
    fighters_list.sort(key=lambda x: x['elo'], reverse=True)
    
    # Limit to top 500 to keep bundle size reasonable
    fighters_list = fighters_list[:500]

    # Convert to TS string
    ts_content = "export type FighterBase = {\n"
    ts_content += "  id: string;\n  name: string;\n  category: string;\n  record: string;\n  country: string;\n  flag: string;\n"
    ts_content += "  age: number;\n  heightCm: number;\n  reachCm: number;\n  weightKg: number;\n  elo: number;\n"
    ts_content += "  daysInactive: number;\n  winRate: number;\n  finishRate: number;\n  strikingLanded: number;\n"
    ts_content += "  takedownSuccess: number;\n  knockdownRate: number;\n"
    ts_content += "  stats: { striking: number; takedown: number; titleFights: number };\n"
    ts_content += "  radar: { subject: string; A: number; fullMark: number }[];\n"
    ts_content += "};\n\n"
    
    ts_content += "export const fightersDB: FighterBase[] = [\n"
    for f in fighters_list:
        clean_name = f['name'].replace("'", "")
        ts_content += f"  {{\n"
        ts_content += f"    id: '{f['id']}', name: '{clean_name}', category: '{f['category']}', record: '{f['record']}', country: '{f['country']}', flag: '{f['flag']}',\n"
        ts_content += f"    age: {f['age']}, heightCm: {round(f['heightCm'])}, reachCm: {round(f['reachCm'])}, weightKg: {round(f['weightKg'])}, elo: {round(f['elo'])}, daysInactive: {f['daysInactive']}, winRate: {round(f['winRate'], 2)}, finishRate: {round(f['finishRate'], 2)},\n"
        ts_content += f"    strikingLanded: {round(f['strikingLanded'], 2)}, takedownSuccess: {round(f['takedownSuccess'], 2)}, knockdownRate: {round(f['knockdownRate'], 2)},\n"
        # Mock stats and radar based on their values
        striking_stat = min(100, int(f['strikingLanded'] * 10))
        takedown_stat = min(100, int(f['takedownSuccess'] * 20))
        ts_content += f"    stats: {{ striking: {striking_stat}, takedown: {takedown_stat}, titleFights: 0 }},\n"
        ts_content += f"    radar: [\n"
        ts_content += f"      {{ subject: 'Volume Golpe', A: {min(150, striking_stat * 2)}, fullMark: 150 }}, {{ subject: 'Força', A: {min(150, int(f['knockdownRate']*100 + 50))}, fullMark: 150 }},\n"
        ts_content += f"      {{ subject: 'Wrestling', A: {min(150, takedown_stat * 2)}, fullMark: 150 }}, {{ subject: 'Jiu-Jitsu', A: {min(150, int(f['finishRate']*100 + 40))}, fullMark: 150 }},\n"
        ts_content += f"      {{ subject: 'Cardio', A: {min(150, int(f['winRate']*100 + 50))}, fullMark: 150 }}, {{ subject: 'Defesa', A: {min(150, int((1-f['finishRate'])*100 + 50))}, fullMark: 150 }},\n"
        ts_content += f"    ]\n"
        ts_content += f"  }},\n"
    ts_content += "];\n"
    
    with open('services/frontend/src/data/fighters.ts', 'w', encoding='utf-8') as file:
        file.write(ts_content)
        
    print(f"Salvos {len(fighters_list)} lutadores com sucesso!")

if __name__ == '__main__':
    generate_fighters_db()
