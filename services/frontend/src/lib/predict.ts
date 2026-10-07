// Predicao REAL: chama o nosso backend (XGBoost + SHAP) via BFF e devolve o
// veredito ja no formato do design. O calculo acontece no servidor.

export type PredictionMode = 'absoluto' | 'p4p'

export type Factor = {
  label: string
  detail: string
  favors: 'red' | 'blue'
}

export type Prediction = {
  redProbability: number
  blueProbability: number
  factors: Factor[]
}

export async function predictFight(
  redId: string,
  blueId: string,
  mode: PredictionMode,
): Promise<Prediction> {
  const res = await fetch('/api/predict-matchup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ red: redId, blue: blueId, mode }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || 'Falha ao calcular o veredito')
  }
  return res.json()
}
