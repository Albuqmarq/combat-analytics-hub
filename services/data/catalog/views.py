from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Fighter
from .serializers import FighterSerializer


@api_view(["GET"])
def health(request):
    return Response({"status": "ok", "service": "data"})


@api_view(["GET"])
def catalog(request):
    """Catálogo completo (ordenado por Elo). O gateway carrega isto na subida."""
    fighters = Fighter.objects.all()
    return Response(FighterSerializer(fighters, many=True).data)
