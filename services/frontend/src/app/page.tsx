"use client";

import React, { useState } from 'react';
import { fetchPrediction } from '@/services/apiClient';
import type { PredictRequest, PredictResponse } from '@/types';

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
      const data = await fetchPrediction(payload);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* SECTION HEADER */}
      <div className="mb-12 border-b-2 border-mma-lead pb-4">
        <h1 className="font-display text-5xl md:text-7xl text-mma-bone uppercase tracking-wide">
          Previsão <span className="text-mma-blood">Principal</span>
        </h1>
        <p className="font-body text-mma-steel uppercase tracking-widest text-sm font-bold mt-2">
          Análise Algorítmica Oficial
        </p>
      </div>

      {/* MATCHUP CARD (BRUTALIST) */}
      <div className="border-2 border-mma-lead bg-mma-black relative mb-16">
        {/* Top bar */}
        <div className="flex border-b-2 border-mma-lead">
          <div className="flex-1 p-4 border-r-2 border-mma-lead bg-mma-black">
            <div className="font-body text-xs font-bold text-mma-blood uppercase tracking-widest">Lutador A (Vermelho)</div>
          </div>
          <div className="flex-1 p-4 bg-mma-black text-right">
            <div className="font-body text-xs font-bold text-mma-gold uppercase tracking-widest">Lutador B (Azul)</div>
          </div>
        </div>

        {/* Fighters Names */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-8 md:p-12 text-center md:text-left border-b-2 md:border-b-0 md:border-r-2 border-mma-lead">
            <h2 className="font-display text-5xl md:text-7xl text-mma-bone uppercase leading-none">
              JON <br /> <span className="text-mma-blood">JONES</span>
            </h2>
            <div className="mt-4 font-body text-mma-steel uppercase font-bold text-sm tracking-widest">
              Campeão Peso Pesado
            </div>
          </div>
          
          {/* VS Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-mma-black border-2 border-mma-lead px-4 py-2 hidden md:block">
            <span className="font-display text-2xl text-mma-steel">VS</span>
          </div>

          <div className="flex-1 p-8 md:p-12 text-center md:text-right">
            <h2 className="font-display text-5xl md:text-7xl text-mma-bone uppercase leading-none">
              STIPE <br /> <span className="text-mma-gold">MIOCIC</span>
            </h2>
            <div className="mt-4 font-body text-mma-steel uppercase font-bold text-sm tracking-widest">
              Desafiante #8
            </div>
          </div>
        </div>

        {/* Prediction Bar */}
        {result && (
          <div className="border-t-2 border-mma-lead bg-mma-lead/30 p-8">
            <div className="flex justify-between items-end mb-4">
              <div className="font-display text-6xl text-mma-blood leading-none">
                {(result.fighter_a_win_probability * 100).toFixed(0)}<span className="text-3xl">%</span>
                <div className="font-body text-xs text-mma-bone uppercase tracking-widest mt-2">Favorito</div>
              </div>
              <div className="font-display text-6xl text-mma-gold leading-none text-right">
                {(result.fighter_b_win_probability * 100).toFixed(0)}<span className="text-3xl">%</span>
                <div className="font-body text-xs text-mma-bone uppercase tracking-widest mt-2">Azarão</div>
              </div>
            </div>
            {/* Hard Line Bar */}
            <div className="h-4 w-full flex">
              <div className="bg-mma-blood h-full" style={{ width: `${result.fighter_a_win_probability * 100}%` }}></div>
              <div className="bg-mma-gold h-full" style={{ width: `${result.fighter_b_win_probability * 100}%` }}></div>
            </div>
          </div>
        )}

        {/* Action Button */}
        {!result && (
          <div className="border-t-2 border-mma-lead p-8 text-center">
            <button 
              onClick={handlePredict}
              disabled={loading}
              className="font-display text-2xl uppercase tracking-wider bg-mma-bone text-mma-black px-12 py-4 hover:bg-mma-blood hover:text-mma-bone transition-colors disabled:opacity-50"
            >
              {loading ? 'Calculando Matriz...' : 'Executar Predição'}
            </button>
          </div>
        )}
      </div>

      {/* TALE OF THE TAPE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="border-2 border-mma-lead p-8">
          <h3 className="font-display text-3xl uppercase border-b-2 border-mma-lead pb-4 mb-6">Tale of the Tape</h3>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center text-center relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-mma-lead -z-10"></div>
              <div className="font-display text-3xl bg-mma-black pr-4">193<span className="text-lg text-mma-steel">cm</span></div>
              <div className="font-body text-xs font-bold text-mma-bone bg-mma-black px-4 uppercase tracking-widest">Altura</div>
              <div className="font-display text-3xl bg-mma-black pl-4">193<span className="text-lg text-mma-steel">cm</span></div>
            </div>
            
            <div className="flex justify-between items-center text-center relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-mma-lead -z-10"></div>
              <div className="font-display text-3xl text-mma-blood bg-mma-black pr-4">214<span className="text-lg text-mma-steel">cm</span></div>
              <div className="font-body text-xs font-bold text-mma-bone bg-mma-black px-4 uppercase tracking-widest">Envergadura</div>
              <div className="font-display text-3xl bg-mma-black pl-4">203<span className="text-lg text-mma-steel">cm</span></div>
            </div>

            <div className="flex justify-between items-center text-center relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-mma-lead -z-10"></div>
              <div className="font-display text-3xl bg-mma-black pr-4">112<span className="text-lg text-mma-steel">kg</span></div>
              <div className="font-body text-xs font-bold text-mma-bone bg-mma-black px-4 uppercase tracking-widest">Peso</div>
              <div className="font-display text-3xl bg-mma-black pl-4">106<span className="text-lg text-mma-steel">kg</span></div>
            </div>
          </div>
        </div>

        {/* XAI AUDIT */}
        <div className="border-2 border-mma-lead p-8 bg-mma-lead/10">
          <h3 className="font-display text-3xl uppercase border-b-2 border-mma-lead pb-4 mb-6 text-mma-bone">Motivadores Matemáticos</h3>
          {result ? (
            <div className="space-y-4 font-body">
              {result.key_factors.map((factor, i) => (
                <div key={i} className="flex gap-4 items-start p-4 border border-mma-lead bg-mma-black">
                  <div className={`w-2 h-2 mt-1.5 rounded-none ${factor.includes('Lutador A') ? 'bg-mma-blood' : 'bg-mma-gold'}`}></div>
                  <div className="text-sm font-bold text-mma-bone uppercase tracking-wider leading-relaxed">
                    {factor}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-mma-steel font-body text-sm font-bold uppercase tracking-widest pb-12">
              Aguardando execução...
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
