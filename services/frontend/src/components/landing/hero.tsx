import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden border-b border-border/70">
      <Image
        src="/images/octagon-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 py-24">
        <p className="mb-6 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span aria-hidden="true" className="h-px w-10 bg-red-corner" />
          Análise de MMA para quem vive a luta
        </p>

        <h1 className="max-w-3xl font-display text-6xl font-bold uppercase leading-[0.9] text-balance md:text-8xl">
          Quem vence <span className="text-red-corner">quando</span> a porta do octógono fecha?
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Monte qualquer confronto, compare cartel, alcance e estilo de jogo lado a lado e descubra quem
          leva a melhor — com os motivos explicados como um bom comentarista explicaria.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/arena"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-wide text-background transition-colors hover:bg-foreground/90"
          >
            Montar um confronto
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            href="/lutadores"
            className="inline-flex items-center rounded-md border border-border bg-background/40 px-6 py-3.5 font-display text-lg font-semibold uppercase tracking-wide transition-colors hover:border-foreground/40"
          >
            Explorar atletas
          </Link>
        </div>
      </div>
    </section>
  )
}
