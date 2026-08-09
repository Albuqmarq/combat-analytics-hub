
# Aqui fica a lógica de cálculo da predição.
# POR ENQUANTO: é uma simulação (mock) baseada nos deltas das estatísticas.
# NO FUTURO: essa função vai carregar o model.pkl (treinado pelo MLOps
# service) e chamar model.predict_proba() de verdade.
from app.schemas.predict import PredictRequest, PredictResponse

def calculate_prediction(data: PredictRequest) -> PredictResponse:
    
    #Recebe as stats dos dois lutadores, calcula os deltas (ΔX = A - B) e devolve uma predição. 
    a=data.fighter_a
    b=data.fighter_b

    # Calculando os deltas reais — isso é o que futuramente vai virar
    # o input de verdade pro modelo de Machine Learning.
    delta_slpm = a.slpm - b.slpm
    delta_str_acc = a.str_acc - b.str_acc
    delta_td_def = a.td_def - b.td_def
    delta_reach = a.reach_cm - b.reach_cm
    
    # Soma simples e ponderada dos deltas só pra gerar um número plausível.
    # Isso NÃO é Machine Learning de verdade ainda, é só pra validar o fluxo.
    score = (
        delta_slpm * 0.3 +
        delta_str_acc * 0.2 +
        delta_td_def * 0.2 +
        delta_reach * 0.3
    )
    
    # Transforma o "score" bruto numa probabilidade entre 0 e 1
    # usando uma função sigmoide simples (mesmo princípio usado por modelos
    # de classificação de verdade, como Logistic Regression).
    import math
    probability_a = 1 / (1 + math.exp(-score/10))
    probability_b = 1 - probability_a
    
    # Monta a explicação (XAI) dos fatores que mais pesaram —
    # aqui simplificado, mas no modelo real isso viria de algo como
    # SHAP values ou feature_importances_ do XGBoost.
    key_factors = []
    if abs(delta_slpm) > 1:
        key_factors.append("Diferença significativa em volume de golpes (SLpM)")
    if abs(delta_td_def) > 10:
        key_factors.append("Diferença significativa em defesa de quedas (TD Def)")
    if abs(delta_reach) > 5:
        key_factors.append("Vantagem de envergadura (Reach)")

    return PredictResponse(
        fighter_a_win_probability=round(probability_a, 3),
        fighter_b_win_probability=round(probability_b, 3),
        key_factors=key_factors, 
    )      