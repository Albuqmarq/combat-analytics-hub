import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display font-bold uppercase tracking-wide text-foreground">Combat Hub</span>
          {' — '}feito por fãs de MMA, para fãs de MMA.
        </p>
        <nav aria-label="Rodapé" className="flex gap-5">
          <Link href="/arena" className="hover:text-foreground">
            Simular confronto
          </Link>
          <Link href="/lutadores" className="hover:text-foreground">
            Catálogo de atletas
          </Link>
        </nav>
      </div>
    </footer>
  )
}
