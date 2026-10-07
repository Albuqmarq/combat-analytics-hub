import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FighterAvatar } from '@/components/fighter-avatar'
import { StyleRadar } from '@/components/style-radar'
import { STYLE_AXES, type Fighter } from '@/lib/fighters'

export function FighterProfile({ fighter }: { fighter: Fighter }) {
  const stats = [
    { label: 'Acerto de golpes', value: `${fighter.strikeAccuracy}%` },
    { label: 'Precisão de quedas', value: `${fighter.takedownAccuracy}%` },
    { label: 'Lutas por título', value: fighter.titleFights },
  ]

  const physical = [
    { label: 'Altura', value: `${fighter.heightCm} cm` },
    { label: 'Envergadura', value: `${fighter.reachCm} cm` },
    { label: 'Peso', value: `${fighter.weightKg} kg` },
    { label: 'Idade', value: `${fighter.age} anos` },
  ]

  return (
    <article aria-labelledby="profile-name" className="rounded-md border border-border bg-card">
      <header className="flex flex-col gap-6 border-b border-border p-6 sm:flex-row sm:items-center md:p-8">
        <FighterAvatar name={fighter.name} corner="red" className="w-24 shrink-0 text-base md:w-28" />
        <div className="min-w-0 flex-1">
          {fighter.nickname && (
            <p className="font-display text-base font-semibold uppercase tracking-widest text-red-corner">
              &ldquo;{fighter.nickname}&rdquo;
            </p>
          )}
          <h2 id="profile-name" className="font-display text-4xl font-bold uppercase leading-none md:text-5xl">
            {fighter.name}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {fighter.division} · {fighter.country}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="font-display text-5xl font-bold leading-none tabular-nums">
            {fighter.wins}
            <span className="text-muted-foreground">-</span>
            {fighter.losses}
          </p>
          <p className="mt-1 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cartel
          </p>
        </div>
      </header>

      <dl className="grid grid-cols-3 border-b border-border">
        {stats.map((s) => (
          <div key={s.label} className="border-r border-border p-5 last:border-r-0 md:p-6">
            <dt className="text-xs text-muted-foreground md:text-sm">{s.label}</dt>
            <dd className="mt-1 font-display text-3xl font-bold tabular-nums md:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
        <div className="flex flex-col gap-8">
          <section aria-labelledby="physical-title">
            <h3 id="physical-title" className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Ficha física
            </h3>
            <dl className="mt-3 divide-y divide-border">
              {physical.map((p) => (
                <div key={p.label} className="flex justify-between py-2.5 text-sm">
                  <dt className="text-muted-foreground">{p.label}</dt>
                  <dd className="font-medium tabular-nums">{p.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="style-bars-title">
            <h3 id="style-bars-title" className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Notas de estilo
            </h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {STYLE_AXES.map((axis) => (
                <li key={axis.key} className="grid grid-cols-[88px_1fr_28px] items-center gap-3 text-sm">
                  <span className="text-muted-foreground">{axis.label}</span>
                  <span className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <span
                      className="block h-full rounded-full bg-foreground/80"
                      style={{ width: `${fighter.style[axis.key]}%` }}
                    />
                  </span>
                  <span className="text-right tabular-nums">{fighter.style[axis.key]}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="radar-title" className="flex flex-col">
          <h3 id="radar-title" className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Perfil de luta
          </h3>
          <StyleRadar
            className="mt-2 flex-1"
            series={[{ name: fighter.name, style: fighter.style, color: 'var(--red-corner)' }]}
          />
          <Link
            href={`/arena?vermelho=${fighter.id}`}
            className="group mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 font-display text-base font-semibold uppercase tracking-wide transition-colors hover:border-foreground/40"
          >
            Levar para a arena
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </article>
  )
}
