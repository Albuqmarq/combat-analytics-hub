import { NextResponse } from 'next/server';

// O GATEWAY_URL fica protegido no lado do servidor (BFF).
const GATEWAY_URL = process.env.GATEWAY_URL || 'http://127.0.0.1:8000';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const qs = searchParams.toString();
    const response = await fetch(`${GATEWAY_URL}/api/v1/fighters?${qs}`);
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('BFF fighters list error:', error);
    return NextResponse.json({ error: 'Erro interno no BFF' }, { status: 500 });
  }
}
