import { PredictRequest, PredictResponse, Fighter, Event } from '@/types';

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

export async function fetchFighters(): Promise<Fighter[]> {
  // Esse faria uma chamada para /api/fighters que repassaria pro gateway.
  // Temporario: Mock
  return [
    { id: 1, name: 'Jon Jones' },
    { id: 2, name: 'Alex Pereira' }
  ];
}
