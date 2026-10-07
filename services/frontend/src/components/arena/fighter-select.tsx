import { ChevronDown } from 'lucide-react'
import type { FighterLight } from '@/lib/fighters'
import { cn } from '@/lib/utils'

export function FighterSelect({
  id,
  label,
  corner,
  value,
  excludeId,
  fighters,
  onChange,
}: {
  id: string
  label: string
  corner: 'red' | 'blue'
  value: string
  excludeId: string
  fighters: FighterLight[]
  onChange: (id: string) => void
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={cn(
          'mb-2 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em]',
          corner === 'red' ? 'text-red-corner' : 'text-blue-corner md:justify-end',
        )}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            'w-full cursor-pointer appearance-none rounded-md border border-border border-l-4 bg-card py-3.5 pr-11 pl-4 font-display text-xl font-semibold uppercase tracking-wide focus:border-foreground/40 focus:outline-none',
            corner === 'red' ? 'border-l-red-corner' : 'border-l-blue-corner',
          )}
        >
          {fighters
            .filter((f) => f.id !== excludeId)
            .map((f) => (
              <option key={f.id} value={f.id}>
                {f.name} — {f.division}
              </option>
            ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
