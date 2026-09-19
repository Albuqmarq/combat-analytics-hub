import logging
from pathlib import Path
import pandas as pd
import xgboost as xgb
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score
import joblib
import json

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def load_data(data_dir: Path):
    train_df = pd.read_parquet(data_dir / "train.parquet")
    val_df = pd.read_parquet(data_dir / "val.parquet")
    test_df = pd.read_parquet(data_dir / "test.parquet")
    
    X_train, y_train = train_df.drop(columns=['target']), train_df['target']
    X_val, y_val = val_df.drop(columns=['target']), val_df['target']
    X_test, y_test = test_df.drop(columns=['target']), test_df['target']
    
    return X_train, y_train, X_val, y_val, X_test, y_test

def train_and_evaluate():
    base_dir = Path(__file__).resolve().parent.parent.parent
    data_dir = base_dir / "data" / "features"
    model_dir = base_dir / "models"
    model_dir.mkdir(parents=True, exist_ok=True)
    
    logger.info("Carregando datasets")
    X_train, y_train, X_val, y_val, X_test, y_test = load_data(data_dir)
    
    logger.info("Iniciando treinamento com XGBoost")
    
    clf = xgb.XGBClassifier(
        n_estimators=100,
        max_depth=4,
        learning_rate=0.05,
        subsample=0.8,
        colsample_bytree=0.8,
        objective='binary:logistic',
        eval_metric='logloss',
        early_stopping_rounds=10,
        random_state=42
    )
    
    clf.fit(
        X_train, y_train,
        eval_set=[(X_val, y_val)],
        verbose=False
    )
    
    logger.info("Treinamento concluido. Avaliando no conjunto de teste.")
    
    y_pred = clf.predict(X_test)
    y_prob = clf.predict_proba(X_test)[:, 1]
    
    acc = accuracy_score(y_test, y_pred)
    roc_auc = roc_auc_score(y_test, y_prob)
    
    metrics = {
        "accuracy": acc,
        "roc_auc": roc_auc
    }
    
    logger.info(f"Metricas Teste - Accuracy: {acc:.4f} | ROC AUC: {roc_auc:.4f}")
    
    model_path = model_dir / "xgb_baseline.joblib"
    joblib.dump(clf, model_path)
    logger.info(f"Modelo salvo em: {model_path}")
    
    with open(model_dir / "metrics.json", "w") as f:
        json.dump(metrics, f, indent=4)

if __name__ == "__main__":
    train_and_evaluate()
