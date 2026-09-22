import os
import logging
from pathlib import Path
import pandas as pd
import joblib

from app.schemas.predict import PredictRequest, PredictResponse

logger = logging.getLogger(__name__)

class ModelEngine:
    def __init__(self):
        self._model = None
        self._explainer = None
        self._feature_cols = None

    def _load_artifacts(self):
        # O diretorio de modelos eh gerado pelo MLOps. Fica em ../../mlops/models
        # Em producao (Docker), o volume /models sera mapeado para ambos.
        # Aqui para rodar local vamos buscar no caminho relativo.
        base_dir = Path(__file__).resolve().parent.parent.parent.parent
        models_dir = base_dir / "mlops" / "models"
        
        # Em ambiente docker, se a variavel MODELS_DIR estiver setada
        if "MODELS_DIR" in os.environ:
            models_dir = Path(os.environ["MODELS_DIR"])

        model_path = models_dir / "xgb_v3.joblib"
        explainer_path = models_dir / "shap_explainer.joblib"
        
        if not model_path.exists() or not explainer_path.exists():
            raise FileNotFoundError(f"Artefatos nao encontrados no diretorio: {models_dir}")
            
        logger.info(f"Carregando modelo real de {model_path}")
        self._model = joblib.load(model_path)
        
        logger.info(f"Carregando SHAP Explainer de {explainer_path}")
        self._explainer = joblib.load(explainer_path)

        import json
        with open(models_dir / "feature_columns.json", "r") as f:
            self._feature_cols = json.load(f)

    def reload(self):
        logger.info("Forcando recarregamento dos artefatos em memoria...")
        self._model = None
        self._explainer = None
        self._feature_cols = None

    def predict(self, request: PredictRequest) -> PredictResponse:
        if self._model is None:
            self._load_artifacts()

        # Converte as features para dataframe garantindo a ordem exata das colunas
        feature_dict = request.features.model_dump()
        df = pd.DataFrame([feature_dict])[self._feature_cols]

        # Inferencia Real (XGBoost)
        proba = self._model.predict_proba(df)[0]
        prob_b = float(proba[0])
        prob_a = float(proba[1])

        # Explicabilidade Real (SHAP)
        shap_values = self._explainer.shap_values(df)
        
        impact = pd.DataFrame({
            'Feature': self._feature_cols,
            'Impacto_SHAP': shap_values[0]
        })
        impact['Impacto_Absoluto'] = impact['Impacto_SHAP'].abs()
        top_factors = impact.sort_values(by='Impacto_Absoluto', ascending=False).head(8)
        
        key_factors = []
        for _, row in top_factors.iterrows():
            feature_name = row['Feature']
            valor = float(row['Impacto_SHAP'])
            favorece = "Lutador A" if valor > 0 else "Lutador B"
            key_factors.append(f"({favorece}) Vantagem em {feature_name}")

        return PredictResponse(
            fighter_a_win_probability=round(prob_a, 4),
            fighter_b_win_probability=round(prob_b, 4),
            key_factors=key_factors
        )

# Instancia global do motor de inferencia
engine = ModelEngine()

def calculate_prediction(data: PredictRequest) -> PredictResponse:
    return engine.predict(data)

def reload_model_engine():
    engine.reload()