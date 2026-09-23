import { PredictRequest, PredictResponse, FighterBase, FighterListResponse, ModelMetrics } from '@/types';

// Funcoes utilitarias chamadas pelos componentes React (Client e Server).
// Elas apontam para os proprios Route Handlers do Next.js (/api/...) 
// para esconder o Gateway do navegador (BFF Pattern).

export async function fetchPrediction(payload: PredictRequest): Promise<PredictResponse> {
  const res = await fetch('/api/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Falha ao buscar predição');
  }
  
  return res.json();
}

// Lista leve de lutadores (id/nome/categoria/record/elo). Servida pelo backend
// via BFF, evitando embutir ~2MB de dados no bundle do navegador.
export async function fetchFighters(search = '', limit = 3000): Promise<FighterListResponse> {
  const qs = new URLSearchParams({ search, limit: String(limit) });
  const res = await fetch(`/api/fighters?${qs.toString()}`);
  if (!res.ok) {
    throw new Error('Falha ao listar lutadores');
  }
  return res.json();
}

// Perfil completo de um lutador (todas as stats + radar), buscado sob demanda.
export async function fetchFighter(id: string): Promise<FighterBase> {
  const res = await fetch(`/api/fighters/${encodeURIComponent(id)}`);
  if (!res.ok) {
    throw new Error('Falha ao buscar o perfil do lutador');
  }
  return res.json();
}

// Metricas honestas do modelo (teste temporal), exibidas na landing page.
export async function fetchModelMetrics(): Promise<ModelMetrics> {
  const res = await fetch('/api/model-metrics');
  if (!res.ok) {
    throw new Error('Falha ao buscar as métricas do modelo');
  }
  return res.json();
}
