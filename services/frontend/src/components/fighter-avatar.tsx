import { initials } from '@/lib/fighters'
import { cn } from '@/lib/utils'

type Corner = 'red' | 'blue' | 'neutral'

export function FighterAvatar({
  name,
  corner = 'neutral',
  className,
}: {
  name: string
  corner?: Corner
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'grain relative flex aspect-square items-center justify-center overflow-hidden rounded-md bg-secondary',
        corner === 'red' && 'bg-red-corner/15',
        corner === 'blue' && 'bg-blue-corner/15',
        className,
      )}
    >
      <span
        className={cn(
          'font-display text-[2.5em] font-bold leading-none',
          corner === 'red' && 'text-red-corner',
          corner === 'blue' && 'text-blue-corner',
          corner === 'neutral' && 'text-muted-foreground',
        )}
      >
        {initials(name)}
      </span>
      {corner !== 'neutral' && (
        <span
          className={cn(
            'absolute inset-x-0 bottom-0 h-1',
            corner === 'red' ? 'bg-red-corner' : 'bg-blue-corner',
          )}
        />
      )}
    </div>
  )
}
