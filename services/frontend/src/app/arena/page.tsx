"use client";

import React, { useState, useEffect } from 'react';
import { fetchPrediction, fetchFighters, fetchFighter } from '@/services/apiClient';
import type { PredictRequest, PredictResponse, FighterLight, FighterBase } from '@/types';
import { User, ChevronDown } from 'lucide-react';
import { RadarChart } from '@/components/RadarChart';

// Tradutor de variáveis técnicas para o público
const factorTranslator: Record<string, string> = {
  'delta_age': 'Juventude (Menor Idade)',
  'r_age_over35': 'Fator Idade Crítica (Risco acima de 35 anos)',
  'b_age_over35': 'Fator Idade Crítica (Risco acima de 35 anos)',
  'delta_reach': 'Alcance e Envergadura',
  'delta_roll_td_atmp': 'Iniciativa de Quedas (Grappling)',
  'delta_roll_kd': 'Poder de Nocaute (Knockdowns)',
  'delta_elo': 'Momento na Carreira (Ranking Elo)',
  'delta_win_rate': 'Consistência de Vitórias',
  'delta_finish_rate': 'Letalidade (Taxa de Finalização)',
  'delta_roll_sig_landed': 'Volume de Golpes Conectados',
  'delta_roll_total_str_landed': 'Volume Total de Golpes',
  'delta_roll_ctrl_seconds': 'Domínio de Chão (Controle)',
  'delta_days_inactive': 'Tempo de Atividade (Menos Ferrugem)',
  'delta_experience': 'Experiência no Octógono',
  'delta_streak': 'Embalo Atual (Sequência de Vitórias)',
  'delta_roll_td_success': 'Quedas Concretizadas (Grappling)',
  'delta_roll_sub_att': 'Ameaça de Finalização',
  'delta_height': 'Estatura',
  'stance_matchup': 'Confronto de Bases (Stance)',
  'delta_roll_sig_atmp': 'Volume de Ataque',
  'delta_roll_sig_str_landed_head': 'Precisão na Cabeça',
  'delta_roll_sig_str_landed_body': 'Golpes no Corpo',
  'delta_roll_sig_str_landed_leg': 'Chutes na Perna (Low Kicks)',
  'delta_roll_sig_str_landed_distance': 'Trocação à Distância',
  'delta_roll_sig_str_landed_clinch': 'Domínio no Clinch',
  'delta_roll_sig_str_landed_ground': 'Ground and Pound'
};

function formatFactor(rawFactor: string, fA: string, fB: string) {
  // rawFactor vem do backend no formato: "(Lutador A) Vantagem em delta_age"
  let side = 'N';
  let name = '';

  if (rawFactor.includes("(Lutador A)")) {
    side = 'A';
    name = fA;
  } else if (rawFactor.includes("(Lutador B)")) {
    side = 'B';
    name = fB;
  }

  const parts = rawFactor.split(' ');
  const featureKey = parts[parts.length - 1];
  const text = factorTranslator[featureKey.trim()] || featureKey.trim();

  return { side, text, name };
}

// Formata a sequencia atual: positivo = vitorias, negativo = derrotas.
function fmtStreak(streak: number): string {
  if (streak > 0) return `${streak}V`;
  if (streak < 0) return `${Math.abs(streak)}D`;
  return '—';
}

// Mesma codificacao de stance usada no treino (feature_engineering.STANCE_ENCODE).
const STANCE_ENC: Record<string, number> = { Orthodox: 0, Southpaw: 1, Switch: 2 };

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPoundForPound, setIsPoundForPound] = useState(false);

  // Lista leve (seletores) + perfis completos dos dois selecionados (buscados sob demanda).
  const [list, setList] = useState<FighterLight[]>([]);
  const [fighterA, setFighterA] = useState<FighterBase | null>(null);
  const [fighterB, setFighterB] = useState<FighterBase | null>(null);

  // Carga inicial: os 300 atletas de maior Elo (o seletor nativo fica leve) + os
  // dois primeiros. O catalogo completo (todos os atletas, com busca) fica na aba Lutadores.
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFighters('', 300);
        setList(data.items);
        if (data.items[0]) setFighterA(await fetchFighter(data.items[0].id));
        if (data.items[1]) setFighterB(await fetchFighter(data.items[1].id));
      } catch {
        setError('Nao foi possivel carregar os atletas. Verifique se os servicos estao no ar.');
      }
    })();
  }, []);

  const selectFighter = async (id: string, side: 'A' | 'B') => {
    setResult(null);
    setError(null);
    try {
      const f = await fetchFighter(id);
      if (side === 'A') setFighterA(f); else setFighterB(f);
    } catch {
      setError('Nao foi possivel carregar o perfil do atleta.');
    }
  };

  const handlePredict = async () => {
    if (!fighterA || !fighterB) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const delta_height = isPoundForPound ? 0 : fighterA.heightCm - fighterB.heightCm;
      const delta_reach = isPoundForPound ? 0 : fighterA.reachCm - fighterB.reachCm;
      const encA = STANCE_ENC[fighterA.stance] ?? -1;
      const encB = STANCE_ENC[fighterB.stance] ?? -1;

      // Features derivadas dos dados reais de cada lutador (mesma escala do treino).
      const payload: PredictRequest = {
        features: {
          delta_elo: fighterA.elo - fighterB.elo,
          delta_days_inactive: fighterA.daysInactive - fighterB.daysInactive,
          delta_streak: fighterA.streak - fighterB.streak,
          delta_win_rate: fighterA.winRate - fighterB.winRate,
          delta_finish_rate: fighterA.finishRate - fighterB.finishRate,
          delta_experience: fighterA.numFights - fighterB.numFights,
          delta_height: delta_height,
          delta_reach: delta_reach,
          delta_age: fighterA.age - fighterB.age,
          r_age_over35: fighterA.age > 35 ? 1 : 0,
          b_age_over35: fighterB.age > 35 ? 1 : 0,
          stance_matchup: encA - encB,
          delta_roll_sig_landed: fighterA.strikingLanded - fighterB.strikingLanded,
          delta_roll_sig_atmp: 0,
          delta_roll_kd: fighterA.knockdownRate - fighterB.knockdownRate,
          delta_roll_td_success: fighterA.takedownSuccess - fighterB.takedownSuccess,
          delta_roll_td_atmp: fighterA.tdAtmp - fighterB.tdAtmp,
          delta_roll_sub_att: fighterA.subAtt - fighterB.subAtt,
          delta_roll_ctrl_seconds: fighterA.ctrlSeconds - fighterB.ctrlSeconds,
          delta_roll_sig_str_landed_head: 0,
          delta_roll_sig_str_landed_body: 0,
          delta_roll_sig_str_landed_leg: 0,
          delta_roll_sig_str_landed_distance: 0,
          delta_roll_sig_str_landed_clinch: 0,
          delta_roll_sig_str_landed_ground: 0,
          delta_roll_total_str_landed: fighterA.strikingLanded - fighterB.strikingLanded
        }
      };

      setResult(await fetchPrediction(payload));
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? `Nao foi possivel calcular a predicao: ${err.message}`
          : "Nao foi possivel calcular a predicao. Verifique se o servico esta no ar e tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const ready = fighterA && fighterB;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* SECTION HEADER */}
      <div className="mb-12 border-b-2 border-mma-lead pb-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl text-mma-bone uppercase tracking-wide">
          Arena de <span className="text-mma-blood">Simulação</span>
        </h1>
        <p className="font-body text-mma-steel uppercase tracking-widest text-sm font-bold mt-2">
          Selecione os atletas para análise preditiva
        </p>
      </div>

      <div className="bg-mma-black mb-16">

        {/* POUND FOR POUND TOGGLE */}
        <div className="flex flex-col md:flex-row justify-center mb-8 gap-4 px-4">
          <button
            onClick={() => { setIsPoundForPound(false); setResult(null); }}
            className={`px-8 py-4 font-display text-2xl tracking-wider uppercase border-2 transition-colors ${!isPoundForPound ? 'bg-mma-blood text-mma-bone border-mma-blood' : 'bg-transparent text-mma-steel border-mma-lead hover:text-mma-bone hover:border-mma-bone'}`}
          >
            Absoluto (Física + Técnica)
          </button>
          <button
            onClick={() => { setIsPoundForPound(true); setResult(null); }}
            className={`px-8 py-4 font-display text-2xl tracking-wider uppercase border-2 transition-colors ${isPoundForPound ? 'bg-mma-blue text-mma-bone border-mma-blue' : 'bg-transparent text-mma-steel border-mma-lead hover:text-mma-bone hover:border-mma-bone'}`}
          >
            Pound for Pound (Só Técnica)
          </button>
        </div>
        <div className="text-center font-body text-xs text-mma-steel uppercase tracking-widest mb-12">
          {isPoundForPound ? 'As diferenças de alcance e altura foram equalizadas no algoritmo.' : 'A envergadura e altura originais serão usadas no cálculo matemático.'}
        </div>

        {/* DROPDOWNS DE SELEÇÃO */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b-2 border-mma-lead pb-8 gap-4">

          <div className="w-full md:w-5/12 relative group">
            <select
              aria-label="Selecionar lutador do canto vermelho (Lutador A)"
              value={fighterA?.id ?? ''}
              onChange={(e) => selectFighter(e.target.value, 'A')}
              className="w-full appearance-none bg-mma-lead/30 border-2 border-mma-blood text-mma-bone font-display text-3xl p-4 uppercase outline-none focus-visible:ring-2 focus-visible:ring-mma-bone focus-visible:ring-offset-2 focus-visible:ring-offset-mma-black focus:bg-mma-lead/50 cursor-pointer"
            >
              {list.map(f => (
                <option key={f.id} value={f.id} disabled={f.id === fighterB?.id}>{f.name} ({f.category})</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-mma-blood pointer-events-none" />
          </div>

          <div className="font-body text-xl font-bold text-mma-steel uppercase tracking-widest text-center w-full md:w-2/12">VS</div>

          <div className="w-full md:w-5/12 relative group">
            <select
              aria-label="Selecionar lutador do canto azul (Lutador B)"
              value={fighterB?.id ?? ''}
              onChange={(e) => selectFighter(e.target.value, 'B')}
              className="w-full appearance-none bg-mma-lead/30 border-2 border-mma-blue text-mma-bone font-display text-3xl p-4 uppercase outline-none focus-visible:ring-2 focus-visible:ring-mma-bone focus-visible:ring-offset-2 focus-visible:ring-offset-mma-black focus:bg-mma-lead/50 cursor-pointer text-right"
            >
              {list.map(f => (
                <option key={f.id} value={f.id} disabled={f.id === fighterA?.id}>{f.name} ({f.category})</option>
              ))}
            </select>
            <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-mma-blue pointer-events-none" />
          </div>

        </div>

        {!ready ? (
          <div className="text-center font-body text-mma-steel uppercase tracking-widest text-sm py-16" aria-busy="true">
            {error ?? 'Carregando atletas…'}
          </div>
        ) : (
          <>
            {/* 3 COLUMNS LAYOUT: FIGHTER A | STATS | FIGHTER B */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6 relative">

              <div className="flex-1 flex flex-col items-center">
                <div className="w-48 h-64 bg-mma-lead/30 flex items-center justify-center border-b-4 border-mma-blood relative overflow-hidden">
                  <User className="text-mma-steel w-24 h-24" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xl">{fighterA.flag}</span>
                  <span className="font-body text-sm font-bold uppercase tracking-widest text-mma-bone">{fighterA.country}</span>
                </div>
              </div>

              <div className="flex-2 w-full md:w-auto flex flex-col justify-center space-y-6 px-4 py-8 md:py-0 border-y-2 md:border-y-0 border-mma-lead">
                {([
                  [fighterA.record, 'Cartel', fighterB.record],
                  [`${fighterA.heightCm} cm`, 'Altura', `${fighterB.heightCm} cm`],
                  [`${fighterA.reachCm} cm`, 'Envergadura', `${fighterB.reachCm} cm`],
                  [`${fighterA.weightKg} kg`, 'Peso', `${fighterB.weightKg} kg`],
                  [String(fighterA.elo), 'Rating Elo', String(fighterB.elo)],
                  [String(fighterA.age), 'Idade', String(fighterB.age)],
                  [fmtStreak(fighterA.streak), 'Sequência', fmtStreak(fighterB.streak)],
                ] as [string, string, string][]).map(([a, label, b]) => (
                  <div key={label} className="flex justify-between items-center text-center">
                    <div className="font-display text-3xl text-mma-blood w-1/3 text-right pr-4">{a}</div>
                    <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">{label}</div>
                    <div className="font-display text-3xl text-mma-blue w-1/3 text-left pl-4">{b}</div>
                  </div>
                ))}
              </div>

              <div className="flex-1 flex flex-col items-center">
                <div className="w-48 h-64 bg-mma-lead/30 flex items-center justify-center border-b-4 border-mma-blue relative overflow-hidden">
                  <User className="text-mma-steel w-24 h-24" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xl">{fighterB.flag}</span>
                  <span className="font-body text-sm font-bold uppercase tracking-widest text-mma-bone">{fighterB.country}</span>
                </div>
              </div>
            </div>

            {/* COMPARATIVO DE ESTILO (HEXAGONO) */}
            <div className="mt-12 border-t-2 border-mma-lead pt-12">
              <h3 className="font-display text-3xl uppercase text-mma-bone text-center mb-2">Comparativo de Estilo</h3>
              <div className="flex justify-center gap-8 mb-4 font-body text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><span className="w-3 h-3 bg-mma-blood inline-block"></span>{fighterA.name}</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 bg-mma-blue inline-block"></span>{fighterB.name}</span>
              </div>
              <div className="max-w-2xl mx-auto">
                <RadarChart
                  mode="compare"
                  data={fighterA.radar.map((ax, i) => ({
                    subject: ax.subject,
                    A: ax.A,
                    B: fighterB.radar[i]?.A ?? 0,
                    fullMark: 150,
                  }))}
                />
              </div>
            </div>

            {/* Prediction Execution Area */}
            <div className="mt-12 border-t-2 border-mma-lead pt-12" aria-busy={loading}>
              {error && (
                <div role="alert" className="max-w-4xl mx-auto mb-8 border-2 border-mma-blood bg-mma-blood/10 text-mma-bone p-4 font-body text-sm font-bold uppercase tracking-widest text-center">
                  {error}
                </div>
              )}
              {!result ? (
                <div className="text-center">
                  <button
                    onClick={handlePredict}
                    disabled={loading}
                    aria-label="Executar predição de IA para o confronto selecionado"
                    className="font-display text-2xl uppercase tracking-wider bg-mma-bone text-mma-black px-12 py-4 hover:bg-mma-blood hover:text-mma-bone transition-colors outline-none focus-visible:ring-2 focus-visible:ring-mma-bone focus-visible:ring-offset-2 focus-visible:ring-offset-mma-black disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
                  >
                    {loading && (
                      <span className="w-4 h-4 border-2 border-mma-black/40 border-t-mma-black rounded-full animate-spin motion-reduce:animate-none" aria-hidden="true"></span>
                    )}
                    {loading ? 'Processando…' : 'Executar Predição de IA'}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">

                  {/* PROBABILITY BAR */}
                  <div className="w-full max-w-4xl mb-12">
                    <div className="flex justify-between items-end mb-4">
                      <div className="font-display text-6xl text-mma-blood leading-none">
                        {(result.fighter_a_win_probability * 100).toFixed(0)}<span className="text-3xl">%</span>
                        <div className="font-body text-xs text-mma-bone uppercase tracking-widest mt-2">{fighterA.name.split(' ')[1] || fighterA.name}</div>
                      </div>
                      <div className="font-display text-6xl text-mma-blue leading-none text-right">
                        {(result.fighter_b_win_probability * 100).toFixed(0)}<span className="text-3xl">%</span>
                        <div className="font-body text-xs text-mma-bone uppercase tracking-widest mt-2">{fighterB.name.split(' ')[1] || fighterB.name}</div>
                      </div>
                    </div>
                    <div className="h-6 w-full flex">
                      <div className="bg-mma-blood h-full transition-all duration-1000 ease-out" style={{ width: `${result.fighter_a_win_probability * 100}%` }}></div>
                      <div className="bg-mma-blue h-full transition-all duration-1000 ease-out" style={{ width: `${result.fighter_b_win_probability * 100}%` }}></div>
                    </div>
                  </div>

                  {/* XAI AUDIT - LEIGO FRIENDLY */}
                  <div className="w-full max-w-4xl border-2 border-mma-lead p-8 bg-mma-lead/10">
                    <h3 className="font-display text-3xl uppercase border-b-2 border-mma-lead pb-4 mb-6 text-mma-bone">Vantagens Analisadas</h3>
                    <div className="space-y-4 font-body">
                      {result.key_factors.map((factor, i) => {
                        const parsed = formatFactor(factor, fighterA.name, fighterB.name);
                        return (
                          <div key={i} className="flex justify-between items-center p-4 border border-mma-lead bg-mma-black">
                            <div className="flex items-center gap-4">
                              <div className={`w-3 h-3 ${parsed.side === 'A' ? 'bg-mma-blood' : 'bg-mma-blue'}`}></div>
                              <div className="text-sm font-bold text-mma-bone uppercase tracking-wider">
                                Vantagem em {parsed.text}
                              </div>
                            </div>
                            <div className={`text-xs font-bold uppercase tracking-widest ${parsed.side === 'A' ? 'text-mma-blood' : 'text-mma-blue'}`}>
                              {parsed.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
