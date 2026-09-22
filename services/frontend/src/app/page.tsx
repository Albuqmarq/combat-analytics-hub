"use client";

import React, { useState } from 'react';
import { fetchPrediction } from '@/services/apiClient';
import type { PredictRequest, PredictResponse } from '@/types';
import { User, ChevronDown } from 'lucide-react';
import { fightersDB, FighterBase } from '@/data/fighters';

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
  'stance_matchup': 'Confronto de Bases (Stance)'
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

  // Pega a ultima palavra que sempre é a variável (ex: delta_age)
  const parts = rawFactor.split(' ');
  const featureKey = parts[parts.length - 1];
  
  // Traduz a variavel ou deixa ela mesma
  const text = factorTranslator[featureKey.trim()] || featureKey.trim();

  return { side, text, name };
}

// Formata a sequencia atual: positivo = vitorias, negativo = derrotas.
function fmtStreak(streak: number): string {
  if (streak > 0) return `${streak}V`;
  if (streak < 0) return `${Math.abs(streak)}D`;
  return '—';
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPoundForPound, setIsPoundForPound] = useState(false);

  // Lutadores selecionados (base ordenada por Elo; [0] e [1] sao os dois mais bem ranqueados)
  const [fighterA, setFighterA] = useState<FighterBase>(fightersDB[0]);
  const [fighterB, setFighterB] = useState<FighterBase>(fightersDB[1]);

  const handlePredict = async () => {
    setLoading(true);
    // Zera o resultado e o erro anteriores
    setResult(null);
    setError(null);
    try {
      // Se modo P4P estiver ativo, zeramos as discrepancias fisicas cruas
      const delta_height = isPoundForPound ? 0 : fighterA.heightCm - fighterB.heightCm;
      const delta_reach = isPoundForPound ? 0 : fighterA.reachCm - fighterB.reachCm;

      // Mesma codificacao de stance usada no treino (feature_engineering.STANCE_ENCODE).
      const stanceEnc: Record<string, number> = { Orthodox: 0, Southpaw: 1, Switch: 2 };
      const encA = stanceEnc[fighterA.stance] ?? -1;
      const encB = stanceEnc[fighterB.stance] ?? -1;

      // Todas as features abaixo sao derivadas dos dados reais de cada lutador
      // (mesma escala do treino). As granularidades de golpe por regiao que nao
      // temos por atleta ficam em 0 (delta neutro) em vez de constantes ficticias.
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
      
      const data = await fetchPrediction(payload);
      setResult(data);
    } catch (err) {
      // Nao forjamos um resultado falso: comunicamos a falha de forma honesta.
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

      {/* MATCHUP CARD (BRUTALIST) */}
      <div className="bg-mma-black mb-16">
        
        {/* POUND FOR POUND TOGGLE */}
        <div className="flex flex-col md:flex-row justify-center mb-8 gap-4 px-4">
          <button 
            onClick={() => {setIsPoundForPound(false); setResult(null);}} 
            className={`px-8 py-4 font-display text-2xl tracking-wider uppercase border-2 transition-colors ${!isPoundForPound ? 'bg-mma-blood text-mma-bone border-mma-blood' : 'bg-transparent text-mma-steel border-mma-lead hover:text-mma-bone hover:border-mma-bone'}`}
          >
            Absoluto (Física + Técnica)
          </button>
          <button 
            onClick={() => {setIsPoundForPound(true); setResult(null);}} 
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
              value={fighterA.id}
              onChange={(e) => {
                const f = fightersDB.find(x => x.id === e.target.value);
                if (f) { setFighterA(f); setResult(null); setError(null); }
              }}
              className="w-full appearance-none bg-mma-lead/30 border-2 border-mma-blood text-mma-bone font-display text-3xl p-4 uppercase outline-none focus-visible:ring-2 focus-visible:ring-mma-bone focus-visible:ring-offset-2 focus-visible:ring-offset-mma-black focus:bg-mma-lead/50 cursor-pointer"
            >
              {fightersDB.map(f => (
                <option key={f.id} value={f.id} disabled={f.id === fighterB.id}>{f.name} ({f.category})</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-mma-blood pointer-events-none" />
          </div>

          <div className="font-body text-xl font-bold text-mma-steel uppercase tracking-widest text-center w-full md:w-2/12">VS</div>

          <div className="w-full md:w-5/12 relative group">
            <select
              aria-label="Selecionar lutador do canto azul (Lutador B)"
              value={fighterB.id}
              onChange={(e) => {
                const f = fightersDB.find(x => x.id === e.target.value);
                if (f) { setFighterB(f); setResult(null); setError(null); }
              }}
              className="w-full appearance-none bg-mma-lead/30 border-2 border-mma-blue text-mma-bone font-display text-3xl p-4 uppercase outline-none focus-visible:ring-2 focus-visible:ring-mma-bone focus-visible:ring-offset-2 focus-visible:ring-offset-mma-black focus:bg-mma-lead/50 cursor-pointer text-right"
            >
              {fightersDB.map(f => (
                <option key={f.id} value={f.id} disabled={f.id === fighterA.id}>{f.name} ({f.category})</option>
              ))}
            </select>
            <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-mma-blue pointer-events-none" />
          </div>

        </div>

        {/* 3 COLUMNS LAYOUT: FIGHTER A | STATS | FIGHTER B */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6 relative">
          
          {/* FIGHTER A */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-48 h-64 bg-mma-lead/30 flex items-center justify-center border-b-4 border-mma-blood relative overflow-hidden">
              <User className="text-mma-steel w-24 h-24" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xl">{fighterA.flag}</span>
              <span className="font-body text-sm font-bold uppercase tracking-widest text-mma-bone">{fighterA.country}</span>
            </div>
          </div>

          {/* MIDDLE STATS */}
          <div className="flex-2 w-full md:w-auto flex flex-col justify-center space-y-6 px-4 py-8 md:py-0 border-y-2 md:border-y-0 border-mma-lead">
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-3xl text-mma-blood w-1/3 text-right pr-4">{fighterA.record}</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Cartel</div>
              <div className="font-display text-3xl text-mma-blue w-1/3 text-left pl-4">{fighterB.record}</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-3xl text-mma-blood w-1/3 text-right pr-4">{fighterA.heightCm} cm</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Altura</div>
              <div className="font-display text-3xl text-mma-blue w-1/3 text-left pl-4">{fighterB.heightCm} cm</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-3xl text-mma-blood w-1/3 text-right pr-4">{fighterA.reachCm} cm</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Envergadura</div>
              <div className="font-display text-3xl text-mma-blue w-1/3 text-left pl-4">{fighterB.reachCm} cm</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-3xl text-mma-blood w-1/3 text-right pr-4">{fighterA.weightKg} kg</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Peso</div>
              <div className="font-display text-3xl text-mma-blue w-1/3 text-left pl-4">{fighterB.weightKg} kg</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-3xl text-mma-blood w-1/3 text-right pr-4">{fighterA.elo}</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Rating Elo</div>
              <div className="font-display text-3xl text-mma-blue w-1/3 text-left pl-4">{fighterB.elo}</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-3xl text-mma-blood w-1/3 text-right pr-4">{fighterA.age}</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Idade</div>
              <div className="font-display text-3xl text-mma-blue w-1/3 text-left pl-4">{fighterB.age}</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-3xl text-mma-blood w-1/3 text-right pr-4">{fmtStreak(fighterA.streak)}</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Sequência</div>
              <div className="font-display text-3xl text-mma-blue w-1/3 text-left pl-4">{fmtStreak(fighterB.streak)}</div>
            </div>
          </div>

          {/* FIGHTER B */}
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

        {/* Prediction Execution Area */}
        <div className="mt-12 border-t-2 border-mma-lead pt-12" aria-busy={loading}>
          {error && (
            <div
              role="alert"
              className="max-w-4xl mx-auto mb-8 border-2 border-mma-blood bg-mma-blood/10 text-mma-bone p-4 font-body text-sm font-bold uppercase tracking-widest text-center"
            >
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
                {/* Hard Line Bar */}
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

      </div>
    </div>
  );
}
