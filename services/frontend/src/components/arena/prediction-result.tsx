import { RotateCcw } from 'lucide-react'
import type { Fighter } from '@/lib/fighters'
import type { Prediction } from '@/lib/predict'
import { cn } from '@/lib/utils'

function lastName(name: string) {
  return name.split(' ').at(-1) ?? name
}

export function PredictionResult({
  red,
  blue,
  prediction,
  onReset,
}: {
  red: Fighter
  blue: Fighter
  prediction: Prediction
  onReset: () => void
}) {
  const { redProbability, blueProbability, factors } = prediction
  const gap = Math.abs(redProbability - blueProbability)
  const favorite = redProbability >= blueProbability ? red : blue

  const headline =
    gap < 6
      ? 'Luta parelha. Pode ir para qualquer lado.'
      : gap < 25
        ? `${lastName(favorite.name)} chega como favorito.`
        : `${lastName(favorite.name)} é favorito claro.`

  return (
    <section aria-labelledby="verdict-title" className="flex flex-col gap-6 border-t border-border pt-10">
      <div className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">O veredito</p>
        <h2 id="verdict-title" className="mt-2 font-display text-4xl font-bold uppercase leading-none text-balance md:text-5xl">
          {headline}
        </h2>
      </div>

      <div className="rounded-md border border-border bg-card p-6 md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-5xl font-bold leading-none tabular-nums text-red-corner md:text-6xl">
              {redProbability}%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{red.name}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-5xl font-bold leading-none tabular-nums text-blue-corner md:text-6xl">
              {blueProbability}%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{blue.name}</p>
          </div>
        </div>

        <div
          role="img"
          aria-label={`${red.name} ${redProbability}% contra ${blue.name} ${blueProbability}%`}
          className="relative mt-6 flex h-3 overflow-hidden rounded-full bg-secondary"
        >
          <div className="bg-red-corner transition-[width] duration-700 ease-out" style={{ width: `${redProbability}%` }} />
          <div className="flex-1 bg-blue-corner" />
          <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-background" />
        </div>
      </div>

      <div className="rounded-md border border-border bg-card">
        <div className="border-b border-border px-6 py-5 md:px-8">
          <h3 className="font-display text-2xl font-bold uppercase">O que decidiu a balança</h3>
          <p className="mt-1 text-sm text-muted-foreground">Do fator mais importante para o menos importante.</p>
        </div>

        {factors.length === 0 ? (
          <p className="px-6 py-8 text-muted-foreground md:px-8">
            Nenhum fator se destacou — os dois chegam praticamente empatados em tudo.
          </p>
        ) : (
          <ol className="divide-y divide-border">
            {factors.map((factor) => {
              const winner = factor.favors === 'red' ? red : blue
              return (
                <li key={factor.label} className="flex gap-4 px-6 py-4 md:px-8">
                  <span
                    aria-hidden="true"
                    className={cn('mt-1.5 h-8 w-1 shrink-0 rounded-full', factor.favors === 'red' ? 'bg-red-corner' : 'bg-blue-corner')}
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div>
                      <p className="font-medium">{factor.label}</p>
                      <p className="text-sm text-muted-foreground">{factor.detail}</p>
                    </div>
                    <p
                      className={cn(
                        'shrink-0 font-display text-base font-semibold uppercase tracking-wide',
                        factor.favors === 'red' ? 'text-red-corner' : 'text-blue-corner',
                      )}
                    >
                      {winner.name}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        )}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mx-auto inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-display text-base font-semibold uppercase tracking-wide transition-colors hover:border-foreground/40"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        Nova simulação
      </button>
    </section>
  )
}
