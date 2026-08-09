
# espera receber (input) e o formato exato que ela devolve (output).
# Isso usa o Pydantic, que já valida os tipos automaticamente antes do
# nosso código de predição sequer rodar.

from pydantic import BaseModel, Field


class FighterStats(BaseModel):
    """
    Representa as métricas de UM lutador que o modelo precisa pra calcular
    o delta (diferença) entre os dois atletas
    """
    height_cm: float = Field(..., description="Altura do lutador em centímetros")
    reach_cm: float = Field(..., description="Envergadura do lutador em centímetros")
    age: int = Field(..., description="Idade do lutador em anos")

    # Métricas de Striking (trocação)
    slpm: float = Field(..., description="Significant Strikes Landed per Minute")
    str_acc: float = Field(..., description="Striking Accuracy (%)")
    sapm: float = Field(..., description="Significant Strikes Absorbed per Minute")
    str_def: float = Field(..., description="Strike Defense (%)")

    # Métricas de Grappling (solo)
    td_avg: float = Field(..., description="Takedowns Average per 15 min")
    td_acc: float = Field(..., description="Takedown Accuracy (%)")
    td_def: float = Field(..., description="Takedown Defense (%)")
    sub_avg: float = Field(..., description="Submission Average per 15 min")


class PredictRequest(BaseModel):
    """
    O corpo (body) que o cliente (Gateway) precisa enviar no POST /predict:
    as estatísticas do Lutador A e do Lutador B.
    """

    fighter_a: FighterStats
    fighter_b: FighterStats


class PredictResponse(BaseModel):
    """
    O formato que devolvemos: as probabilidades de vitória de cada lutador,
    mais os fatores que mais pesaram na decisão 
    """
    fighter_a_win_probability: float
    fighter_b_win_probability: float
    key_factors: list[str] = Field(
        default_factory=list,
        description="Fatores que mais influenciaram a predição (Explainable AI)",
    )