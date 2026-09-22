export type FighterBase = {
  id: string;
  name: string;
  category: string;
  record: string;
  country: string;
  flag: string;
  // Stats Reais (aproximados para o modelo)
  age: number;
  heightCm: number;
  reachCm: number;
  weightKg: number;
  elo: number;
  daysInactive: number;
  winRate: number;
  finishRate: number;
  strikingLanded: number; // sig_str_landed_per_min
  takedownSuccess: number; // td_success_per_min
  knockdownRate: number;
  // Display Radar
  stats: { striking: number; takedown: number; titleFights: number };
  radar: { subject: string; A: number; fullMark: number }[];
};

export const fightersDB: FighterBase[] = [
  {
    id: "jon-jones", name: "Jon Jones", category: "Peso Pesado", record: "27-1-0", country: "EUA", flag: "🇺🇸",
    age: 36, heightCm: 193, reachCm: 215, weightKg: 112, elo: 2100, daysInactive: 300, winRate: 0.96, finishRate: 0.50,
    strikingLanded: 4.30, takedownSuccess: 1.85, knockdownRate: 0.1,
    stats: { striking: 58, takedown: 44, titleFights: 15 },
    radar: [
      { subject: 'Volume Golpe', A: 120, fullMark: 150 }, { subject: 'Força', A: 110, fullMark: 150 },
      { subject: 'Wrestling', A: 140, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 110, fullMark: 150 },
      { subject: 'Cardio', A: 130, fullMark: 150 }, { subject: 'Defesa', A: 145, fullMark: 150 },
    ]
  },
  {
    id: "stipe-miocic", name: "Stipe Miocic", category: "Peso Pesado", record: "20-4-0", country: "EUA", flag: "🇺🇸",
    age: 41, heightCm: 193, reachCm: 203, weightKg: 108, elo: 1850, daysInactive: 900, winRate: 0.83, finishRate: 0.70,
    strikingLanded: 4.82, takedownSuccess: 2.12, knockdownRate: 0.2,
    stats: { striking: 53, takedown: 34, titleFights: 8 },
    radar: [
      { subject: 'Volume Golpe', A: 135, fullMark: 150 }, { subject: 'Força', A: 140, fullMark: 150 },
      { subject: 'Wrestling', A: 110, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 120, fullMark: 150 }, { subject: 'Defesa', A: 100, fullMark: 150 },
    ]
  },
  {
    id: "alex-pereira", name: "Alex Pereira", category: "Meio-Pesado", record: "10-2-0", country: "Brasil", flag: "🇧🇷",
    age: 36, heightCm: 193, reachCm: 200, weightKg: 93, elo: 2050, daysInactive: 100, winRate: 0.83, finishRate: 0.80,
    strikingLanded: 5.10, takedownSuccess: 0.1, knockdownRate: 0.8,
    stats: { striking: 62, takedown: 0, titleFights: 4 },
    radar: [
      { subject: 'Volume Golpe', A: 145, fullMark: 150 }, { subject: 'Força', A: 150, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 30, fullMark: 150 },
      { subject: 'Cardio', A: 110, fullMark: 150 }, { subject: 'Defesa', A: 100, fullMark: 150 },
    ]
  },
  {
    id: "islam-makhachev", name: "Islam Makhachev", category: "Peso Leve", record: "25-1-0", country: "Rússia", flag: "🇷🇺",
    age: 32, heightCm: 178, reachCm: 179, weightKg: 70, elo: 2150, daysInactive: 150, winRate: 0.96, finishRate: 0.60,
    strikingLanded: 2.41, takedownSuccess: 3.17, knockdownRate: 0.1,
    stats: { striking: 59, takedown: 61, titleFights: 3 },
    radar: [
      { subject: 'Volume Golpe', A: 100, fullMark: 150 }, { subject: 'Força', A: 100, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 145, fullMark: 150 },
      { subject: 'Cardio', A: 140, fullMark: 150 }, { subject: 'Defesa', A: 135, fullMark: 150 },
    ]
  },
  {
    id: "ilia-topuria", name: "Ilia Topuria", category: "Peso Pena", record: "15-0-0", country: "Espanha", flag: "🇪🇸",
    age: 27, heightCm: 170, reachCm: 175, weightKg: 65, elo: 1950, daysInactive: 60, winRate: 1.0, finishRate: 0.86,
    strikingLanded: 4.40, takedownSuccess: 1.92, knockdownRate: 0.5,
    stats: { striking: 46, takedown: 56, titleFights: 1 },
    radar: [
      { subject: 'Volume Golpe', A: 135, fullMark: 150 }, { subject: 'Força', A: 145, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 130, fullMark: 150 },
      { subject: 'Cardio', A: 130, fullMark: 150 }, { subject: 'Defesa', A: 120, fullMark: 150 },
    ]
  },
  {
    id: "leon-edwards", name: "Leon Edwards", category: "Meio-Médio", record: "22-3-0", country: "Inglaterra", flag: "🇬🇧",
    age: 32, heightCm: 188, reachCm: 188, weightKg: 77, elo: 1980, daysInactive: 120, winRate: 0.88, finishRate: 0.30,
    strikingLanded: 2.75, takedownSuccess: 1.25, knockdownRate: 0.1,
    stats: { striking: 53, takedown: 33, titleFights: 3 },
    radar: [
      { subject: 'Volume Golpe', A: 110, fullMark: 150 }, { subject: 'Força', A: 105, fullMark: 150 },
      { subject: 'Wrestling', A: 100, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 90, fullMark: 150 },
      { subject: 'Cardio', A: 140, fullMark: 150 }, { subject: 'Defesa', A: 135, fullMark: 150 },
    ]
  },
  {
    id: "israel-adesanya", name: "Israel Adesanya", category: "Peso Médio", record: "24-3-0", country: "Nigéria", flag: "🇳🇬",
    age: 34, heightCm: 193, reachCm: 203, weightKg: 84, elo: 1900, daysInactive: 200, winRate: 0.88, finishRate: 0.60,
    strikingLanded: 3.93, takedownSuccess: 0.05, knockdownRate: 0.4,
    stats: { striking: 49, takedown: 14, titleFights: 11 },
    radar: [
      { subject: 'Volume Golpe', A: 140, fullMark: 150 }, { subject: 'Força', A: 120, fullMark: 150 },
      { subject: 'Wrestling', A: 20, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 10, fullMark: 150 },
      { subject: 'Cardio', A: 145, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: "charles-oliveira", name: "Charles Oliveira", category: "Peso Leve", record: "34-10-0", country: "Brasil", flag: "🇧🇷",
    age: 34, heightCm: 178, reachCm: 188, weightKg: 70, elo: 1850, daysInactive: 50, winRate: 0.77, finishRate: 0.90,
    strikingLanded: 3.54, takedownSuccess: 2.32, knockdownRate: 0.3,
    stats: { striking: 53, takedown: 40, titleFights: 3 },
    radar: [
      { subject: 'Volume Golpe', A: 120, fullMark: 150 }, { subject: 'Força', A: 115, fullMark: 150 },
      { subject: 'Wrestling', A: 100, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 150, fullMark: 150 },
      { subject: 'Cardio', A: 110, fullMark: 150 }, { subject: 'Defesa', A: 80, fullMark: 150 },
    ]
  },
  {
    id: "khamzat-chimaev", name: "Khamzat Chimaev", category: "Peso Médio", record: "13-0-0", country: "Emirados Árabes", flag: "🇦🇪",
    age: 30, heightCm: 188, reachCm: 190, weightKg: 84, elo: 1880, daysInactive: 150, winRate: 1.0, finishRate: 0.85,
    strikingLanded: 5.72, takedownSuccess: 3.98, knockdownRate: 0.2,
    stats: { striking: 58, takedown: 46, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 130, fullMark: 150 }, { subject: 'Força', A: 135, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 120, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 110, fullMark: 150 },
    ]
  },
  {
    id: "max-holloway", name: "Max Holloway", category: "Peso Pena", record: "26-7-0", country: "EUA", flag: "🇺🇸",
    age: 32, heightCm: 180, reachCm: 175, weightKg: 65, elo: 1950, daysInactive: 30, winRate: 0.78, finishRate: 0.40,
    strikingLanded: 7.17, takedownSuccess: 0.25, knockdownRate: 0.1,
    stats: { striking: 47, takedown: 53, titleFights: 9 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 100, fullMark: 150 },
      { subject: 'Wrestling', A: 50, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 40, fullMark: 150 },
      { subject: 'Cardio', A: 150, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  }
];
