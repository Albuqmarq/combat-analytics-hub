import { FighterAvatar } from '@/components/fighter-avatar'
import type { Fighter } from '@/lib/fighters'
import type { PredictionMode } from '@/lib/predict'
import { cn } from '@/lib/utils'

type Row = {
  label: string
  red: string
  blue: string
  better?: 'red' | 'blue' | null
  physical?: boolean
}

function compare(a: number, b: number, higherIsBetter = true): 'red' | 'blue' | null {
  if (a === b) return null
  return (a > b) === higherIsBetter ? 'red' : 'blue'
}

export function TaleOfTheTape({ red, blue, mode }: { red: Fighter; blue: Fighter; mode: PredictionMode }) {
  const rows: Row[] = [
    { label: 'Cartel', red: `${red.wins}-${red.losses}`, blue: `${blue.wins}-${blue.losses}`, better: compare(red.wins / (red.wins + red.losses), blue.wins / (blue.wins + blue.losses)) },
    { label: 'Altura', red: `${red.heightCm} cm`, blue: `${blue.heightCm} cm`, physical: true },
    { label: 'Envergadura', red: `${red.reachCm} cm`, blue: `${blue.reachCm} cm`, better: compare(red.reachCm, blue.reachCm), physical: true },
    { label: 'Peso', red: `${red.weightKg} kg`, blue: `${blue.weightKg} kg`, physical: true },
    { label: 'Idade', red: `${red.age}`, blue: `${blue.age}`, better: compare(red.age, blue.age, false) },
    { label: 'Rating', red: `${red.elo}`, blue: `${blue.elo}`, better: compare(red.elo, blue.elo) },
    { label: 'Sequência', red: `${red.winStreak} V`, blue: `${blue.winStreak} V`, better: compare(red.winStreak, blue.winStreak) },
  ]

  return (
    <section aria-labelledby="tape-title" className="rounded-md border border-border bg-card">
      <h2 id="tape-title" className="border-b border-border px-6 py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Tale of the tape
      </h2>

      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4 p-6 md:grid-cols-[160px_1fr_160px] md:gap-8 md:p-8">
        <FighterCard fighter={red} corner="red" />

        <table className="col-span-3 row-start-2 w-full md:col-span-1 md:row-start-1 md:col-start-2">
          <caption className="sr-only">
            Comparação entre {red.name} e {blue.name}
          </caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">{red.name}</th>
              <th scope="col">Atributo</th>
              <th scope="col">{blue.name}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const ignored = mode === 'p4p' && row.physical
              return (
                <tr key={row.label} className={cn('border-b border-border/60 last:border-b-0', ignored && 'opacity-40')}>
                  <td className={cn('py-3 text-right font-display text-xl font-semibold tabular-nums md:text-2xl', row.better === 'red' && !ignored ? 'text-foreground' : 'text-muted-foreground')}>
                    {row.better === 'red' && !ignored && (
                      <span aria-hidden="true" className="mr-2 inline-block size-1.5 -translate-y-1 rounded-full bg-red-corner" />
                    )}
                    {row.red}
                  </td>
                  <th scope="row" className="px-3 py-3 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground md:px-6">
                    {row.label}
                    {ignored && <span className="block text-[10px] normal-case tracking-normal">fora do cálculo</span>}
                  </th>
                  <td className={cn('py-3 text-left font-display text-xl font-semibold tabular-nums md:text-2xl', row.better === 'blue' && !ignored ? 'text-foreground' : 'text-muted-foreground')}>
                    {row.blue}
                    {row.better === 'blue' && !ignored && (
                      <span aria-hidden="true" className="ml-2 inline-block size-1.5 -translate-y-1 rounded-full bg-blue-corner" />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <FighterCard fighter={blue} corner="blue" className="col-start-3 row-start-1" />
      </div>
    </section>
  )
}

function FighterCard({ fighter, corner, className }: { fighter: Fighter; corner: 'red' | 'blue'; className?: string }) {
  return (
    <div className={cn('flex flex-col gap-3', corner === 'blue' && 'items-end text-right', className)}>
      <FighterAvatar name={fighter.name} corner={corner} className="w-24 text-sm md:w-full md:text-lg" />
      <div>
        <p className="font-display text-xl font-bold uppercase leading-tight">{fighter.name}</p>
        <p className="text-sm text-muted-foreground">{fighter.country}</p>
      </div>
    </div>
  )
}
