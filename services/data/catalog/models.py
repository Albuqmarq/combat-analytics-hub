from django.db import models


class Fighter(models.Model):
    """Um atleta do catálogo. É o dono dos dados (migrations + Admin ficam aqui).
    Os campos escalares viram colunas (editáveis no Admin); stats e radar, que são
    estruturas aninhadas derivadas, ficam como JSON."""

    id = models.CharField("Identificador", primary_key=True, max_length=120)
    name = models.CharField("Nome", max_length=120, db_index=True)
    category = models.CharField("Categoria", max_length=60, db_index=True, blank=True)
    record = models.CharField("Cartel", max_length=20, blank=True, default="")
    country = models.CharField("País", max_length=60, blank=True, default="")
    flag = models.CharField("Bandeira", max_length=16, blank=True, default="")

    age = models.IntegerField("Idade", default=0)
    height_cm = models.FloatField("Altura (cm)", default=0)
    reach_cm = models.FloatField("Envergadura (cm)", default=0)
    weight_kg = models.FloatField("Peso (kg)", default=0)
    stance = models.CharField("Base", max_length=20, blank=True, default="Orthodox")

    elo = models.FloatField("Rating Elo", default=1500, db_index=True)
    days_inactive = models.IntegerField("Dias inativo", default=0)
    streak = models.IntegerField("Sequência", default=0)
    num_fights = models.IntegerField("Nº de lutas", default=0)
    win_rate = models.FloatField("Taxa de vitória", default=0)
    finish_rate = models.FloatField("Taxa de finalização", default=0)
    striking_landed = models.FloatField("Golpes conectados", default=0)
    takedown_success = models.FloatField("Quedas concretizadas", default=0)
    knockdown_rate = models.FloatField("Knockdowns", default=0)
    ctrl_seconds = models.FloatField("Tempo de controle", default=0)
    sub_att = models.FloatField("Tentativas de finalização", default=0)
    td_atmp = models.FloatField("Quedas tentadas", default=0)

    stats = models.JSONField("Stats de carreira", default=dict, blank=True)
    radar = models.JSONField("Perfil de estilo", default=list, blank=True)

    class Meta:
        ordering = ["-elo"]
        verbose_name = "Lutador"
        verbose_name_plural = "Lutadores"

    def __str__(self):
        return self.name
