import type { Metadata } from 'next'
import { FighterCatalog } from '@/components/catalog/fighter-catalog'
import { PageHeading } from '@/components/page-heading'

export const metadata: Metadata = {
  title: 'Lutadores — Combat Hub',
  description: 'Catálogo de atletas do UFC com cartel, estatísticas e perfil de estilo.',
}

export default async function FightersPage({
  searchParams,
}: {
  searchParams: Promise<{ atleta?: string }>
}) {
  const { atleta } = await searchParams

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <PageHeading
        eyebrow="Catálogo de atletas"
        title="Lutadores"
        description="Procure um atleta e veja cartel, números de luta e como ele gosta de lutar."
      />
      <FighterCatalog initialId={atleta} />
    </main>
  )
}
