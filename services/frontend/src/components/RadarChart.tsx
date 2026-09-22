"use client";

import React from 'react';
import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export function RadarChart() {
  const data = [
    { subject: 'Striking Vol', A: 120, B: 110, fullMark: 150 },
    { subject: 'Power', A: 98, B: 130, fullMark: 150 },
    { subject: 'Wrestling', A: 140, B: 60, fullMark: 150 },
    { subject: 'BJJ', A: 110, B: 40, fullMark: 150 },
    { subject: 'Cardio', A: 130, B: 100, fullMark: 150 },
    { subject: 'Defense', A: 125, B: 90, fullMark: 150 },
  ];

  return (
    <div className="w-full h-80 border-2 border-mma-lead bg-mma-black p-4 relative">
      <div className="absolute top-4 left-4 font-body text-xs font-bold text-mma-steel uppercase tracking-widest">
        Análise de Estilo
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#1A1A1A" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#8A8A8A', fontSize: 10, fontWeight: 'bold' }} />
          <Radar name="Lutador A" dataKey="A" stroke="#D91616" fill="#D91616" fillOpacity={0.2} strokeWidth={2} />
          <Radar name="Lutador B" dataKey="B" stroke="#C9A050" fill="#C9A050" fillOpacity={0.2} strokeWidth={2} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
