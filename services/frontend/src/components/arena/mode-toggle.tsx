import type { PredictionMode } from '@/lib/predict'
import { cn } from '@/lib/utils'

const modes: { value: PredictionMode; title: string; text: string }[] = [
  { value: 'absoluto', title: 'Absoluto', text: 'Luta de verdade: tamanho, alcance e peso contam.' },
  { value: 'p4p', title: 'Pound for Pound', text: 'Como se fossem do mesmo tamanho: só a técnica decide.' },
]

export function ModeToggle({ mode, onChange }: { mode: PredictionMode; onChange: (m: PredictionMode) => void }) {
  return (
    <fieldset>
      <legend className="sr-only">Modo de simulação</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {modes.map((m) => {
          const active = m.value === mode
          return (
            <label
              key={m.value}
              className={cn(
                'flex cursor-pointer gap-4 rounded-md border p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                active ? 'border-foreground/50 bg-secondary' : 'border-border hover:border-foreground/25',
              )}
            >
              <input
                type="radio"
                name="mode"
                value={m.value}
                checked={active}
                onChange={() => onChange(m.value)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  'mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border',
                  active ? 'border-foreground' : 'border-muted-foreground',
                )}
              >
                {active && <span className="size-2 rounded-full bg-foreground" />}
              </span>
              <span>
                <span className="block font-display text-lg font-bold uppercase tracking-wide">{m.title}</span>
                <span className="block text-sm text-muted-foreground">{m.text}</span>
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
