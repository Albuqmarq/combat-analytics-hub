'use client'

import { useEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react'
import { listFighters, getFighter, type Fighter, type FighterLight } from '@/lib/fighters'
import { cn } from '@/lib/utils'
import { FighterProfile } from './fighter-profile'

export function FighterCatalog({ initialId }: { initialId?: string }) {
  const [query, setQuery] = useState('')
  const [list, setList] = useState<FighterLight[]>([])
  const [selected, setSelected] = useState<Fighter | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(initialId ?? null)
  const [error, setError] = useState<string | null>(null)
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null)

  function loadDetail(id: string) {
    setSelectedId(id)
    getFighter(id).then(setSelected).catch(() => setError('Não foi possível carregar o perfil.'))
  }

  // Carga inicial: lista + primeiro perfil.
  useEffect(() => {
    listFighters('', 200)
      .then((items) => {
        setList(items)
        const first = (initialId && items.find((f) => f.id === initialId)?.id) || items[0]?.id
        if (first) loadDetail(first)
      })
      .catch(() => setError('Não foi possível carregar o catálogo.'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Busca no backend (debounce).
  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current)
    debounce.current = setTimeout(() => {
      listFighters(query, 200).then(setList).catch(() => {})
    }, 300)
    return () => { if (debounce.current) clearTimeout(debounce.current) }
  }, [query])

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <aside aria-label="Lista de atletas" className="flex flex-col overflow-hidden rounded-md border border-border bg-card">
        <div className="border-b border-border p-3">
          <label htmlFor="fighter-search" className="sr-only">Buscar atleta</label>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              id="fighter-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nome do atleta"
              className="w-full rounded-md border border-border bg-background py-2.5 pr-3 pl-9 text-sm placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none"
            />
          </div>
          <p className="mt-2 px-1 text-xs text-muted-foreground" aria-live="polite">
            {list.length} {list.length === 1 ? 'atleta' : 'atletas'}
          </p>
        </div>

        <ul className="max-h-80 overflow-y-auto lg:max-h-[620px]">
          {list.map((f) => {
            const active = f.id === selectedId
            return (
              <li key={f.id}>
                <button
                  type="button"
                  onClick={() => loadDetail(f.id)}
                  aria-current={active ? 'true' : undefined}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 border-b border-border/60 border-l-2 px-4 py-3 text-left transition-colors',
                    active ? 'border-l-red-corner bg-secondary' : 'border-l-transparent hover:bg-secondary/60',
                  )}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-display text-lg font-semibold uppercase leading-tight">{f.name}</span>
                    <span className="block text-xs text-muted-foreground">{f.division}</span>
                  </span>
                  <span className="shrink-0 font-display text-base font-semibold tabular-nums text-muted-foreground">{f.record}</span>
                </button>
              </li>
            )
          })}
          {list.length === 0 && (
            <li className="px-4 py-10 text-center text-sm text-muted-foreground">
              Nenhum atleta com esse nome. Tente outra busca.
            </li>
          )}
        </ul>
      </aside>

      {error && !selected ? (
        <p role="alert" className="rounded-md border border-destructive/60 bg-destructive/10 p-6 text-sm">{error}</p>
      ) : selected ? (
        <FighterProfile fighter={selected} />
      ) : (
        <div className="rounded-md border border-border bg-card p-10 text-center text-sm text-muted-foreground" aria-busy="true">
          Carregando perfil…
        </div>
      )}
    </div>
  )
}
