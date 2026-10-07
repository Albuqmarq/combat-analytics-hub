import type { Metadata } from 'next'
import { Arena } from '@/components/arena/arena'
import { PageHeading } from '@/components/page-heading'

export const metadata: Metadata = {
  title: 'Arena — Combat Hub',
  description: 'Escolha dois lutadores, compare o tale of the tape e veja quem leva a melhor.',
}

export default async function ArenaPage({
  searchParams,
}: {
  searchParams: Promise<{ vermelho?: string; azul?: string }>
}) {
  const { vermelho, azul } = await searchParams
  const redId = vermelho || 'georges-st-pierre'
  const blueId = azul && azul !== redId ? azul : redId === 'jon-jones' ? 'islam-makhachev' : 'jon-jones'

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <PageHeading
        eyebrow="Arena de simulação"
        title="Monte a luta"
        description="Escolha quem fica em cada corner, compare os números e peça o veredito."
      />
      <Arena initialRedId={redId} initialBlueId={blueId} />
    </main>
  )
}
