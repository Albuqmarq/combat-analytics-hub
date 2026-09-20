import logging
from pathlib import Path
import pandas as pd
import xgboost as xgb
import shap
import joblib

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def generate_explanations():
    base_dir = Path(__file__).resolve().parent.parent.parent
    model_dir = base_dir / "models"
    data_dir = base_dir / "data" / "features"
    
    model_path = model_dir / "xgb_v3.joblib"
    if not model_path.exists():
        logger.error(f"Modelo nao encontrado em {model_path}. Execute o treinamento primeiro.")
        return
        
    logger.info("Carregando modelo treinado...")
    model = joblib.load(model_path)
    
    logger.info("Carregando amostras de teste para calibracao do SHAP...")
    test_df = pd.read_parquet(data_dir / "test.parquet")
    X_test = test_df.drop(columns=['target'])
    
    logger.info("Construindo SHAP TreeExplainer...")
    # O TreeExplainer do SHAP e otimizado para modelos baseados em arvores como XGBoost
    explainer = shap.TreeExplainer(model)
    
    explainer_path = model_dir / "shap_explainer.joblib"
    joblib.dump(explainer, explainer_path)
    logger.info(f"Explainer XAI salvo em: {explainer_path}")
    
    # Exemplo de explicabilidade em uma linha (Apenas para logging/verificacao)
    sample_row = X_test.iloc[[0]]
    shap_values = explainer.shap_values(sample_row)
    
    # Associando os valores as colunas para mostrar o que mais pesou nessa predição especifica
    impact = pd.DataFrame({
        'Feature': X_test.columns,
        'Impacto_SHAP': shap_values[0]
    })
    impact['Impacto_Absoluto'] = impact['Impacto_SHAP'].abs()
    impact = impact.sort_values(by='Impacto_Absoluto', ascending=False).head(5)
    
    logger.info("=== Exemplo de Explicabilidade (XAI) para a Luta 0 ===")
    for _, row in impact.iterrows():
        direcao = "Favoreceu Lutador A" if row['Impacto_SHAP'] > 0 else "Favoreceu Lutador B"
        logger.info(f"{row['Feature']:>30}: {row['Impacto_SHAP']:>8.4f} ({direcao})")

if __name__ == "__main__":
    generate_explanations()
