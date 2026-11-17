from django.contrib import admin

from .models import Fighter


@admin.register(Fighter)
class FighterAdmin(admin.ModelAdmin):
    """Interface de administração pronta: listar, buscar, filtrar e editar atletas."""

    list_display = ("name", "category", "record", "elo", "age", "country")
    list_filter = ("category", "stance")
    search_fields = ("id", "name", "country")
    ordering = ("-elo",)
    list_per_page = 50
