const steps = [
  {
    round: 'Round 1',
    title: 'O histórico',
    text: 'Reunimos as lutas do UFC, luta por luta: quem venceu, como venceu e o que cada atleta fez dentro do cage.',
  },
  {
    round: 'Round 2',
    title: 'A leitura',
    text: 'Olhamos para o que pesa de verdade: fase da carreira, idade, sequência de vitórias, alcance e estilo de jogo.',
  },
  {
    round: 'Round 3',
    title: 'O palpite',
    text: 'Você escolhe os dois lados e recebe a chance de vitória de cada um, sem enrolação.',
  },
  {
    round: 'Round 4',
    title: 'O porquê',
    text: 'Mostramos os fatores que decidiram a balança, em português claro — do jeito que se discute luta entre amigos.',
  },
]

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="border-y border-border/70 bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 id="how-title" className="font-display text-4xl font-bold uppercase leading-none md:text-5xl">
            Como funciona
          </h2>
          <p className="max-w-md text-muted-foreground">
            Quatro rounds, do histórico de lutas até a explicação de quem leva a melhor.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.round} className="flex flex-col bg-card p-6 md:p-7">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {step.round}
              </span>
              <span
                aria-hidden="true"
                className={`mt-4 h-1 w-8 ${i === steps.length - 1 ? 'bg-blue-corner' : 'bg-red-corner'}`}
              />
              <h3 className="mt-4 font-display text-2xl font-bold uppercase">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
