# CombatAnalytics Hub

Plataforma de análise estatística e previsão de resultados de lutas do UFC via Machine Learning.

## Arquitetura

Microserviços independentes orquestrados via Docker Compose:

| Serviço     | Porta | Papel |
|-------------|-------|-------|
| `frontend`  | 3000  | Next.js (BFF) — a "Arena de Simulação" e o catálogo de atletas |
| `gateway`   | 8000  | API Gateway — CORS, rate limiting, logs estruturados e proxy resiliente |
| `inference` | 8001  | Inferência em tempo real (XGBoost + SHAP), protegida por chave interna |
| `mlops`     | 8002  | Pipeline de feature engineering, treino e explicabilidade |

## Como executar

Pré-requisitos: Docker + Docker Compose.

```bash
cp .env.example .env   # defina chaves fortes para INTERNAL_API_KEY e ADMIN_API_KEY
docker compose up --build
```

Depois abra **http://localhost:3000**. Para derrubar: `Ctrl+C` e `docker compose down`.

Os artefatos do modelo em `services/mlops/models` são montados na inferência (via `MODELS_DIR`).
Para regenerar features e retreinar localmente:

```bash
cd services/mlops
python -m app.pipeline.feature_engineering   # gera os splits temporais
python -m app.pipeline.train_model           # treina + gera métricas e SHAP
```

## O modelo de IA

- **Alvo:** probabilidade de vitória de cada lutador em um confronto.
- **Features (26):** deltas (A − B) de Elo, idade, alcance, altura, sequência, taxa de
  vitória/finalização, inatividade, experiência e médias móveis de golpes/quedas/controle.
- **Split temporal (anti-vazamento):** os dados são cortados por data (treino no passado,
  validação e teste no futuro). A simetrização R↔B é aplicada **dentro de cada split**, de
  modo que o espelho de uma luta nunca cruza para outro split. O teste fica balanceado
  (baseline 50%), coerente com o uso simétrico do app.
- **Métricas honestas (teste):** `accuracy ≈ 0.63`, `ROC AUC ≈ 0.68`.
- **Explicabilidade:** SHAP (`TreeExplainer`) expõe, por predição, os fatores que mais pesaram.

## Segurança

- Comunicação interna entre serviços autenticada por `INTERNAL_API_KEY`.
- Rota de treino (`/api/v1/admin/train`) protegida por `ADMIN_API_KEY` (fail-closed).
- Segredos ficam em `.env` (nunca versionado); veja `.env.example`.
