"use client";

import React from 'react';
import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

type RadarChartProps = {
  data: any[];
  mode?: 'single' | 'compare';
};

export function RadarChart({ data, mode = 'compare' }: RadarChartProps) {
  return (
    <div className="w-full h-80 border-2 border-mma-lead bg-mma-black p-4 relative">
      <div className="absolute top-4 left-4 font-body text-xs font-bold text-mma-steel uppercase tracking-widest">
        Análise de Estilo
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#1A1A1A" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#8A8A8A', fontSize: 10, fontWeight: 'bold' }} />
          
          {mode === 'compare' ? (
            <>
              <Radar name="Lutador A" dataKey="A" stroke="#D91616" fill="#D91616" fillOpacity={0.2} strokeWidth={2} />
              <Radar name="Lutador B" dataKey="B" stroke="#2B59C3" fill="#2B59C3" fillOpacity={0.2} strokeWidth={2} />
            </>
          ) : (
            <Radar name="Lutador" dataKey="A" stroke="#D91616" fill="#D91616" fillOpacity={0.2} strokeWidth={2} />
          )}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
