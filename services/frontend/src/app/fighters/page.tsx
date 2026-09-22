"use client";

import React, { useState } from 'react';
import { RadarChart } from '@/components/RadarChart';

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock list of fighters
  const fighters = [
    { name: 'Jon Jones', category: 'Heavyweight', record: '27-1-0' },
    { name: 'Alex Pereira', category: 'Light Heavyweight', record: '10-2-0' },
    { name: 'Islam Makhachev', category: 'Lightweight', record: '25-1-0' },
    { name: 'Ilia Topuria', category: 'Featherweight', record: '15-0-0' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 border-b-2 border-mma-lead pb-4">
        <h1 className="font-display text-5xl md:text-7xl text-mma-bone uppercase tracking-wide">
          Catálogo <span className="text-mma-blood">Oficial</span>
        </h1>
        <p className="font-body text-mma-steel uppercase tracking-widest text-sm font-bold mt-2">
          Base de Dados de Atletas
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
          <div className="border-2 border-mma-lead">
            {fighters.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase())).map((f, i) => (
              <div key={i} className="p-4 border-b-2 border-mma-lead hover:bg-mma-lead/30 cursor-pointer transition-colors group">
                <div className="font-display text-2xl text-mma-bone group-hover:text-mma-blood uppercase">{f.name}</div>
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
            <div className="flex justify-between items-start border-b-2 border-mma-lead pb-6 mb-6">
              <div>
                <h2 className="font-display text-6xl text-mma-bone uppercase leading-none mb-2">JON JONES</h2>
                <div className="font-body text-sm text-mma-blood uppercase font-bold tracking-widest">Campeão Peso Pesado</div>
              </div>
              <div className="text-right">
                <div className="font-display text-5xl text-mma-bone">27-1-0</div>
                <div className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest">Cartel</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border-2 border-mma-lead p-4 text-center">
                <div className="font-display text-4xl text-mma-bone">58%</div>
                <div className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest mt-1">Acerto Significativo</div>
              </div>
              <div className="border-2 border-mma-lead p-4 text-center">
                <div className="font-display text-4xl text-mma-bone">44%</div>
                <div className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest mt-1">Precisão de Queda</div>
              </div>
              <div className="border-2 border-mma-lead p-4 text-center">
                <div className="font-display text-4xl text-mma-blood">15</div>
                <div className="font-body text-xs text-mma-steel uppercase font-bold tracking-widest mt-1">Lutas pelo Título</div>
              </div>
            </div>

            <RadarChart />
          </div>
        </div>

      </div>
    </div>
  );
}
