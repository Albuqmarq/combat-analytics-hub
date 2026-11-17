from rest_framework import serializers

from .models import Fighter


class FighterSerializer(serializers.ModelSerializer):
    """Serializa no MESMO formato (camelCase) que o gateway/front ja consomem."""

    heightCm = serializers.FloatField(source="height_cm")
    reachCm = serializers.FloatField(source="reach_cm")
    weightKg = serializers.FloatField(source="weight_kg")
    daysInactive = serializers.IntegerField(source="days_inactive")
    numFights = serializers.IntegerField(source="num_fights")
    winRate = serializers.FloatField(source="win_rate")
    finishRate = serializers.FloatField(source="finish_rate")
    strikingLanded = serializers.FloatField(source="striking_landed")
    takedownSuccess = serializers.FloatField(source="takedown_success")
    knockdownRate = serializers.FloatField(source="knockdown_rate")
    ctrlSeconds = serializers.FloatField(source="ctrl_seconds")
    subAtt = serializers.FloatField(source="sub_att")
    tdAtmp = serializers.FloatField(source="td_atmp")

    class Meta:
        model = Fighter
        fields = [
            "id", "name", "category", "record", "country", "flag", "age",
            "heightCm", "reachCm", "weightKg", "stance", "elo", "daysInactive",
            "streak", "numFights", "winRate", "finishRate", "strikingLanded",
            "takedownSuccess", "knockdownRate", "ctrlSeconds", "subAtt", "tdAtmp",
            "stats", "radar",
        ]
