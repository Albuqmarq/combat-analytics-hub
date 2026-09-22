import { Arena } from '@/components/Arena';
import { Card, CardContent } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100 pb-20">
      {/* Header/Banner */}
      <div className="relative w-full h-64 bg-gray-900 border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 via-black to-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Combat Analytics Hub
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Plataforma preditiva impulsionada por IA (XGBoost) para analise de lutas de MMA. 
            Simule os confrontos com explicabilidade matematica.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-[-40px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Area: Arena (8 columns) */}
          <div className="lg:col-span-8">
            <Arena />
          </div>

          {/* Sidebar: Next Event & Top Fighters (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Card>
              <div className="px-4 py-3 border-b border-gray-800 bg-gray-900">
                <h3 className="font-bold text-gray-100 uppercase tracking-wide text-sm">Próximo Evento</h3>
              </div>
              <CardContent className="p-4">
                <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-red-500 font-bold mb-1">UFC 300</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest">13 de Abril</div>
                  <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center text-sm">
                    <span className="font-semibold">Pereira</span>
                    <span className="text-gray-600 text-xs">VS</span>
                    <span className="font-semibold">Hill</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="px-4 py-3 border-b border-gray-800 bg-gray-900">
                <h3 className="font-bold text-gray-100 uppercase tracking-wide text-sm">Top Fighters (Elo)</h3>
              </div>
              <CardContent className="p-0">
                <ul className="divide-y divide-gray-800">
                  <li className="flex justify-between items-center p-4 hover:bg-gray-900/50 transition-colors">
                    <span className="text-sm font-medium">1. Jon Jones</span>
                    <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">2140</span>
                  </li>
                  <li className="flex justify-between items-center p-4 hover:bg-gray-900/50 transition-colors">
                    <span className="text-sm font-medium">2. Islam Makhachev</span>
                    <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">2115</span>
                  </li>
                  <li className="flex justify-between items-center p-4 hover:bg-gray-900/50 transition-colors">
                    <span className="text-sm font-medium">3. Alex Pereira</span>
                    <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">2090</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
