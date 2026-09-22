import { NextResponse } from 'next/server';

// O GATEWAY_URL fica protegido no lado do servidor (BFF).
const GATEWAY_URL = process.env.GATEWAY_URL || 'http://127.0.0.1:8000';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const response = await fetch(`${GATEWAY_URL}/api/v1/fighters/${encodeURIComponent(id)}`);
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('BFF fighter detail error:', error);
    return NextResponse.json({ error: 'Erro interno no BFF' }, { status: 500 });
  }
}
