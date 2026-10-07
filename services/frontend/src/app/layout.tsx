import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

// Fontes auto-hospedadas (arquivos em ./fonts) para o build nao depender de rede.
const body = localFont({
  variable: '--font-body',
  display: 'swap',
  src: [
    { path: './fonts/Barlow-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Barlow-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Barlow-600.woff2', weight: '600', style: 'normal' },
  ],
})

const display = localFont({
  variable: '--font-display-face',
  display: 'swap',
  src: [
    { path: './fonts/BarlowCondensed-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/BarlowCondensed-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/BarlowCondensed-700.woff2', weight: '700', style: 'normal' },
    { path: './fonts/BarlowCondensed-800.woff2', weight: '800', style: 'normal' },
  ],
})

export const metadata: Metadata = {
  title: 'Combat Hub — Previsão e análise de lutas de MMA',
  description:
    'Monte qualquer confronto do UFC, compare o estilo dos atletas e descubra quem leva a melhor — e por quê.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#100f0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${body.variable} ${display.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
