from pydantic import BaseModel, Field

class PredictionFeatures(BaseModel):
    delta_elo: float = Field(..., description="Diferenca de pontuacao Elo")
    delta_days_inactive: float = Field(..., description="Diferenca de dias de inatividade")
    delta_streak: float = Field(..., description="Diferenca de sequencia de vitorias/derrotas")
    delta_win_rate: float = Field(..., description="Diferenca de taxa de vitoria nas ultimas 5 lutas")
    delta_finish_rate: float = Field(..., description="Diferenca de taxa de finalizacao/nocaute nas ultimas 10 lutas")
    delta_experience: float = Field(..., description="Diferenca de quantidade total de lutas")
    delta_height: float = Field(..., description="Diferenca de altura em cm")
    delta_reach: float = Field(..., description="Diferenca de envergadura em cm")
    delta_age: float = Field(..., description="Diferenca de idade")
    r_age_over35: int = Field(..., description="Lutador A tem mais de 35 anos (1 ou 0)")
    b_age_over35: int = Field(..., description="Lutador B tem mais de 35 anos (1 ou 0)")
    stance_matchup: float = Field(..., description="Matchup de base de luta")
    delta_roll_sig_landed: float = Field(..., description="Diferenca da media movel de golpes significativos aterrissados")
    delta_roll_sig_atmp: float = Field(..., description="Diferenca da media movel de golpes significativos tentados")
    delta_roll_kd: float = Field(..., description="Diferenca da media movel de knockdowns")
    delta_roll_td_success: float = Field(..., description="Diferenca da media movel de quedas aterrissadas")
    delta_roll_td_atmp: float = Field(..., description="Diferenca da media movel de quedas tentadas")
    delta_roll_sub_att: float = Field(..., description="Diferenca da media movel de tentativas de submissao")
    delta_roll_ctrl_seconds: float = Field(..., description="Diferenca da media movel de tempo de controle em segundos")
    delta_roll_sig_str_landed_head: float = Field(..., description="Diferenca da media movel de golpes na cabeca")
    delta_roll_sig_str_landed_body: float = Field(..., description="Diferenca da media movel de golpes no corpo")
    delta_roll_sig_str_landed_leg: float = Field(..., description="Diferenca da media movel de golpes na perna")
    delta_roll_sig_str_landed_distance: float = Field(..., description="Diferenca da media movel de golpes a distancia")
    delta_roll_sig_str_landed_clinch: float = Field(..., description="Diferenca da media movel de golpes no clinch")
    delta_roll_sig_str_landed_ground: float = Field(..., description="Diferenca da media movel de golpes no chao")
    delta_roll_total_str_landed: float = Field(..., description="Diferenca da media movel de golpes totais aterrissados")

class PredictRequest(BaseModel):
    features: PredictionFeatures

class PredictResponse(BaseModel):
    fighter_a_win_probability: float
    fighter_b_win_probability: float
    key_factors: list[str] = Field(
        default_factory=list,
        description="Fatores que mais influenciaram a predicao (Explainable AI via SHAP)",
    )