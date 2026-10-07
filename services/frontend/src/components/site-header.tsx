'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Início' },
  { href: '/arena', label: 'Arena' },
  { href: '/lutadores', label: 'Lutadores' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Combat Hub — página inicial">
          <span aria-hidden="true" className="flex h-7 items-center gap-0.5">
            <span className="h-full w-1.5 rounded-sm bg-red-corner" />
            <span className="h-full w-1.5 rounded-sm bg-blue-corner" />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-wide">Combat Hub</span>
        </Link>

        <nav aria-label="Principal">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative px-3 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors',
                      active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {link.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-[17px] h-0.5 bg-red-corner"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
