import { NextResponse } from 'next/server';
import { PredictRequest } from '@/types';

// O GATEWAY_URL fica protegido no lado do servidor (BFF)
const GATEWAY_URL = process.env.GATEWAY_URL || 'http://127.0.0.1:8000';

export async function POST(request: Request) {
  try {
    const body: PredictRequest = await request.json();

    const response = await fetch(`${GATEWAY_URL}/api/v1/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.detail || 'Erro no Gateway' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('BFF Error:', error);
    return NextResponse.json({ error: 'Erro interno no BFF' }, { status: 500 });
  }
}
