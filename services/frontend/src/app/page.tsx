import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { FinalCta } from '@/components/landing/final-cta'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <FinalCta />
    </main>
  )
}
