"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swords, BrainCircuit, Database, LineChart, ShieldCheck, Users } from 'lucide-react';
import { fetchModelMetrics } from '@/services/apiClient';
import type { ModelMetrics } from '@/types';

const PIPELINE = [
  { icon: Database, title: 'Dados', desc: 'Histórico de lutas do UFC, ingerido de forma atualizável e limpo para modelagem.' },
  { icon: LineChart, title: 'Features Temporais', desc: 'Elo, médias móveis, sequências e idade — construídas cronologicamente, sem vazar o futuro.' },
  { icon: BrainCircuit, title: 'Modelo XGBoost', desc: 'Treino com split temporal (passado → futuro) e simetrização por corner. Sem vazamento.' },
  { icon: ShieldCheck, title: 'Explicabilidade', desc: 'SHAP expõe, para cada predição, os fatores que mais pesaram — nada de caixa-preta.' },
];

export default function Landing() {
  const [metrics, setMetrics] = useState<ModelMetrics | null>(null);

  useEffect(() => {
    fetchModelMetrics().then(setMetrics).catch(() => setMetrics(null));
  }, []);

  const stat = (label: string, value: string, hint?: string) => (
    <div className="border-2 border-mma-lead bg-mma-black p-6 text-center">
      <div className="font-display text-5xl md:text-6xl text-mma-bone leading-none">{value}</div>
      <div className="font-body text-xs font-bold text-mma-steel uppercase tracking-widest mt-3">{label}</div>
      {hint && <div className="font-body text-[10px] text-mma-steel/70 uppercase tracking-widest mt-1">{hint}</div>}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* HERO */}
      <section className="py-20 md:py-28 text-center border-b-2 border-mma-lead">
        <div className="inline-flex items-center gap-2 border border-mma-lead px-4 py-2 mb-8 font-body text-xs font-bold uppercase tracking-widest text-mma-steel">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse motion-reduce:animate-none"></span>
          Machine Learning + Explicabilidade
        </div>
        <h1 className="font-display text-6xl md:text-8xl text-mma-bone uppercase tracking-wide leading-none">
          Preveja a <span className="text-mma-blood">Luta</span><br />antes do gongo
        </h1>
        <p className="font-body text-mma-steel max-w-2xl mx-auto mt-8 text-base md:text-lg">
          Uma plataforma de análise de MMA que estima a probabilidade de vitória em qualquer confronto do UFC
          usando <span className="text-mma-bone font-bold">XGBoost</span> e explica cada decisão com <span className="text-mma-bone font-bold">SHAP</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/arena" className="font-display text-2xl uppercase tracking-wider bg-mma-bone text-mma-black px-10 py-4 hover:bg-mma-blood hover:text-mma-bone transition-colors inline-flex items-center justify-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-mma-bone focus-visible:ring-offset-2 focus-visible:ring-offset-mma-black">
            <Swords className="w-6 h-6" /> Entrar na Arena
          </Link>
          <Link href="/fighters" className="font-display text-2xl uppercase tracking-wider bg-transparent text-mma-bone border-2 border-mma-lead px-10 py-4 hover:border-mma-bone transition-colors inline-flex items-center justify-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-mma-bone focus-visible:ring-offset-2 focus-visible:ring-offset-mma-black">
            <Users className="w-6 h-6" /> Ver Atletas
          </Link>
        </div>
      </section>

      {/* MÉTRICAS HONESTAS */}
      <section className="py-16 border-b-2 border-mma-lead">
        <h2 className="font-display text-3xl md:text-4xl uppercase text-mma-bone text-center mb-2">Desempenho do Modelo</h2>
        <p className="font-body text-xs text-mma-steel uppercase tracking-widest text-center mb-10">
          Métricas reais no conjunto de teste temporal (baseline 50%)
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stat('Acurácia', metrics ? `${(metrics.accuracy * 100).toFixed(0)}%` : '—')}
          {stat('ROC AUC', metrics ? metrics.roc_auc.toFixed(3) : '—')}
          {stat('Features', metrics ? String(metrics.n_features) : '—', 'variáveis de entrada')}
          {stat('Lutas no teste', metrics ? metrics.n_test.toLocaleString('pt-BR') : '—', 'nunca vistas no treino')}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 border-b-2 border-mma-lead">
        <h2 className="font-display text-3xl md:text-4xl uppercase text-mma-bone text-center mb-10">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PIPELINE.map((step, i) => (
            <div key={step.title} className="border-2 border-mma-lead bg-mma-black p-6">
              <div className="flex items-center gap-3 mb-4">
                <step.icon className="w-7 h-7 text-mma-blood" />
                <span className="font-display text-4xl text-mma-lead">0{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl uppercase text-mma-bone mb-2">{step.title}</h3>
              <p className="font-body text-sm text-mma-steel leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK / CTA FINAL */}
      <section className="py-16 text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Next.js', 'FastAPI', 'XGBoost', 'SHAP', 'Docker', 'Microserviços'].map(t => (
            <span key={t} className="border border-mma-lead px-4 py-2 font-body text-xs font-bold uppercase tracking-widest text-mma-steel">{t}</span>
          ))}
        </div>
        <Link href="/arena" className="font-display text-3xl uppercase tracking-wider text-mma-bone hover:text-mma-blood transition-colors inline-flex items-center gap-3">
          <Swords className="w-7 h-7" /> Simular um confronto agora
        </Link>
      </section>

    </div>
  );
}
