"use client";

import React, { useState } from 'react';
import { RadarChart } from '@/components/RadarChart';
import { User } from 'lucide-react';

const mockFighters = [
  { 
    id: 1, name: 'Jon Jones', category: 'Peso Pesado', record: '27-1-0', country: 'Estados Unidos', flag: '🇺🇸',
    stats: { striking: 58, takedown: 44, titleFights: 15 },
    radar: [
      { subject: 'Volume Golpe', A: 120, fullMark: 150 },
      { subject: 'Força', A: 130, fullMark: 150 },
      { subject: 'Wrestling', A: 140, fullMark: 150 },
      { subject: 'Jiu-Jitsu', A: 110, fullMark: 150 },
      { subject: 'Cardio', A: 130, fullMark: 150 },
      { subject: 'Defesa', A: 125, fullMark: 150 },
    ]
  },
  { 
    id: 2, name: 'Alex Pereira', category: 'Meio-Pesado', record: '10-2-0', country: 'Brasil', flag: '🇧🇷',
    stats: { striking: 62, takedown: 0, titleFights: 4 },
    radar: [
      { subject: 'Volume Golpe', A: 140, fullMark: 150 },
      { subject: 'Força', A: 150, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 },
      { subject: 'Jiu-Jitsu', A: 30, fullMark: 150 },
      { subject: 'Cardio', A: 110, fullMark: 150 },
      { subject: 'Defesa', A: 100, fullMark: 150 },
    ]
  },
  { 
    id: 3, name: 'Islam Makhachev', category: 'Peso Leve', record: '25-1-0', country: 'Rússia', flag: '🇷🇺',
    stats: { striking: 59, takedown: 61, titleFights: 3 },
    radar: [
      { subject: 'Volume Golpe', A: 110, fullMark: 150 },
      { subject: 'Força', A: 100, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 },
      { subject: 'Jiu-Jitsu', A: 140, fullMark: 150 },
      { subject: 'Cardio', A: 145, fullMark: 150 },
      { subject: 'Defesa', A: 130, fullMark: 150 },
    ]
  },
  { 
    id: 4, name: 'Ilia Topuria', category: 'Peso Pena', record: '15-0-0', country: 'Espanha', flag: '🇪🇸',
    stats: { striking: 46, takedown: 56, titleFights: 1 },
    radar: [
      { subject: 'Volume Golpe', A: 125, fullMark: 150 },
      { subject: 'Força', A: 140, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 },
      { subject: 'Jiu-Jitsu', A: 130, fullMark: 150 },
      { subject: 'Cardio', A: 135, fullMark: 150 },
      { subject: 'Defesa', A: 120, fullMark: 150 },
    ]
  },
  { 
    id: 5, name: 'Leon Edwards', category: 'Meio-Médio', record: '22-3-0', country: 'Inglaterra', flag: '🇬🇧',
    stats: { striking: 53, takedown: 33, titleFights: 3 },
    radar: [
      { subject: 'Volume Golpe', A: 110, fullMark: 150 },
      { subject: 'Força', A: 105, fullMark: 150 },
      { subject: 'Wrestling', A: 100, fullMark: 150 },
      { subject: 'Jiu-Jitsu', A: 90, fullMark: 150 },
      { subject: 'Cardio', A: 140, fullMark: 150 },
      { subject: 'Defesa', A: 135, fullMark: 150 },
    ]
  },
];

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState(mockFighters[0]);

  const filteredFighters = mockFighters.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 border-b-2 border-mma-lead pb-4">
        <h1 className="font-display text-5xl md:text-7xl text-mma-bone uppercase tracking-wide">
          Catálogo <span className="text-mma-blood">Oficial</span>
        </h1>
        <p className="font-body text-mma-steel uppercase tracking-widest text-sm font-bold mt-2">
          Base de Dados de Atletas Analisados
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Search & List */}
        <div className="lg:col-span-4">
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="BUSCAR ATLETA..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-mma-black border-2 border-mma-lead text-mma-bone p-4 font-body text-sm font-bold uppercase tracking-widest outline-none focus:border-mma-blood transition-colors"
            />
          </div>
          <div className="border-2 border-mma-lead max-h-[600px] overflow-y-auto">
            {filteredFighters.map((f) => (
              <div 
                key={f.id} 
                onClick={() => setSelected(f)}
                className={`p-4 border-b-2 border-mma-lead cursor-pointer transition-colors group ${selected.id === f.id ? 'bg-mma-blood/10 border-l-4 border-l-mma-blood' : 'hover:bg-mma-lead/30'}`}
              >
                <div className={`font-display text-2xl uppercase ${selected.id === f.id ? 'text-mma-blood' : 'text-mma-bone group-hover:text-mma-blood'}`}>
                  {f.name}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest">{f.category}</span>
                  <span className="font-body text-xs text-mma-bone bg-mma-lead px-2 py-1">{f.record}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Details & Radar */}
        <div className="lg:col-span-8">
          <div className="border-2 border-mma-lead p-8 bg-mma-black mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-mma-lead pb-6 mb-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-mma-lead flex items-center justify-center border-2 border-mma-steel">
                  <User className="text-mma-steel w-12 h-12" />
                </div>
                <div>
                  <h2 className="font-display text-5xl md:text-6xl text-mma-bone uppercase leading-none mb-2">{selected.name}</h2>
                  <div className="flex gap-3 items-center">
                    <span className="font-body text-sm text-mma-blood uppercase font-bold tracking-widest">{selected.category}</span>
                    <span className="text-mma-steel">•</span>
                    <span className="font-body text-sm text-mma-bone uppercase font-bold">{selected.flag} {selected.country}</span>
                  </div>
                </div>
              </div>
              <div className="text-right mt-6 md:mt-0">
                <div className="font-display text-5xl text-mma-bone">{selected.record}</div>
                <div className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest">Cartel</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border-2 border-mma-lead p-4 text-center">
                <div className="font-display text-4xl text-mma-bone">{selected.stats.striking}%</div>
                <div className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest mt-1">Acerto em Pé</div>
              </div>
              <div className="border-2 border-mma-lead p-4 text-center">
                <div className="font-display text-4xl text-mma-bone">{selected.stats.takedown}%</div>
                <div className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest mt-1">Precisão de Queda</div>
              </div>
              <div className="border-2 border-mma-lead p-4 text-center">
                <div className="font-display text-4xl text-mma-blood">{selected.stats.titleFights}</div>
                <div className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest mt-1">Lutas por Título</div>
              </div>
            </div>

            <RadarChart data={selected.radar} mode="single" />
          </div>
        </div>

      </div>
    </div>
  );
}
