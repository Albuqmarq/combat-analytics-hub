// Adaptador: busca os dados REAIS no nosso backend (via BFF) e os mapeia para o
// formato de Fighter que os componentes do design esperam. Nada de dados estaticos.

export type StyleProfile = {
  volume: number
  finalizacao: number
  wrestling: number
  jiujitsu: number
  defQueda: number
  defPe: number
}

export type Fighter = {
  id: string
  name: string
  nickname?: string
  division: string
  country: string
  wins: number
  losses: number
  heightCm: number
  reachCm: number
  weightKg: number
  age: number
  elo: number
  winStreak: number
  strikeAccuracy: number
  takedownAccuracy: number
  titleFights: number
  monthsInactive: number
  style: StyleProfile
}

// Projecao leve usada nas listas/seletores.
export type FighterLight = {
  id: string
  name: string
  division: string
  record: string
  country: string
  elo: number
}

export const STYLE_AXES: { key: keyof StyleProfile; label: string }[] = [
  { key: 'volume', label: 'Volume' },
  { key: 'finalizacao', label: 'Finalização' },
  { key: 'wrestling', label: 'Wrestling' },
  { key: 'jiujitsu', label: 'Jiu-Jitsu' },
  { key: 'defQueda', label: 'Def. Queda' },
  { key: 'defPe', label: 'Def. em Pé' },
]

// Nossas categorias vem em ingles; traduzimos para as divisoes do UFC em pt-BR.
const DIVISION_PT: Record<string, string> = {
  Strawweight: 'Peso-palha',
  Flyweight: 'Peso-mosca',
  Bantamweight: 'Peso-galo',
  Featherweight: 'Peso-pena',
  Lightweight: 'Peso-leve',
  Welterweight: 'Meio-médio',
  Middleweight: 'Peso-médio',
  'Light Heavyweight': 'Meio-pesado',
  Heavyweight: 'Peso-pesado',
  "Women's Strawweight": 'Peso-palha feminino',
  "Women's Flyweight": 'Peso-mosca feminino',
  "Women's Bantamweight": 'Peso-galo feminino',
  "Women's Featherweight": 'Peso-pena feminino',
}

export function divisionLabel(category: string): string {
  return DIVISION_PT[category] ?? category
}

export function initials(name: string) {
  const parts = name.split(' ').filter(Boolean)
  return ((parts[0]?.[0] ?? '') + (parts[parts.length - 1]?.[0] ?? '')).toUpperCase()
}

export function formatRecord(f: { wins: number; losses: number }) {
  return `${f.wins}-${f.losses}`
}

const STYLE_FROM_SUBJECT: Record<string, keyof StyleProfile> = {
  Volume: 'volume',
  Finalização: 'finalizacao',
  Wrestling: 'wrestling',
  'Jiu-Jitsu': 'jiujitsu',
  'Def. Queda': 'defQueda',
  'Def. em Pé': 'defPe',
}

type RadarPoint = { subject: string; A: number; fullMark: number }

function toStyle(radar: RadarPoint[]): StyleProfile {
  const style: StyleProfile = { volume: 0, finalizacao: 0, wrestling: 0, jiujitsu: 0, defQueda: 0, defPe: 0 }
  for (const p of radar ?? []) {
    const key = STYLE_FROM_SUBJECT[p.subject]
    if (key) style[key] = Math.round((p.A / (p.fullMark || 150)) * 100)
  }
  return style
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function adapt(d: any): Fighter {
  const [wins, losses] = String(d.record ?? '0-0').split('-').map((n: string) => parseInt(n, 10) || 0)
  return {
    id: d.id,
    name: d.name,
    division: divisionLabel(d.category),
    country: d.country,
    wins,
    losses,
    heightCm: d.heightCm,
    reachCm: d.reachCm,
    weightKg: d.weightKg,
    age: d.age,
    elo: d.elo,
    winStreak: Math.max(0, d.streak ?? 0),
    strikeAccuracy: d.stats?.striking ?? 0,
    takedownAccuracy: d.stats?.takedown ?? 0,
    titleFights: d.stats?.titleFights ?? 0,
    monthsInactive: Math.round((d.daysInactive ?? 0) / 30),
    style: toStyle(d.radar),
  }
}

export async function listFighters(search = '', limit = 300): Promise<FighterLight[]> {
  const qs = new URLSearchParams({ search, limit: String(limit) })
  const res = await fetch(`/api/fighters?${qs.toString()}`)
  if (!res.ok) throw new Error('Falha ao listar lutadores')
  const data = await res.json()
  return (data.items ?? []).map((it: any) => ({
    id: it.id,
    name: it.name,
    division: divisionLabel(it.category),
    record: it.record,
    country: it.country,
    elo: it.elo,
  }))
}

export async function getFighter(id: string): Promise<Fighter> {
  const res = await fetch(`/api/fighters/${encodeURIComponent(id)}`)
  if (!res.ok) throw new Error('Falha ao buscar o perfil do lutador')
  return adapt(await res.json())
}
