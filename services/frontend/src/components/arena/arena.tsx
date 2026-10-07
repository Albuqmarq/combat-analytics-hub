'use client'

import { useEffect, useState } from 'react'
import { listFighters, getFighter, type Fighter, type FighterLight } from '@/lib/fighters'
import { predictFight, type Prediction, type PredictionMode } from '@/lib/predict'
import { StyleRadar } from '@/components/style-radar'
import { FighterSelect } from './fighter-select'
import { ModeToggle } from './mode-toggle'
import { TaleOfTheTape } from './tale-of-the-tape'
import { PredictionResult } from './prediction-result'

export function Arena({ initialRedId, initialBlueId }: { initialRedId: string; initialBlueId: string }) {
  const [mode, setMode] = useState<PredictionMode>('absoluto')
  const [list, setList] = useState<FighterLight[]>([])
  const [redId, setRedId] = useState(initialRedId)
  const [blueId, setBlueId] = useState(initialBlueId)
  const [red, setRed] = useState<Fighter | null>(null)
  const [blue, setBlue] = useState<Fighter | null>(null)
  const [prediction, setPrediction] = useState<Prediction | null>(null)
  const [predicting, setPredicting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Lista leve para os seletores (300 de maior Elo).
  useEffect(() => {
    listFighters('', 300)
      .then((items) => {
        setList(items)
        if (items.length && !items.some((f) => f.id === initialRedId)) setRedId(items[0].id)
        if (items.length && !items.some((f) => f.id === initialBlueId)) {
          setBlueId(items.find((f) => f.id !== initialRedId)?.id ?? items[0].id)
        }
      })
      .catch(() => setError('Não foi possível carregar os atletas.'))
  }, [initialRedId, initialBlueId])

  // Perfis completos dos dois cantos (buscados sob demanda).
  useEffect(() => {
    getFighter(redId).then(setRed).catch(() => setError('Não foi possível carregar o atleta.'))
    setPrediction(null)
  }, [redId])
  useEffect(() => {
    getFighter(blueId).then(setBlue).catch(() => setError('Não foi possível carregar o atleta.'))
    setPrediction(null)
  }, [blueId])

  function pickRed(id: string) { setError(null); setRedId(id) }
  function pickBlue(id: string) { setError(null); setBlueId(id) }
  function changeMode(m: PredictionMode) { setMode(m); setPrediction(null) }

  async function runPrediction() {
    setPredicting(true)
    setError(null)
    try {
      setPrediction(await predictFight(redId, blueId, mode))
    } catch {
      setError('Não foi possível calcular o veredito. Tente novamente.')
    } finally {
      setPredicting(false)
    }
  }

  const ready = red && blue

  return (
    <div className="flex flex-col gap-10">
      <ModeToggle mode={mode} onChange={changeMode} />

      <div className="grid items-end gap-4 md:grid-cols-[1fr_auto_1fr]">
        <FighterSelect
          id="red-fighter"
          label="Corner vermelho"
          corner="red"
          value={redId}
          excludeId={blueId}
          fighters={list}
          onChange={pickRed}
        />
        <span
          aria-hidden="true"
          className="hidden pb-3 font-display text-2xl font-bold uppercase text-muted-foreground md:block"
        >
          vs
        </span>
        <FighterSelect
          id="blue-fighter"
          label="Corner azul"
          corner="blue"
          value={blueId}
          excludeId={redId}
          fighters={list}
          onChange={pickBlue}
        />
      </div>

      {error && (
        <p role="alert" className="rounded-md border border-destructive/60 bg-destructive/10 px-4 py-3 text-sm text-foreground">
          {error}
        </p>
      )}

      {!ready ? (
        <div className="rounded-md border border-border bg-card p-10 text-center text-sm text-muted-foreground" aria-busy="true">
          Carregando atletas…
        </div>
      ) : (
        <>
          <TaleOfTheTape red={red} blue={blue} mode={mode} />

          <section aria-labelledby="style-compare-title" className="rounded-md border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <h2 id="style-compare-title" className="font-display text-2xl font-bold uppercase md:text-3xl">
                Choque de estilos
              </h2>
              <ul className="flex gap-5 text-sm">
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-2.5 rounded-sm bg-red-corner" />
                  {red.name}
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-2.5 rounded-sm bg-blue-corner" />
                  {blue.name}
                </li>
              </ul>
            </div>
            <StyleRadar
              className="mt-4"
              series={[
                { name: red.name, style: red.style, color: 'var(--red-corner)' },
                { name: blue.name, style: blue.style, color: 'var(--blue-corner)' },
              ]}
            />
          </section>

          {prediction ? (
            <PredictionResult red={red} blue={blue} prediction={prediction} onReset={() => setPrediction(null)} />
          ) : (
            <div className="flex flex-col items-center gap-3 border-t border-border pt-10 text-center">
              <button
                type="button"
                onClick={runPrediction}
                disabled={predicting}
                className="rounded-md bg-foreground px-8 py-4 font-display text-xl font-bold uppercase tracking-wide text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {predicting ? 'Calculando…' : 'Ver o veredito'}
              </button>
              <p className="text-sm text-muted-foreground">
                {red.name.split(' ').at(-1)} ou {blue.name.split(' ').at(-1)}? A balança está a um clique.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
