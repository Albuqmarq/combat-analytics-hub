"use client";

import React, { useState } from 'react';
import { User, Activity, Swords, BrainCircuit, ShieldAlert } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/ui';
import { fetchPrediction } from '@/services/apiClient';
import type { PredictResponse, PredictRequest } from '@/types';

export function Arena() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    try {
      // Usamos features zeradas por enquanto. Em producao o backend via BFF buscaria no Feature Store ou o front enviaria o Payload correto.
      const payload: PredictRequest = {
        features: {
          delta_elo: 0.142,
          delta_days_inactive: -15,
          delta_streak: 2,
          delta_win_rate: 0.2,
          delta_finish_rate: 0.1,
          delta_experience: 5,
          delta_height: -2,
          delta_reach: -4,
          delta_age: -3,
          r_age_over35: 0,
          b_age_over35: 1,
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
    } catch (err: any) {
      setError(err.message || "Erro interno");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto w-full">
      <div className="px-6 py-4 border-b border-gray-800 bg-gray-900 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-xl text-red-500 flex items-center gap-2">
            <Swords className="w-5 h-5" /> Arena de Simulação
          </h2>
          <p className="text-gray-400 text-xs mt-1">XGBoost V3 + SHAP Explainability</p>
        </div>
        <div className="px-3 py-1 bg-green-900/30 text-green-400 text-xs font-semibold rounded-full border border-green-800/50 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Modelo Ativo
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-4 relative">
          <div className="flex-1 bg-black border border-gray-800 rounded-xl p-4 text-center">
            <div className="w-16 h-16 mx-auto bg-red-900/20 border-2 border-red-500/50 rounded-full flex items-center justify-center mb-3">
              <User className="w-8 h-8 text-red-500" />
            </div>
            <select className="w-full bg-gray-900 border border-gray-800 text-gray-100 text-sm rounded-md px-3 py-2 mb-2 outline-none focus:ring-1 focus:ring-red-500">
              <option>Jon Jones</option>
              <option>Israel Adesanya</option>
            </select>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center font-black text-gray-500 shadow-md">
            VS
          </div>

          <div className="flex-1 bg-black border border-gray-800 rounded-xl p-4 text-center">
            <div className="w-16 h-16 mx-auto bg-blue-900/20 border-2 border-blue-500/50 rounded-full flex items-center justify-center mb-3">
              <User className="w-8 h-8 text-blue-500" />
            </div>
            <select className="w-full bg-gray-900 border border-gray-800 text-gray-100 text-sm rounded-md px-3 py-2 mb-2 outline-none focus:ring-1 focus:ring-blue-500">
              <option>Alex Pereira</option>
              <option>Stipe Miocic</option>
            </select>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-sm flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" /> {error}
          </div>
        )}

        <Button 
          className="w-full mt-6 py-6 text-lg tracking-wide uppercase font-bold"
          variant="primary"
          onClick={handlePredict}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Activity className="w-5 h-5 animate-spin" /> PROCESSANDO MATRIZ...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <BrainCircuit className="w-5 h-5" /> EXECUTAR PREDIÇÃO
            </span>
          )}
        </Button>
      </CardContent>

      {result && (
        <div className="border-t border-gray-800 bg-gray-900/50 p-6 animate-in slide-in-from-top-4 duration-500">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">Resultado Calculado</h3>
          
          <div className="flex items-end justify-between mb-2 px-1">
            <div className="text-red-500 font-bold text-2xl">
              {(result.fighter_a_win_probability * 100).toFixed(1)}% 
              <span className="text-xs font-normal text-gray-500 ml-1">Vantagem</span>
            </div>
            <div className="text-blue-500 font-bold text-2xl">
              <span className="text-xs font-normal text-gray-500 mr-1">Azarão</span> 
              {(result.fighter_b_win_probability * 100).toFixed(1)}%
            </div>
          </div>
          
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden flex">
            <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: `${result.fighter_a_win_probability * 100}%` }}></div>
            <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${result.fighter_b_win_probability * 100}%` }}></div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-bold text-gray-300 mb-3 flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              Auditoria da IA (Fatores SHAP)
            </h4>
            <div className="space-y-2">
              {result.key_factors.map((factor, idx) => (
                <div key={idx} className="bg-black border border-gray-800 rounded p-2 text-sm flex justify-between items-center">
                  <span className="text-gray-300 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${factor.includes('Lutador A') ? 'bg-red-500' : 'bg-blue-500'}`}></span> 
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
