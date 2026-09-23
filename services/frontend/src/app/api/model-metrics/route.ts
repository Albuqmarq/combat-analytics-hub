import { NextResponse } from 'next/server';

// O GATEWAY_URL fica protegido no lado do servidor (BFF).
const GATEWAY_URL = process.env.GATEWAY_URL || 'http://127.0.0.1:8000';

export async function GET() {
  try {
    const response = await fetch(`${GATEWAY_URL}/api/v1/model/metrics`, {
      // As metricas mudam raramente; cache leve reduz chamadas ao gateway.
      next: { revalidate: 300 },
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('BFF model-metrics error:', error);
    return NextResponse.json({ error: 'Erro interno no BFF' }, { status: 500 });
  }
}
