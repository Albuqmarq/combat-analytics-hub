"""Gera o catalogo de lutadores servido pelo Gateway (services/gateway/app/data/fighters.json)
a partir do master.csv, reaproveitando o mesmo pipeline temporal usado no treino.

Cada atleta recebe o seu estado REAL mais recente (Elo, cartel, medias moveis, etc.),
na mesma escala das features do modelo. Rode este passo sempre que o master.csv for
atualizado (ex.: apos um novo conector de dados) para refrescar o catalogo:

    python -m app.pipeline.build_catalog
"""
import json
import logging
from pathlib import Path

import numpy as np
import pandas as pd

from app.pipeline.feature_engineering import build_temporal_features, parse_height, ROLLING_STATS

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

# Apenas atletas com um minimo de lutas (evita perfis com stats instaveis/ruidosos).
MIN_FIGHTS = 3

WEIGHT_MAP = {
    "Strawweight": 115, "Flyweight": 125, "Bantamweight": 135, "Featherweight": 145,
    "Lightweight": 155, "Welterweight": 170, "Middleweight": 185, "Light Heavyweight": 205,
    "Heavyweight": 265, "Women's Strawweight": 115, "Women's Flyweight": 125,
    "Women's Bantamweight": 135, "Women's Featherweight": 145,
}

# Nacionalidade e informacao publica (nao vem do modelo); conhecida para os mais populares.
NATION = {
    "Jon Jones": ("EUA", "🇺🇸"), "Islam Makhachev": ("Rússia", "🇷🇺"), "Alex Pereira": ("Brasil", "🇧🇷"),
    "Israel Adesanya": ("Nigéria", "🇳🇬"), "Alexander Volkanovski": ("Austrália", "🇦🇺"),
    "Max Holloway": ("EUA", "🇺🇸"), "Charles Oliveira": ("Brasil", "🇧🇷"), "Dustin Poirier": ("EUA", "🇺🇸"),
    "Conor McGregor": ("Irlanda", "🇮🇪"), "Khabib Nurmagomedov": ("Rússia", "🇷🇺"),
    "Kamaru Usman": ("Nigéria", "🇳🇬"), "Leon Edwards": ("Reino Unido", "🇬🇧"), "Sean O'Malley": ("EUA", "🇺🇸"),
    "Tom Aspinall": ("Reino Unido", "🇬🇧"), "Ciryl Gane": ("França", "🇫🇷"), "Justin Gaethje": ("EUA", "🇺🇸"),
    "Robert Whittaker": ("Austrália", "🇦🇺"), "Dricus Du Plessis": ("África do Sul", "🇿🇦"),
    "Georges St-Pierre": ("Canadá", "🇨🇦"), "Stipe Miocic": ("EUA", "🇺🇸"), "Amanda Nunes": ("Brasil", "🇧🇷"),
    "Valentina Shevchenko": ("Quirguistão", "🇰🇬"), "Zhang Weili": ("China", "🇨🇳"),
    "Merab Dvalishvili": ("Geórgia", "🇬🇪"), "Ilia Topuria": ("Espanha", "🇪🇸"),
}
NEUTRAL = ("Internacional", "🥊")

CAREER = ["slpm", "str_acc", "sapm", "str_def", "td_avg", "td_acc", "td_def", "sub_avg"]


def _cap(v, mx=150):
    try:
        return int(max(0, min(mx, round(v))))
    except (ValueError, TypeError):
        return 0


def build_catalog():
    base_dir = Path(__file__).resolve().parents[2]          # services/mlops
    repo_root = Path(__file__).resolve().parents[4]          # raiz do repo
    input_path = base_dir / "data" / "raw" / "master.csv"
    out_path = repo_root / "services" / "gateway" / "app" / "data" / "fighters.json"

    if not input_path.exists():
        logger.error(f"master.csv nao encontrado em {input_path}")
        return

    logger.info("Carregando e enriquecendo o dataset (features temporais)...")
    df = pd.read_csv(input_path, low_memory=False)
    enr = build_temporal_features(df)
    enr["event_date"] = pd.to_datetime(enr["event_date"], errors="coerce")

    # Tabela "long": uma linha por (lutador, luta) com o estado PRE-luta.
    rows = []
    for corner in ("r", "b"):
        data = {
            "name": enr[f"{corner}_fighter_name"], "date": enr["event_date"],
            "elo": enr[f"{corner}_elo"], "days_inactive": enr[f"{corner}_days_inactive"],
            "streak": enr[f"{corner}_streak"], "win_rate": enr[f"{corner}_win_rate_5"],
            "finish_rate": enr[f"{corner}_finish_rate"], "num_fights": enr[f"{corner}_num_fights"],
            "height": enr[f"{corner}_height"], "reach_in": enr[f"{corner}_reach_inches"],
            "dob": enr[f"{corner}_dob"], "stance": enr[f"{corner}_stance"],
            "weight_class": enr["weight_class"], "title": enr["title_fight"],
            "won": (enr["winner_id"] == enr[f"{corner}_fighter_id"]).astype(int),
        }
        for s in ROLLING_STATS:
            data[f"roll_{s}"] = enr[f"{corner}_roll_{s}"]
        for s in CAREER:
            data[s] = pd.to_numeric(enr[f"{corner}_{s}"], errors="coerce")
        rows.append(pd.DataFrame(data))

    long = pd.concat(rows, ignore_index=True).dropna(subset=["date", "name"])
    ref_date = long["date"].max()
    counts = long["name"].value_counts()
    wanted = [n for n in counts.index if counts[n] >= MIN_FIGHTS]

    seen = set()

    def slug(name):
        base = "".join(ch for ch in name.lower().strip().replace(" ", "-") if ch.isalnum() or ch == "-") or "lutador"
        s, i = base, 2
        while s in seen:
            s, i = f"{base}-{i}", i + 1
        seen.add(s)
        return s

    out = []
    for name in wanted:
        g = long[long["name"] == name].sort_values("date")
        last = g.iloc[-1]
        wins, losses = int(g["won"].sum()), int((g["won"] == 0).sum())
        dob = pd.to_datetime(last["dob"], errors="coerce")
        age = int((ref_date - dob).days / 365.25) if pd.notna(dob) else 30
        h, r = parse_height(last["height"]), last["reach_in"]
        wc = last["weight_class"] if isinstance(last["weight_class"], str) else "Lightweight"

        def cs(k, dflt=0.0):
            v = last[k]
            return float(v) if pd.notna(v) else dflt

        slpm, tdavg, subavg = cs("slpm"), cs("td_avg"), cs("sub_avg")
        strdef, tddef = cs("str_def"), cs("td_def")
        finish = cs("finish_rate")
        country, flag = NATION.get(name, NEUTRAL)

        out.append({
            "id": slug(name), "name": name, "category": wc, "record": f"{wins}-{losses}",
            "country": country, "flag": flag,
            "age": age,
            "heightCm": int(h) if (h == h and h) else 180,
            "reachCm": int(round(float(r) * 2.54)) if pd.notna(r) else 183,
            "weightKg": int(round(WEIGHT_MAP.get(wc, 155) * 0.4536)),
            "stance": last["stance"] if isinstance(last["stance"], str) else "Orthodox",
            "elo": int(round(float(last["elo"]))),
            "daysInactive": int((ref_date - last["date"]).days),
            "streak": int(last["streak"]), "numFights": int(last["num_fights"]),
            "winRate": round(float(last["win_rate"]), 3), "finishRate": round(finish, 3),
            "strikingLanded": round(float(last["roll_sig_landed"]), 1),
            "takedownSuccess": round(float(last["roll_td_success"]), 2),
            "knockdownRate": round(float(last["roll_kd"]), 3),
            "ctrlSeconds": round(float(last["roll_ctrl_seconds"]), 1),
            "subAtt": round(float(last["roll_sub_att"]), 2),
            "tdAtmp": round(float(last["roll_td_atmp"]), 2),
            # Cards de face (stats oficiais de carreira, ja em 0-100).
            "stats": {"striking": _cap(cs("str_acc"), 100), "takedown": _cap(cs("td_acc"), 100),
                      "titleFights": int(g["title"].fillna(False).astype(bool).sum())},
            # Radar de estilo (proxies reais escalados para 0-150). Sem "Cardio" (era so nº de lutas);
            # agora inclui as duas defesas reais do dataset (striking e queda).
            "radar": [
                {"subject": "Volume", "A": _cap(slpm * 20), "fullMark": 150},        # golpes conectados/min
                {"subject": "Finalização", "A": _cap(finish * 150), "fullMark": 150},
                {"subject": "Wrestling", "A": _cap(tdavg * 28), "fullMark": 150},     # quedas/15min
                {"subject": "Jiu-Jitsu", "A": _cap(subavg * 70), "fullMark": 150},    # tent. subs/15min
                {"subject": "Def. Queda", "A": _cap(tddef / 100 * 150), "fullMark": 150},
                {"subject": "Def. em Pé", "A": _cap(strdef / 100 * 150), "fullMark": 150},
            ],
        })

    out.sort(key=lambda x: -x["elo"])
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(out, ensure_ascii=False), encoding="utf-8")
    logger.info(f"Catalogo gerado: {len(out)} atletas (>= {MIN_FIGHTS} lutas) -> {out_path}")


if __name__ == "__main__":
    build_catalog()
