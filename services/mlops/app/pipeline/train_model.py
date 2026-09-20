import logging
from pathlib import Path
import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.metrics import accuracy_score, roc_auc_score
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

    logger.info(f"Features: {list(X_train.columns)}")
    logger.info(f"Train: {len(X_train)} | Val: {len(X_val)} | Test: {len(X_test)}")

    clf = xgb.XGBClassifier(
        n_estimators=200,
        max_depth=4,
        learning_rate=0.05,
        subsample=0.8,
        colsample_bytree=0.8,
        objective='binary:logistic',
        eval_metric='logloss',
        early_stopping_rounds=15,
        random_state=42
    )

    clf.fit(X_train, y_train, eval_set=[(X_val, y_val)], verbose=False)

    y_pred = clf.predict(X_test)
    y_prob = clf.predict_proba(X_test)[:, 1]

    acc = accuracy_score(y_test, y_pred)
    roc_auc = roc_auc_score(y_test, y_prob)

    logger.info(f"Accuracy: {acc:.4f} | ROC AUC: {roc_auc:.4f}")

    importances = pd.Series(clf.feature_importances_, index=X_train.columns).sort_values(ascending=False)
    top_features = {k: round(float(v), 4) for k, v in importances.head(10).items()}

    metrics = {
        "accuracy": round(acc, 4),
        "roc_auc": round(roc_auc, 4),
        "n_features": len(X_train.columns),
        "n_train": len(X_train),
        "n_val": len(X_val),
        "n_test": len(X_test),
        "top_features": top_features
    }

    model_path = model_dir / "xgb_v3.joblib"
    joblib.dump(clf, model_path)
    logger.info(f"Modelo salvo em: {model_path}")

    with open(model_dir / "metrics.json", "w") as f:
        json.dump(metrics, f, indent=4)

    with open(model_dir / "feature_columns.json", "w") as f:
        json.dump(list(X_train.columns), f)

if __name__ == "__main__":
    train_and_evaluate()
