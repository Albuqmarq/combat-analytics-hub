import { STYLE_AXES, type StyleProfile } from '@/lib/fighters'

type Series = { name: string; style: StyleProfile; color: string }

const SIZE = 320
const CENTER = SIZE / 2
const RADIUS = 110
const RINGS = [0.25, 0.5, 0.75, 1]

function point(index: number, value: number) {
  const angle = (Math.PI * 2 * index) / STYLE_AXES.length - Math.PI / 2
  const r = (Math.max(0, Math.min(100, value)) / 100) * RADIUS
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)] as const
}

function polygon(values: number[]) {
  return values.map((v, i) => point(i, v).join(',')).join(' ')
}

export function StyleRadar({ series, className }: { series: Series[]; className?: string }) {
  const summary = series
    .map((s) => `${s.name}: ${STYLE_AXES.map((a) => `${a.label} ${s.style[a.key]}`).join(', ')}`)
    .join('. ')

  return (
    <figure className={className}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={summary}>
        {RINGS.map((ring) => (
          <polygon
            key={ring}
            points={polygon(STYLE_AXES.map(() => ring * 100))}
            fill="none"
            stroke="var(--border)"
            strokeWidth={1}
          />
        ))}
        {STYLE_AXES.map((axis, i) => {
          const [x, y] = point(i, 100)
          return <line key={axis.key} x1={CENTER} y1={CENTER} x2={x} y2={y} stroke="var(--border)" strokeWidth={1} />
        })}

        {series.map((s) => (
          <polygon
            key={s.name}
            points={polygon(STYLE_AXES.map((a) => s.style[a.key]))}
            fill={s.color}
            fillOpacity={0.16}
            stroke={s.color}
            strokeWidth={2}
            strokeLinejoin="round"
          />
        ))}

        {STYLE_AXES.map((axis, i) => {
          const [x, y] = point(i, 124)
          const anchor = Math.abs(x - CENTER) < 4 ? 'middle' : x > CENTER ? 'start' : 'end'
          return (
            <text
              key={axis.key}
              x={x}
              y={y}
              textAnchor={anchor}
              dominantBaseline="middle"
              className="fill-muted-foreground font-display text-[12px] font-semibold uppercase tracking-wider"
            >
              {axis.label}
            </text>
          )
        })}
      </svg>
    </figure>
  )
}
