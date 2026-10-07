export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="mb-10 border-b border-border pb-8">
      <p className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        <span aria-hidden="true" className="h-px w-8 bg-red-corner" />
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-none md:text-7xl">{title}</h1>
      <p className="mt-4 max-w-xl text-muted-foreground text-pretty">{description}</p>
    </header>
  )
}
