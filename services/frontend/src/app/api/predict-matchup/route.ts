import { NextResponse } from 'next/server'

// O GATEWAY_URL fica protegido no lado do servidor (BFF).
const GATEWAY_URL = process.env.GATEWAY_URL || 'http://127.0.0.1:8000'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const response = await fetch(`${GATEWAY_URL}/api/v1/predict/matchup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('BFF predict-matchup error:', error)
    return NextResponse.json({ error: 'Erro interno no BFF' }, { status: 500 })
  }
}
