import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid overflow-hidden rounded-md border border-border md:grid-cols-2">
        <div className="bg-red-corner/10 p-8 md:p-12">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-red-corner">Corner vermelho</p>
          <p className="mt-2 font-display text-3xl font-bold uppercase">Seu favorito</p>
        </div>
        <div className="bg-blue-corner/10 p-8 text-right md:p-12">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-blue-corner">Corner azul</p>
          <p className="mt-2 font-display text-3xl font-bold uppercase">O desafiante</p>
        </div>
        <div className="flex flex-col items-start gap-6 border-t border-border p-8 md:col-span-2 md:flex-row md:items-center md:justify-between md:p-12">
          <h2 id="cta-title" className="max-w-xl font-display text-4xl font-bold uppercase leading-none text-balance md:text-5xl">
            Aquela discussão de &ldquo;quem ganha&rdquo;? Resolva agora.
          </h2>
          <Link
            href="/arena"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-foreground px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-wide text-background transition-colors hover:bg-foreground/90"
          >
            Ir para a arena
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
