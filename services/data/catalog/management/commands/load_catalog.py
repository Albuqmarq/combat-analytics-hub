import json
import os

from django.core.management.base import BaseCommand

from catalog.models import Fighter


class Command(BaseCommand):
    help = "Carrega o catálogo de lutadores de um arquivo JSON para o banco (upsert por id)."

    def add_arguments(self, parser):
        parser.add_argument(
            "--path",
            default=os.getenv("CATALOG_JSON", "/seed/fighters.json"),
            help="Caminho do JSON gerado pelo MLOps (build_catalog).",
        )

    def handle(self, *args, **opts):
        path = opts["path"]
        if not os.path.exists(path):
            self.stderr.write(self.style.WARNING(f"JSON nao encontrado em {path}; nada carregado."))
            return

        with open(path, encoding="utf-8") as fh:
            data = json.load(fh)

        objs = [
            Fighter(
                id=d["id"], name=d["name"], category=d.get("category", ""),
                record=d.get("record", ""), country=d.get("country", ""), flag=d.get("flag", ""),
                age=d.get("age", 0), height_cm=d.get("heightCm", 0), reach_cm=d.get("reachCm", 0),
                weight_kg=d.get("weightKg", 0), stance=d.get("stance", "Orthodox"),
                elo=d.get("elo", 1500), days_inactive=d.get("daysInactive", 0),
                streak=d.get("streak", 0), num_fights=d.get("numFights", 0),
                win_rate=d.get("winRate", 0), finish_rate=d.get("finishRate", 0),
                striking_landed=d.get("strikingLanded", 0), takedown_success=d.get("takedownSuccess", 0),
                knockdown_rate=d.get("knockdownRate", 0), ctrl_seconds=d.get("ctrlSeconds", 0),
                sub_att=d.get("subAtt", 0), td_atmp=d.get("tdAtmp", 0),
                stats=d.get("stats", {}), radar=d.get("radar", []),
            )
            for d in data
        ]

        # Recarrega o catálogo do zero (idempotente).
        Fighter.objects.all().delete()
        Fighter.objects.bulk_create(objs, batch_size=500)
        self.stdout.write(self.style.SUCCESS(f"Carregados {len(objs)} lutadores no banco."))
