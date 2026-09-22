"use client";

import React, { useState } from 'react';
import { fetchPrediction } from '@/services/apiClient';
import type { PredictRequest, PredictResponse } from '@/types';
import { User } from 'lucide-react';

// Tradutor de variáveis técnicas para o público
const factorTranslator: Record<string, string> = {
  'delta_age': 'Juventude (Idade)',
  'delta_reach': 'Alcance e Envergadura',
  'delta_roll_td_atmp': 'Iniciativa de Quedas (Grappling)',
  'delta_roll_kd': 'Poder de Nocaute (Knockdowns)',
  'delta_elo': 'Momento na Carreira (Rankings)',
  'delta_win_rate': 'Consistência de Vitórias',
  'delta_finish_rate': 'Letalidade (Taxa de Finalização)',
  'delta_roll_sig_landed': 'Volume de Golpes Conectados',
  'delta_roll_ctrl_seconds': 'Domínio de Chão (Controle)',
};

function formatFactor(rawFactor: string) {
  // rawFactor ex: "Lutador A tem vantagem em delta_reach"
  // Vamos deixar mais editorial e limpo.
  let translated = rawFactor;
  Object.keys(factorTranslator).forEach(key => {
    translated = translated.replace(key, factorTranslator[key]);
  });
  
  if (translated.includes("Lutador A")) {
    return { side: 'A', text: translated.replace("Lutador A tem vantagem em", "").trim() };
  } else if (translated.includes("Lutador B")) {
    return { side: 'B', text: translated.replace("Lutador B tem vantagem em", "").trim() };
  }
  return { side: 'N', text: translated };
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictResponse | null>(null);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const payload: PredictRequest = {
        features: {
          delta_elo: 0.142,
          delta_days_inactive: -15,
          delta_streak: 2,
          delta_win_rate: 0.2,
          delta_finish_rate: 0.1,
          delta_experience: 5,
          delta_height: 0,
          delta_reach: -7,
          delta_age: -3,
          r_age_over35: 0,
          b_age_over35: 0,
          stance_matchup: 0,
          delta_roll_sig_landed: 1.2,
          delta_roll_sig_atmp: 3.4,
          delta_roll_kd: 0.1,
          delta_roll_td_success: -0.5,
          delta_roll_td_atmp: -1.0,
          delta_roll_sub_att: 0,
          delta_roll_ctrl_seconds: -30,
          delta_roll_sig_str_landed_head: 0.8,
          delta_roll_sig_str_landed_body: 0.3,
          delta_roll_sig_str_landed_leg: 0.1,
          delta_roll_sig_str_landed_distance: 1.0,
          delta_roll_sig_str_landed_clinch: 0.2,
          delta_roll_sig_str_landed_ground: 0,
          delta_roll_total_str_landed: 2.0
        }
      };
      // Simula fatores se a API não os retornar perfeitamente para testes de UI
      const data = await fetchPrediction(payload);
      setResult(data);
    } catch (err) {
      console.error(err);
      // Fallback para exibir UI em caso de erro local
      setResult({
        fighter_a_win_probability: 0.65,
        fighter_b_win_probability: 0.35,
        key_factors: [
          "Lutador A tem vantagem em delta_age",
          "Lutador B tem vantagem em delta_reach",
          "Lutador B tem vantagem em delta_roll_td_atmp",
          "Lutador A tem vantagem em delta_roll_kd"
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* SECTION HEADER */}
      <div className="mb-12 border-b-2 border-mma-lead pb-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl text-mma-bone uppercase tracking-wide">
          Previsão <span className="text-mma-blood">Principal</span>
        </h1>
        <p className="font-body text-mma-steel uppercase tracking-widest text-sm font-bold mt-2">
          Análise Algorítmica Oficial
        </p>
      </div>

      {/* MATCHUP CARD (BRUTALIST) */}
      <div className="bg-mma-black mb-16">
        
        {/* FIGHTER TOP BARS */}
        <div className="flex justify-between items-center mb-8 border-b-2 border-mma-lead pb-4">
          <div className="font-display text-4xl text-mma-bone uppercase">JON JONES</div>
          <div className="font-body text-sm font-bold text-mma-steel uppercase tracking-widest">Peso Pesado</div>
          <div className="font-display text-4xl text-mma-bone uppercase">STIPE MIOCIC</div>
        </div>

        {/* 3 COLUMNS LAYOUT: FIGHTER A | STATS | FIGHTER B */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6 relative">
          
          {/* FIGHTER A */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-48 h-64 bg-mma-lead/30 flex items-center justify-center border-b-4 border-mma-blood">
              <User className="text-mma-steel w-24 h-24" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xl">🇺🇸</span>
              <span className="font-body text-sm font-bold uppercase tracking-widest text-mma-bone">EUA</span>
            </div>
          </div>

          {/* MIDDLE STATS */}
          <div className="flex-2 w-full md:w-auto flex flex-col justify-center space-y-6 px-4">
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-2xl text-mma-blood w-1/3 text-right pr-4">27-1-0</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Cartel</div>
              <div className="font-display text-2xl text-mma-blue w-1/3 text-left pl-4">20-4-0</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-2xl text-mma-blood w-1/3 text-right pr-4">193 cm</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Altura</div>
              <div className="font-display text-2xl text-mma-blue w-1/3 text-left pl-4">193 cm</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-2xl text-mma-blood w-1/3 text-right pr-4">214 cm</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Envergadura</div>
              <div className="font-display text-2xl text-mma-blue w-1/3 text-left pl-4">203 cm</div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="font-display text-2xl text-mma-blood w-1/3 text-right pr-4">112 kg</div>
              <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest w-1/3">Peso</div>
              <div className="font-display text-2xl text-mma-blue w-1/3 text-left pl-4">106 kg</div>
            </div>
          </div>

          {/* FIGHTER B */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-48 h-64 bg-mma-lead/30 flex items-center justify-center border-b-4 border-mma-blue">
              <User className="text-mma-steel w-24 h-24" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xl">🇺🇸</span>
              <span className="font-body text-sm font-bold uppercase tracking-widest text-mma-bone">EUA</span>
            </div>
          </div>
        </div>

        {/* Prediction Execution Area */}
        <div className="mt-12 border-t-2 border-mma-lead pt-12">
          {!result ? (
            <div className="text-center">
              <button 
                onClick={handlePredict}
                disabled={loading}
                className="font-display text-2xl uppercase tracking-wider bg-mma-bone text-mma-black px-12 py-4 hover:bg-mma-blood hover:text-mma-bone transition-colors disabled:opacity-50"
              >
                {loading ? 'Calculando Matriz...' : 'Executar Predição de IA'}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              
              {/* PROBABILITY BAR */}
              <div className="w-full max-w-4xl mb-12">
                <div className="flex justify-between items-end mb-4">
                  <div className="font-display text-6xl text-mma-blood leading-none">
                    {(result.fighter_a_win_probability * 100).toFixed(0)}<span className="text-3xl">%</span>
                    <div className="font-body text-xs text-mma-bone uppercase tracking-widest mt-2">Favorito</div>
                  </div>
                  <div className="font-display text-6xl text-mma-blue leading-none text-right">
                    {(result.fighter_b_win_probability * 100).toFixed(0)}<span className="text-3xl">%</span>
                    <div className="font-body text-xs text-mma-bone uppercase tracking-widest mt-2">Azarão</div>
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
                    const parsed = formatFactor(factor);
                    return (
                      <div key={i} className="flex justify-between items-center p-4 border border-mma-lead bg-mma-black">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 ${parsed.side === 'A' ? 'bg-mma-blood' : 'bg-mma-blue'}`}></div>
                          <div className="text-sm font-bold text-mma-bone uppercase tracking-wider">
                            Vantagem em {parsed.text}
                          </div>
                        </div>
                        <div className={`text-xs font-bold uppercase tracking-widest ${parsed.side === 'A' ? 'text-mma-blood' : 'text-mma-blue'}`}>
                          {parsed.side === 'A' ? 'JONES' : 'MIOCIC'}
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
