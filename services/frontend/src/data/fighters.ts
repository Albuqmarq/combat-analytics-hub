export type FighterBase = {
  id: string;
  name: string;
  category: string;
  record: string;
  country: string;
  flag: string;
  age: number;
  heightCm: number;
  reachCm: number;
  weightKg: number;
  elo: number;
  daysInactive: number;
  winRate: number;
  finishRate: number;
  strikingLanded: number;
  takedownSuccess: number;
  knockdownRate: number;
  stats: { striking: number; takedown: number; titleFights: number };
  radar: { subject: string; A: number; fullMark: number }[];
};

export const fightersDB: FighterBase[] = [
  {
    id: 'georges-st-pierre', name: 'Georges St-Pierre', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1788, daysInactive: 1449, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 94.4, takedownSuccess: 5.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jon-jones', name: 'Jon Jones', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1786, daysInactive: 623, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 70.4, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'islam-makhachev', name: 'Islam Makhachev', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1732, daysInactive: 301, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.0, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'daniel-cormier', name: 'Daniel Cormier', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1732, daysInactive: 364, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 63.0, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gegard-mousasi', name: 'Gegard Mousasi', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1731, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 39.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'shinya-aoki', name: 'Shinya Aoki', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1718, daysInactive: 366, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 11.4, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'fedor-emelianenko', name: 'Fedor Emelianenko', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1713, daysInactive: 173, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 18.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'demetrious-johnson', name: 'Demetrious Johnson', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1706, daysInactive: 301, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 61.8, takedownSuccess: 3.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 72, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 144, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'merab-dvalishvili', name: 'Merab Dvalishvili', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1693, daysInactive: 63, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 86.6, takedownSuccess: 8.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'michael-bisping', name: 'Michael Bisping', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1693, daysInactive: 21, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 78.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'khabib-nurmagomedov', name: 'Khabib Nurmagomedov', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1688, daysInactive: 413, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 81.8, takedownSuccess: 4.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 88, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kamaru-usman', name: 'Kamaru Usman', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1686, daysInactive: 399, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 74.0, takedownSuccess: 2.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 56, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 112, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jake-shields', name: 'Jake Shields', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1685, daysInactive: 157, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.4, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'max-holloway', name: 'Max Holloway', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1684, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 111.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'charles-oliveira', name: 'Charles Oliveira', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1684, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cain-velasquez', name: 'Cain Velasquez', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1679, daysInactive: 953, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 78.0, takedownSuccess: 3.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 72, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 144, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alistair-overeem', name: 'Alistair Overeem', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1678, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 57.0, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'stipe-miocic', name: 'Stipe Miocic', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1677, daysInactive: 1330, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 68.8, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'amanda-nunes', name: 'Amanda Nunes', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1674, daysInactive: 315, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 70.4, takedownSuccess: 4.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 84, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'aljamain-sterling', name: 'Aljamain Sterling', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1672, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 65.4, takedownSuccess: 4.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 84, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dustin-poirier', name: 'Dustin Poirier', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1672, daysInactive: 413, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alexander-volkanovski', name: 'Alexander Volkanovski', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1669, daysInactive: 294, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 69.0, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rich-franklin', name: 'Rich Franklin', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1666, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 47.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'anderson-silva', name: 'Anderson Silva', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1665, daysInactive: 539, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jon-fitch', name: 'Jon Fitch', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1665, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 46.0, takedownSuccess: 4.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 84, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'leon-edwards', name: 'Leon Edwards', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1662, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 60.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'valentina-shevchenko', name: 'Valentina Shevchenko', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1662, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 72.2, takedownSuccess: 4.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 84, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'glover-teixeira', name: 'Glover Teixeira', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1661, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 72.2, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'lyoto-machida', name: 'Lyoto Machida', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1658, daysInactive: 98, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dominick-cruz', name: 'Dominick Cruz', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1658, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 80.0, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'francis-ngannou', name: 'Francis Ngannou', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1657, daysInactive: 301, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 14.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ilia-topuria', name: 'Ilia Topuria', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1656, daysInactive: 351, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 64.6, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'benson-henderson', name: 'Benson Henderson', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1656, daysInactive: 287, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.0, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'khamzat-chimaev', name: 'Khamzat Chimaev', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1655, daysInactive: 266, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.2, takedownSuccess: 4.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 88, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'belal-muhammad', name: 'Belal Muhammad', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1654, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 93.6, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alexandre-pantoja', name: 'Alexandre Pantoja', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1654, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 84.6, takedownSuccess: 5.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'vitor-belfort', name: 'Vitor Belfort', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1653, daysInactive: 343, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 13.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'josh-barnett', name: 'Josh Barnett', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1652, daysInactive: 217, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 42.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'fabricio-werdum', name: 'Fabricio Werdum', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1650, daysInactive: 77, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 61.0, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nick-diaz', name: 'Nick Diaz', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1649, daysInactive: 2429, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 89.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ryan-bader', name: 'Ryan Bader', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1648, daysInactive: 77, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.0, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joseph-benavidez', name: 'Joseph Benavidez', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1648, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.0, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dan-henderson', name: 'Dan Henderson', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1647, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 7.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 76, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'demian-maia', name: 'Demian Maia', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1647, daysInactive: 455, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.6, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'magomed-ankalaev', name: 'Magomed Ankalaev', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1646, daysInactive: 294, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tyron-woodley', name: 'Tyron Woodley', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1646, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 42.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jose-aldo', name: 'Jose Aldo', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1646, daysInactive: 217, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 73.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brendan-allen', name: 'Brendan Allen', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1645, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 57.8, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tj-dillashaw', name: 'TJ Dillashaw', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1644, daysInactive: 455, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 49.4, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tatsuya-kawajiri', name: 'Tatsuya Kawajiri', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1644, daysInactive: 167, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.6, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'movsar-evloev', name: 'Movsar Evloev', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1643, daysInactive: 469, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 51.4, takedownSuccess: 6.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alex-pereira', name: 'Alex Pereira', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1642, daysInactive: 253, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 58.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'luke-rockhold', name: 'Luke Rockhold', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1642, daysInactive: 1141, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 52.0, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'anthony-johnson', name: 'Anthony Johnson', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1642, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 18.6, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'matt-hughes', name: 'Matt Hughes', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1642, daysInactive: 308, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dricus-du-plessis', name: 'Dricus Du Plessis', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1641, daysInactive: 336, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 89.8, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ciryl-gane', name: 'Ciryl Gane', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1640, daysInactive: 232, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 59.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'derek-brunson', name: 'Derek Brunson', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1639, daysInactive: 385, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 59.2, takedownSuccess: 3.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 72, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 144, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'colby-covington', name: 'Colby Covington', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1638, daysInactive: 364, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 93.2, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'carlos-ulberg', name: 'Carlos Ulberg', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1638, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 54.4, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'antonio-rodrigo-nogueira', name: 'Antonio Rodrigo Nogueira', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1638, daysInactive: 477, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 16.4, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'curtis-blaydes', name: 'Curtis Blaydes', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1637, daysInactive: 294, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 19.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'francisco-trinaldo', name: 'Francisco Trinaldo', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1637, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dong-hyun-kim', name: 'Dong Hyun Kim', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1636, daysInactive: 169, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sean-strickland', name: 'Sean Strickland', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1636, daysInactive: 77, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 146.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'lerone-murphy', name: 'Lerone Murphy', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1635, daysInactive: 217, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 84.6, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sean-o'malley', name: 'Sean OMalley', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1635, daysInactive: 141, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 76.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'robert-whittaker', name: 'Robert Whittaker', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1634, daysInactive: 350, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.6, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alexander-volkov', name: 'Alexander Volkov', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1634, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'beneil-dariush', name: 'Beneil Dariush', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1634, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 26.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jack-della-maddalena', name: 'Jack Della Maddalena', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1634, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 90.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'neil-magny', name: 'Neil Magny', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1634, daysInactive: 77, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.0, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'zhang-weili', name: 'Zhang Weili', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1633, daysInactive: 280, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 85.6, takedownSuccess: 3.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 64, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 128, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chuck-liddell', name: 'Chuck Liddell', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1632, daysInactive: 420, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'grant-dawson', name: 'Grant Dawson', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1632, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.8, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'quinton-jackson', name: 'Quinton Jackson', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1631, daysInactive: 819, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kenny-florian', name: 'Kenny Florian', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1631, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'wanderlei-silva', name: 'Wanderlei Silva', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1629, daysInactive: 252, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 36.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'justin-gaethje', name: 'Justin Gaethje', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1629, daysInactive: 141, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 92.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cristiane-justino', name: 'Cristiane Justino', category: 'Women's Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1628, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 62.4, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'maycee-barber', name: 'Maycee Barber', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1628, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 66.2, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'waldo-cortes-acosta', name: 'Waldo Cortes Acosta', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1627, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 44.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chad-mendes', name: 'Chad Mendes', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1626, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'urijah-faber', name: 'Urijah Faber', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1625, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 42.4, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ronda-rousey', name: 'Ronda Rousey', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1625, daysInactive: 412, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 12.8, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'john-lineker', name: 'John Lineker', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1625, daysInactive: 350, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 67.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'randy-couture', name: 'Randy Couture', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1624, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.8, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'arman-tsarukyan', name: 'Arman Tsarukyan', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1624, daysInactive: 588, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 53.2, takedownSuccess: 2.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 56, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 112, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jacare-souza', name: 'Jacare Souza', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1623, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ian-machado-garry', name: 'Ian Machado Garry', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1622, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 69.0, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mario-bautista', name: 'Mario Bautista', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1621, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 73.8, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'royce-gracie', name: 'Royce Gracie', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1621, daysInactive: 371, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 15.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'petr-yan', name: 'Petr Yan', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1621, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 86.8, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'raquel-pennington', name: 'Raquel Pennington', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1620, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 84.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joshua-van', name: 'Joshua Van', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1620, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 111.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tom-aspinall', name: 'Tom Aspinall', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1619, daysInactive: 455, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 13.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mauricio-rua', name: 'Mauricio Rua', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1619, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'anthony-hernandez', name: 'Anthony Hernandez', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1618, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 74.0, takedownSuccess: 6.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mirko-filipovic', name: 'Mirko Filipovic', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1617, daysInactive: 1260, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'israel-adesanya', name: 'Israel Adesanya', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1617, daysInactive: 420, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 68.8, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kyoji-horiguchi', name: 'Kyoji Horiguchi', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1616, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 65.4, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'deiveson-figueiredo', name: 'Deiveson Figueiredo', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1616, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.0, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rashad-evans', name: 'Rashad Evans', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1616, daysInactive: 308, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.4, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'yushin-okami', name: 'Yushin Okami', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1615, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 14.6, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'thiago-silva', name: 'Thiago Silva', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1614, daysInactive: 123, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.8, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'michael-morales', name: 'Michael Morales', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1614, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 61.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'michael-chiesa', name: 'Michael Chiesa', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1614, daysInactive: 287, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.4, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'phil-davis', name: 'Phil Davis', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1614, daysInactive: 91, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 39.8, takedownSuccess: 3.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 64, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 128, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'caio-borralho', name: 'Caio Borralho', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1613, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 68.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'conor-mcgregor', name: 'Conor McGregor', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1613, daysInactive: 1827, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'arnold-allen', name: 'Arnold Allen', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1613, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 56.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'norma-dumont', name: 'Norma Dumont', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1612, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 62.8, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rogerio-nogueira', name: 'Rogerio Nogueira', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1611, daysInactive: 441, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 25.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cory-sandhagen', name: 'Cory Sandhagen', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1611, daysInactive: 280, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 73.4, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nassourdine-imavov', name: 'Nassourdine Imavov', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1610, daysInactive: 217, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 64.6, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sergei-kharitonov', name: 'Sergei Kharitonov', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1610, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 17.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'paulo-filho', name: 'Paulo Filho', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1610, daysInactive: 257, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 9.4, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 94, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'shavkat-rakhmonov', name: 'Shavkat Rakhmonov', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1609, daysInactive: 357, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 38.8, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rory-macdonald', name: 'Rory MacDonald', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1608, daysInactive: 343, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 58.8, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'natalia-silva', name: 'Natalia Silva', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1608, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 62.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'farid-basharat', name: 'Farid Basharat', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1608, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.4, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'azamat-murzakanov', name: 'Azamat Murzakanov', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1608, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 44.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'benoit-saint-denis', name: 'Benoit Saint Denis', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1607, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 39.2, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sean-brady', name: 'Sean Brady', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1607, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 53.4, takedownSuccess: 3.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 68, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 136, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'frankie-edgar', name: 'Frankie Edgar', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1607, daysInactive: 371, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 67.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'junior-dos-santos', name: 'Junior Dos Santos', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1607, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 18.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tatiana-suarez', name: 'Tatiana Suarez', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1606, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.0, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gilbert-melendez', name: 'Gilbert Melendez', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1606, daysInactive: 665, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joaquin-buckley', name: 'Joaquin Buckley', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1606, daysInactive: 329, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 58.8, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tatsuro-taira', name: 'Tatsuro Taira', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1605, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.2, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jailton-almeida', name: 'Jailton Almeida', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1605, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 14.4, takedownSuccess: 4.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 96, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'carlos-prates', name: 'Carlos Prates', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1605, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 36.6, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'daniel-rodriguez', name: 'Daniel Rodriguez', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1605, daysInactive: 378, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 80.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rose-namajunas', name: 'Rose Namajunas', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1604, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 73.6, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'steve-garcia', name: 'Steve Garcia', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1604, daysInactive: 225, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 36.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'yoel-romero', name: 'Yoel Romero', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1603, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 69.4, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'montel-jackson', name: 'Montel Jackson', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1602, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tim-kennedy', name: 'Tim Kennedy', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1602, daysInactive: 805, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.2, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'song-yadong', name: 'Song Yadong', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1602, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 77.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'umar-nurmagomedov', name: 'Umar Nurmagomedov', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1602, daysInactive: 91, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 67.6, takedownSuccess: 4.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 92, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chris-gutierrez', name: 'Chris Gutierrez', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1601, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 75.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'derrick-lewis', name: 'Derrick Lewis', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1601, daysInactive: 141, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 19.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rafael-dos-anjos', name: 'Rafael Dos Anjos', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1601, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 65.0, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'martin-kampmann', name: 'Martin Kampmann', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1601, daysInactive: 284, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.0, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'muhammed-lawal', name: 'Muhammed Lawal', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1601, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.2, takedownSuccess: 2.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 56, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 112, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'randy-brown', name: 'Randy Brown', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1601, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'aiemann-zahabi', name: 'Aiemann Zahabi', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1601, daysInactive: 239, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 73.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'eddie-alvarez', name: 'Eddie Alvarez', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1600, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 59.0, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cung-le', name: 'Cung Le', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1600, daysInactive: 651, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'yoshihiro-akiyama', name: 'Yoshihiro Akiyama', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1600, daysInactive: 434, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 33.6, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jorge-masvidal', name: 'Jorge Masvidal', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1600, daysInactive: 399, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 55.8, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'corey-anderson', name: 'Corey Anderson', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1599, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 40.8, takedownSuccess: 4.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 96, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sean-woodson', name: 'Sean Woodson', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1599, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 72.6, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'forrest-griffin', name: 'Forrest Griffin', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1599, daysInactive: 315, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'erin-blanchfield', name: 'Erin Blanchfield', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1599, daysInactive: 378, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 75.4, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gabriel-bonfim', name: 'Gabriel Bonfim', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1599, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.0, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joel-alvarez', name: 'Joel Alvarez', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1599, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.6, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sergei-pavlovich', name: 'Sergei Pavlovich', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1599, daysInactive: 280, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 33.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'henry-cejudo', name: 'Henry Cejudo', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1598, daysInactive: 287, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 67.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'manon-fiorot', name: 'Manon Fiorot', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1598, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 96.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gina-carano', name: 'Gina Carano', category: 'Strikeforce Women's 145 lbs.', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1598, daysInactive: 315, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.4, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mateusz-gamrot', name: 'Mateusz Gamrot', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1598, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 44.4, takedownSuccess: 5.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rani-yahya', name: 'Rani Yahya', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1597, daysInactive: 371, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.6, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'quillan-salkilld', name: 'Quillan Salkilld', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1597, daysInactive: 98, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.2, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'bibiano-fernandes', name: 'Bibiano Fernandes', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1597, daysInactive: 366, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.4, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mitsuhiro-ishida', name: 'Mitsuhiro Ishida', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1597, daysInactive: 246, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 14.6, takedownSuccess: 4.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 80, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'johny-hendricks', name: 'Johny Hendricks', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1597, daysInactive: 132, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.2, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chris-weidman', name: 'Chris Weidman', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1596, daysInactive: 252, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.0, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nathaniel-wood', name: 'Nathaniel Wood', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1596, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 74.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ricardo-arona', name: 'Ricardo Arona', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1596, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.6, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'igor-vovchanchyn', name: 'Igor Vovchanchyn', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1596, daysInactive: 63, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 19.0, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ben-rothwell', name: 'Ben Rothwell', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1596, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 66.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'pat-miletich', name: 'Pat Miletich', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1596, daysInactive: 266, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 15.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jonathan-martinez', name: 'Jonathan Martinez', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1595, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 55.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rick-story', name: 'Rick Story', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1595, daysInactive: 83, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 73.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mark-coleman', name: 'Mark Coleman', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1595, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 11.6, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'yair-rodriguez', name: 'Yair Rodriguez', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1595, daysInactive: 413, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 67.8, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'vicente-luque', name: 'Vicente Luque', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1595, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.8, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'donald-cerrone', name: 'Donald Cerrone', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1594, daysInactive: 420, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nasrat-haqparast', name: 'Nasrat Haqparast', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1594, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 106.4, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'fares-ziam', name: 'Fares Ziam', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1594, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.2, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'michel-prazeres', name: 'Michel Prazeres', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1594, daysInactive: 854, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 25.0, takedownSuccess: 2.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 56, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 112, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'anthony-pettis', name: 'Anthony Pettis', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1594, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 46.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'paddy-pimblett', name: 'Paddy Pimblett', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1594, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 82.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'josh-thomson', name: 'Josh Thomson', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1593, daysInactive: 354, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.0, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mike-malott', name: 'Mike Malott', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1593, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.6, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'renato-sobral', name: 'Renato Sobral', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1593, daysInactive: 171, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rustam-khabilov', name: 'Rustam Khabilov', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1593, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 32.0, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'heath-herring', name: 'Heath Herring', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1592, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.8, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'matt-hamill', name: 'Matt Hamill', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1592, daysInactive: 382, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 51.4, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jan-blachowicz', name: 'Jan Blachowicz', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1591, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 56.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chael-sonnen', name: 'Chael Sonnen', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1591, daysInactive: 91, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.2, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'diego-sanchez', name: 'Diego Sanchez', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1591, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.2, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gillian-robertson', name: 'Gillian Robertson', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1591, daysInactive: 315, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.8, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'king-green', name: 'King Green', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1591, daysInactive: 63, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.4, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dan-hooker', name: 'Dan Hooker', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1590, daysInactive: 70, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'elias-theodorou', name: 'Elias Theodorou', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1590, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 71.8, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'muhammad-mokaev', name: 'Muhammad Mokaev', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1590, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.0, takedownSuccess: 5.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'germaine-de-randamie', name: 'Germaine de Randamie', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1589, daysInactive: 1281, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 40.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mike-pierce', name: 'Mike Pierce', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1589, daysInactive: 793, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 15.4, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'john-hathaway', name: 'John Hathaway', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1589, daysInactive: 518, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.8, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'pat-sabatini', name: 'Pat Sabatini', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1588, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 14.6, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cheick-kongo', name: 'Cheick Kongo', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1588, daysInactive: 280, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rousimar-palhares', name: 'Rousimar Palhares', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1588, daysInactive: 299, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 15.8, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'frank-mir', name: 'Frank Mir', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1588, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 12.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'yan-xiaonan', name: 'Yan Xiaonan', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1588, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 63.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mairbek-taisumov', name: 'Mairbek Taisumov', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1588, daysInactive: 357, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'renato-moicano', name: 'Renato Moicano', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1588, daysInactive: 280, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.8, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'drakkar-klose', name: 'Drakkar Klose', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1587, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'katlyn-cerminara', name: 'Katlyn Cerminara', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1587, daysInactive: 504, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 81.4, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jake-matthews', name: 'Jake Matthews', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1587, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 42.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'robbie-lawler', name: 'Robbie Lawler', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1587, daysInactive: 371, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 68.4, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'julianna-pena', name: 'Julianna Pena', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1587, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 59.2, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'junyong-park', name: 'JunYong Park', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1587, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 49.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nate-diaz', name: 'Nate Diaz', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1586, daysInactive: 455, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 95.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jasmine-jasudavicius', name: 'Jasmine Jasudavicius', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1586, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.0, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'melquizael-costa', name: 'Melquizael Costa', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1586, daysInactive: 84, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.4, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'bryce-mitchell', name: 'Bryce Mitchell', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1586, daysInactive: 315, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 19.6, takedownSuccess: 2.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 44, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 88, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gilbert-burns', name: 'Gilbert Burns', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1585, daysInactive: 336, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 40.4, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'navajo-stirling', name: 'Navajo Stirling', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1585, daysInactive: 42, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 76.8, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'raoni-barcelos', name: 'Raoni Barcelos', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1585, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 54.0, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'muslim-salikhov', name: 'Muslim Salikhov', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1585, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tim-sylvia', name: 'Tim Sylvia', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1585, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 58.4, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'carla-esparza', name: 'Carla Esparza', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1584, daysInactive: 693, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.2, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'krzysztof-jotko', name: 'Krzysztof Jotko', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1584, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 49.8, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brandon-moreno', name: 'Brandon Moreno', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1584, daysInactive: 84, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 97.8, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'don-frye', name: 'Don Frye', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1584, daysInactive: 1194, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 33.4, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gregory-rodrigues', name: 'Gregory Rodrigues', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1584, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 63.4, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'martin-buday', name: 'Martin Buday', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1582, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 52.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'bo-nickal', name: 'Bo Nickal', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1582, daysInactive: 211, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.8, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jiri-prochazka', name: 'Jiri Prochazka', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1582, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 54.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cub-swanson', name: 'Cub Swanson', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1582, daysInactive: 483, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 61.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'omari-akhmedov', name: 'Omari Akhmedov', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1582, daysInactive: 171, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 38.2, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'christian-leroy-duncan', name: 'Christian Leroy Duncan', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1581, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 40.6, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ricardo-lamas', name: 'Ricardo Lamas', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1580, daysInactive: 448, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.0, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'raphael-assuncao', name: 'Raphael Assuncao', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1580, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 26.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rinat-fakhretdinov', name: 'Rinat Fakhretdinov', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1580, daysInactive: 315, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 63.6, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'manuel-torres', name: 'Manuel Torres', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1580, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 13.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mike-swick', name: 'Mike Swick', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1580, daysInactive: 945, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 16.6, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chepe-mariscal', name: 'Chepe Mariscal', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1580, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 67.6, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'roman-dolidze', name: 'Roman Dolidze', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 66.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chris-duncan', name: 'Chris Duncan', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'anthony-rocco-martin', name: 'Anthony Rocco Martin', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joe-pyfer', name: 'Joe Pyfer', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.8, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ryan-laflare', name: 'Ryan LaFlare', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brian-ortega', name: 'Brian Ortega', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 343, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 65.6, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'myles-jury', name: 'Myles Jury', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 218, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.0, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'david-teymur', name: 'David Teymur', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 246, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 54.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gunnar-nelson', name: 'Gunnar Nelson', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 735, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 18.8, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'marlon-vera', name: 'Marlon Vera', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1579, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 79.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'youssef-zalal', name: 'Youssef Zalal', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1578, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 26.0, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ludovit-klein', name: 'Ludovit Klein', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1578, daysInactive: 280, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 53.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'michael-mcdonald', name: 'Michael McDonald', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1578, daysInactive: 193, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 21.4, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'billy-evangelista', name: 'Billy Evangelista', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1577, daysInactive: 287, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mick-parkin', name: 'Mick Parkin', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1577, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 49.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'thiago-santos', name: 'Thiago Santos', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1577, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 47.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'uros-medic', name: 'Uros Medic', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1577, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 6.4, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 64, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 128, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'asu-almabayev', name: 'Asu Almabayev', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1577, daysInactive: 217, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.0, takedownSuccess: 3.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 64, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 128, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joanna-jedrzejczyk', name: 'Joanna Jedrzejczyk', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1577, daysInactive: 826, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 130.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nate-quarry', name: 'Nate Quarry', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1577, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.4, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'karo-parisyan', name: 'Karo Parisyan', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1576, daysInactive: 658, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 38.6, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jean-silva', name: 'Jean Silva', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1576, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'zabit-magomedsharipov', name: 'Zabit Magomedsharipov', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1576, daysInactive: 252, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 56.8, takedownSuccess: 5.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jim-miller', name: 'Jim Miller', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1576, daysInactive: 392, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 32.6, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jairzinho-rozenstruik', name: 'Jairzinho Rozenstruik', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1576, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 47.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jared-rosholt', name: 'Jared Rosholt', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1576, daysInactive: 84, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.8, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gregor-gillespie', name: 'Gregor Gillespie', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1575, daysInactive: 553, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 25.4, takedownSuccess: 3.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 72, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 144, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jacqueline-cavalcanti', name: 'Jacqueline Cavalcanti', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1575, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 84.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'al-iaquinta', name: 'Al Iaquinta', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1575, daysInactive: 763, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 58.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'edmen-shahbazyan', name: 'Edmen Shahbazyan', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1574, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 32.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'frank-shamrock', name: 'Frank Shamrock', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1574, daysInactive: 378, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.8, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dustin-jacoby', name: 'Dustin Jacoby', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1574, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 40.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alan-belcher', name: 'Alan Belcher', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1574, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 19.8, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tagir-ulanbekov', name: 'Tagir Ulanbekov', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1574, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.6, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'manel-kape', name: 'Manel Kape', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1574, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 64.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'elizeu-zaleski-dos-santos', name: 'Elizeu Zaleski dos Santos', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1574, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brian-stann', name: 'Brian Stann', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1574, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tony-ferguson', name: 'Tony Ferguson', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1573, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 46.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'miranda-maverick', name: 'Miranda Maverick', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1573, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.8, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dominick-reyes', name: 'Dominick Reyes', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1573, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'suyoung-you', name: 'SuYoung You', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1573, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.2, takedownSuccess: 3.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 76, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ikram-aliskerov', name: 'Ikram Aliskerov', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1573, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dan-severn', name: 'Dan Severn', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1573, daysInactive: 281, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 25.6, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'virna-jandiroba', name: 'Virna Jandiroba', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1573, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.2, takedownSuccess: 3.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 72, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 144, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'andre-lima', name: 'Andre Lima', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1572, daysInactive: 462, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 53.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'andre-muniz', name: 'Andre Muniz', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1572, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.8, takedownSuccess: 3.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 68, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 136, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alonzo-menifield', name: 'Alonzo Menifield', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1572, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 26.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'paul-felder', name: 'Paul Felder', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1572, daysInactive: 266, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 61.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'darren-elkins', name: 'Darren Elkins', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1572, daysInactive: 483, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 39.0, takedownSuccess: 3.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 64, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 128, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'khalil-rountree-jr.', name: 'Khalil Rountree Jr.', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1572, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 63.4, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'bryan-battle', name: 'Bryan Battle', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1572, daysInactive: 70, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rob-font', name: 'Rob Font', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 52.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brian-bowles', name: 'Brian Bowles', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 553, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 17.6, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ateba-gautier', name: 'Ateba Gautier', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tracy-cortez', name: 'Tracy Cortez', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 61.6, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'uriah-hall', name: 'Uriah Hall', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 336, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'evan-tanner', name: 'Evan Tanner', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 17.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tj-grant', name: 'TJ Grant', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 63.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kelvin-gastelum', name: 'Kelvin Gastelum', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 60.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'carlos-condit', name: 'Carlos Condit', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 36.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'roger-huerta', name: 'Roger Huerta', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1571, daysInactive: 403, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.8, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dustin-ortiz', name: 'Dustin Ortiz', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1570, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.4, takedownSuccess: 3.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 60, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 120, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'josh-koscheck', name: 'Josh Koscheck', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1570, daysInactive: 21, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 16.0, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'li-jingliang', name: 'Li Jingliang', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1570, daysInactive: 707, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'michel-pereira', name: 'Michel Pereira', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1570, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 33.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'stephen-thompson', name: 'Stephen Thompson', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1570, daysInactive: 280, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 53.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ricky-simon', name: 'Ricky Simon', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1570, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 39.8, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tito-ortiz', name: 'Tito Ortiz', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1570, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 16.2, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alexander-gustafsson', name: 'Alexander Gustafsson', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1569, daysInactive: 728, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.4, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nik-lentz', name: 'Nik Lentz', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1569, daysInactive: 364, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 54.8, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mackenzie-dern', name: 'Mackenzie Dern', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1569, daysInactive: 287, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 59.0, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ovince-saint-preux', name: 'Ovince Saint Preux', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1568, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'vitor-petrino', name: 'Vitor Petrino', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1568, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'vinicius-oliveira', name: 'Vinicius Oliveira', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1568, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 62.8, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'matt-mitrione', name: 'Matt Mitrione', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1568, daysInactive: 225, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 11.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'miguel-torres', name: 'Miguel Torres', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1568, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 38.4, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kazushi-sakuraba', name: 'Kazushi Sakuraba', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 267, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 6.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 64, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 128, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jamahal-hill', name: 'Jamahal Hill', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 84.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'raul-rosas-jr.', name: 'Raul Rosas Jr.', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 343, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 16.8, takedownSuccess: 2.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 56, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 112, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'leonardo-santos', name: 'Leonardo Santos', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kevin-lee', name: 'Kevin Lee', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 672, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 51.0, takedownSuccess: 2.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 56, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 112, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'geoff-neal', name: 'Geoff Neal', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 55.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jimmie-rivera', name: 'Jimmie Rivera', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 227, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'josh-hokit', name: 'Josh Hokit', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 64, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 62.5, takedownSuccess: 1.75, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 35, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 70, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'josh-emmett', name: 'Josh Emmett', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1567, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jack-hermansson', name: 'Jack Hermansson', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1566, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 87.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ricardo-almeida', name: 'Ricardo Almeida', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1566, daysInactive: 98, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.4, takedownSuccess: 5.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alejandro-perez', name: 'Alejandro Perez', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1566, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 32.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'aaron-simpson', name: 'Aaron Simpson', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1566, daysInactive: 86, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 52.6, takedownSuccess: 3.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 72, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 144, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sean-sherk', name: 'Sean Sherk', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1566, daysInactive: 490, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 52.0, takedownSuccess: 5.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'david-onama', name: 'David Onama', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1565, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 70.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'patrick-cote', name: 'Patrick Cote', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1565, daysInactive: 294, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 44.4, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alex-caceres', name: 'Alex Caceres', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1565, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'hayato-sakurai', name: 'Hayato Sakurai', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1565, daysInactive: 366, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alexander-hernandez', name: 'Alexander Hernandez', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1565, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.4, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jared-cannonier', name: 'Jared Cannonier', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1565, daysInactive: 336, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 101.2, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'paul-buentello', name: 'Paul Buentello', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1564, daysInactive: 99, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'james-vick', name: 'James Vick', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1564, daysInactive: 84, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.6, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'travis-browne', name: 'Travis Browne', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1564, daysInactive: 139, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 26.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jessica-andrade', name: 'Jessica Andrade', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1564, daysInactive: 98, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.4, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'daniel-marcos', name: 'Daniel Marcos', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1564, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 66.0, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'shane-carwin', name: 'Shane Carwin', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1564, daysInactive: 343, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'paulo-costa', name: 'Paulo Costa', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1564, daysInactive: 266, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 112.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'aleksander-emelianenko', name: 'Aleksander Emelianenko', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1564, daysInactive: 63, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 17.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alexia-thainara', name: 'Alexia Thainara', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1563, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 57.25, takedownSuccess: 3.75, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 75, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'marcin-tybura', name: 'Marcin Tybura', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1563, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mauricio-ruffy', name: 'Mauricio Ruffy', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1563, daysInactive: 134, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'matt-ricehouse', name: 'Matt Ricehouse', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 274, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 15.75, takedownSuccess: 0.5, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 10, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 20, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chris-padilla', name: 'Chris Padilla', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.75, takedownSuccess: 0.75, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 15, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 30, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jason-high', name: 'Jason High', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 1.6, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 16, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 32, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'diego-nunes', name: 'Diego Nunes', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 106, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 49.6, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nurullo-aliev', name: 'Nurullo Aliev', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 33.75, takedownSuccess: 1.75, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 35, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 70, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'justin-willis', name: 'Justin Willis', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 52.25, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'francis-carmont', name: 'Francis Carmont', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 84, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.6, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jussier-formiga', name: 'Jussier Formiga', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 84, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.2, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'william-gomis', name: 'William Gomis', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 54.4, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'loopy-godinez', name: 'Loopy Godinez', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 78.8, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'zak-cummings', name: 'Zak Cummings', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 959, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'shane-burgos', name: 'Shane Burgos', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 252, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 128.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'reinier-de-ridder', name: 'Reinier de Ridder', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.6, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mark-munoz', name: 'Mark Munoz', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1562, daysInactive: 77, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 14.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'thiago-tavares', name: 'Thiago Tavares', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 244, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 13.6, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tarec-saffiedine', name: 'Tarec Saffiedine', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 169, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 60.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'giga-chikadze', name: 'Giga Chikadze', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 66.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'caros-fodor', name: 'Caros Fodor', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 357, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 6.4, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 64, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 128, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'edson-barboza', name: 'Edson Barboza', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 70.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rafael-estevam', name: 'Rafael Estevam', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.5, takedownSuccess: 5.25, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ailin-perez', name: 'Ailin Perez', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 406, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 42.6, takedownSuccess: 4.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 88, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'denise-gomes', name: 'Denise Gomes', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 46.0, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'oleg-taktarov', name: 'Oleg Taktarov', category: 'Open Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 665, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 3.6, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 36, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 72, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kazuhiro-nakamura', name: 'Kazuhiro Nakamura', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 441, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 19.4, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'irene-aldana', name: 'Irene Aldana', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1561, daysInactive: 273, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 65.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'changho-lee', name: 'ChangHo Lee', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.75, takedownSuccess: 2.25, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 45, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 90, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ilir-latifi', name: 'Ilir Latifi', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.8, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jerry-bohlander', name: 'Jerry Bohlander', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 301, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 5.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 52, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 104, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'diego-lopes', name: 'Diego Lopes', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 134, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 72.4, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ignacio-bahamondes', name: 'Ignacio Bahamondes', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 280, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gray-maynard', name: 'Gray Maynard', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 456, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 18.8, takedownSuccess: 3.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 72, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 144, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chas-skelly', name: 'Chas Skelly', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 889, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.4, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'amir-albazi', name: 'Amir Albazi', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 462, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 44.6, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kurt-pellegrino', name: 'Kurt Pellegrino', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.6, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joanderson-brito', name: 'Joanderson Brito', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.6, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'wang-cong', name: 'Wang Cong', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 68.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nazim-sadykhov', name: 'Nazim Sadykhov', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1560, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.8, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tom-nolan', name: 'Tom Nolan', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 252, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 44.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'doug-marshall', name: 'Doug Marshall', category: 'WEC Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 18.75, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'josefine-knutsson', name: 'Josefine Knutsson', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 73.0, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'torrez-finney', name: 'Torrez Finney', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 301, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 18.5, takedownSuccess: 6.5, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mansur-abdul-malik', name: 'Mansur Abdul-Malik', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 26.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brian-ebersole', name: 'Brian Ebersole', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 252, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'thales-leites', name: 'Thales Leites', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.0, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ketlen-vieira', name: 'Ketlen Vieira', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nikita-krylov', name: 'Nikita Krylov', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1559, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.2, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'luana-santos', name: 'Luana Santos', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.6, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mark-kerr', name: 'Mark Kerr', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 2035, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 5.2, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 52, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 104, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'iuri-alcantara', name: 'Iuri Alcantara', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'frank-trigg', name: 'Frank Trigg', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.2, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'payton-talbott', name: 'Payton Talbott', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.6, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'john-dodson', name: 'John Dodson', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.8, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'damir-ismagulov', name: 'Damir Ismagulov', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 61.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'marquel-mederos', name: 'MarQuel Mederos', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 308, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 59.5, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kai-kara-france', name: 'Kai Kara-France', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 315, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.8, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'hyunsung-park', name: 'HyunSung Park', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 77, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 21.8, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'karl-williams', name: 'Karl Williams', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.0, takedownSuccess: 4.75, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 95, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'said-nurmagomedov', name: 'Said Nurmagomedov', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.8, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'shara-magomedov', name: 'Shara Magomedov', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 336, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 75.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ryan-couture', name: 'Ryan Couture', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1558, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 46.2, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'karine-silva', name: 'Karine Silva', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 32.4, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rodrigo-gracie', name: 'Rodrigo Gracie', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 279, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 25.25, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kyung-ho-kang', name: 'Kyung Ho Kang', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 54.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brunno-ferreira', name: 'Brunno Ferreira', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.4, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'santiago-ponzinibbio', name: 'Santiago Ponzinibbio', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 448, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 55.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alexa-grasso', name: 'Alexa Grasso', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 322, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 71.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brock-larson', name: 'Brock Larson', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 66, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 8.4, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 84, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sodiq-yusuff', name: 'Sodiq Yusuff', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 399, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 60.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mu-bae-choi', name: 'Mu Bae Choi', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1557, daysInactive: 51, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 15.75, takedownSuccess: 2.25, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 45, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 90, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tecia-pennington', name: 'Tecia Pennington', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1556, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 88.6, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jack-shore', name: 'Jack Shore', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1556, daysInactive: 182, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 46.6, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ricco-rodriguez', name: 'Ricco Rodriguez', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1556, daysInactive: 149, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 14.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joselyne-edwards', name: 'Joselyne Edwards', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1556, daysInactive: 63, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 36.6, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sergio-moraes', name: 'Sergio Moraes', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 189, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'yizha', name: 'Yizha', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'johnny-walker', name: 'Johnny Walker', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 39.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jordan-leavitt', name: 'Jordan Leavitt', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 10.8, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'erik-perez', name: 'Erik Perez', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 98, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 36.4, takedownSuccess: 3.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 64, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 128, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jon-madsen', name: 'Jon Madsen', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 28.25, takedownSuccess: 1.25, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 25, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 50, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tyson-griffin', name: 'Tyson Griffin', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 125, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 38.8, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'constantinos-philippou', name: 'Constantinos Philippou', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 371, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 19.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'miesha-tate', name: 'Miesha Tate', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 518, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 65.0, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'john-moraga', name: 'John Moraga', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1555, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 34.8, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ray-borg', name: 'Ray Borg', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1554, daysInactive: 88, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.2, takedownSuccess: 5.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 100, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kyler-phillips', name: 'Kyler Phillips', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1554, daysInactive: 273, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 70.6, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'askar-askarov', name: 'Askar Askarov', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1554, daysInactive: 385, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.5, takedownSuccess: 2.75, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 55, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 110, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'gleison-tibau', name: 'Gleison Tibau', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1554, daysInactive: 132, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 15.0, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'melvin-guillard', name: 'Melvin Guillard', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1554, daysInactive: 133, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.4, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alberto-mina', name: 'Alberto Mina', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1554, daysInactive: 674, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 39.67, takedownSuccess: 1.33, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 26, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 52, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'eric-lawson', name: 'Eric Lawson', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1554, daysInactive: 337, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 0.8, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 8, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 16, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cezar-ferreira', name: 'Cezar Ferreira', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1554, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 19.8, takedownSuccess: 2.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 52, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 104, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'matheus-nicolau', name: 'Matheus Nicolau', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 31.2, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brock-lesnar', name: 'Brock Lesnar', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 1653, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.2, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jacob-volkmann', name: 'Jacob Volkmann', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 120, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 8.6, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 86, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cb-dollaway', name: 'CB Dollaway', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 25.8, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rinya-nakamura', name: 'Rinya Nakamura', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 196, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.6, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'darren-till', name: 'Darren Till', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 462, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'cody-garbrandt', name: 'Cody Garbrandt', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 23.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mike-russow', name: 'Mike Russow', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 217, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 14.6, takedownSuccess: 3.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 68, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 136, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'shawn-jordan', name: 'Shawn Jordan', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 119, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 16.8, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'myktybek-orolbai', name: 'Myktybek Orolbai', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1553, daysInactive: 112, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.2, takedownSuccess: 3.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 68, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 136, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'joachim-hansen', name: 'Joachim Hansen', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1552, daysInactive: 118, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'matthew-riddle', name: 'Matthew Riddle', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1552, daysInactive: 91, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.6, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'casey-kenney', name: 'Casey Kenney', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1552, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 76.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'adrian-yanez', name: 'Adrian Yanez', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1552, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 46.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'dennis-siver', name: 'Dennis Siver', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1552, daysInactive: 736, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 33.4, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'diego-ferreira', name: 'Diego Ferreira', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1552, daysInactive: 329, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.6, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'daniel-santos', name: 'Daniel Santos', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1552, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 57.0, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kevin-holland', name: 'Kevin Holland', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1552, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'ryan-hall', name: 'Ryan Hall', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 154, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'bogdan-guskov', name: 'Bogdan Guskov', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 38.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chan-sung-jung', name: 'Chan Sung Jung', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 504, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 52.8, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'matt-lindland', name: 'Matt Lindland', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 197, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 26.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mark-madsen', name: 'Mark Madsen', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 371, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.8, takedownSuccess: 2.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 48, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 96, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'hiroyuki-takaya', name: 'Hiroyuki Takaya', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 366, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 57.2, takedownSuccess: 1.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 32, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 64, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'karol-rosa', name: 'Karol Rosa', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 322, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 94.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'brandon-vera', name: 'Brandon Vera', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 392, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 30.2, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'paul-daley', name: 'Paul Daley', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1551, daysInactive: 217, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 15.4, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'abel-trujillo', name: 'Abel Trujillo', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 315, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 13.0, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'loma-lookboonmee', name: 'Loma Lookboonmee', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 37.0, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'kevin-vallejos', name: 'Kevin Vallejos', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 91, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.6, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'holly-holm', name: 'Holly Holm', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 273, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 67.8, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'evan-dunham', name: 'Evan Dunham', category: 'Catch Weight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 623, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 67.2, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'chris-curtis', name: 'Chris Curtis', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 245, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 99.2, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'seokhyeon-ko', name: 'Seokhyeon Ko', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 259, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.0, takedownSuccess: 4.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 80, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 150, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'marcus-davis', name: 'Marcus Davis', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 29.8, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'michal-oleksiejczuk', name: 'Michal Oleksiejczuk', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 56.4, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'claudia-gadelha', name: 'Claudia Gadelha', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.2, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jose-delgado', name: 'Jose Delgado', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 59.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'sarah-kaufman', name: 'Sarah Kaufman', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1550, daysInactive: 238, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 98.0, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'taila-santos', name: 'Taila Santos', category: 'Women's Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 441, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 44.8, takedownSuccess: 2.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 56, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 112, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'david-martinez', name: 'David Martinez', category: 'Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 56.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rashid-magomedov', name: 'Rashid Magomedov', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 161, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 64.2, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'justin-wilcox', name: 'Justin Wilcox', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 22.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'mairon-santos', name: 'Mairon Santos', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 203, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 43.0, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'nursulton-ruziboev', name: 'Nursulton Ruziboev', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 406, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 20.8, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'amanda-lemos', name: 'Amanda Lemos', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 147, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 24.0, takedownSuccess: 1.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 24, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 48, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'vladimir-matyushenko', name: 'Vladimir Matyushenko', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 393, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 12.0, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'takanori-gomi', name: 'Takanori Gomi', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 97, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 27.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'lorenz-larkin', name: 'Lorenz Larkin', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 83, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rafa-garcia', name: 'Rafa Garcia', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 224, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 70.0, takedownSuccess: 2.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 40, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 80, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'roger-gracie', name: 'Roger Gracie', category: 'Middleweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 17.6, takedownSuccess: 1.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 20, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 40, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'edimilson-souza', name: 'Edimilson Souza', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 231, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 45.33, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'jonathan-micallef', name: 'Jonathan Micallef', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1549, daysInactive: 91, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.0, takedownSuccess: 0.67, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 13, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 26, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'thiago-alves', name: 'Thiago Alves', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 210, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 61.8, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'luana-carolina', name: 'Luana Carolina', category: 'Women's Bantamweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 434, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 73.0, takedownSuccess: 0.6, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 12, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 24, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'albert-tumenov', name: 'Albert Tumenov', category: 'Welterweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 153, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 41.8, takedownSuccess: 0.0, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 0, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 0, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'rodrigo-nascimento', name: 'Rodrigo Nascimento', category: 'Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 175, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 50.0, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'esteban-ribovics', name: 'Esteban Ribovics', category: 'Lightweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 252, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 109.0, takedownSuccess: 0.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 8, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 16, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'muhammad-naimov', name: 'Muhammad Naimov', category: 'Featherweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 168, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 25.8, takedownSuccess: 1.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 36, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 72, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'anthony-smith', name: 'Anthony Smith', category: 'Light Heavyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 140, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 44.2, takedownSuccess: 0.2, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 4, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 8, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'tabatha-ricci', name: 'Tabatha Ricci', category: 'Women's Strawweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 105, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 48.2, takedownSuccess: 1.4, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 28, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 56, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
  {
    id: 'alex-perez', name: 'Alex Perez', category: 'Flyweight', record: '0-0-0', country: 'Desconhecido', flag: '🏳️',
    age: 30, heightCm: 175, reachCm: 180, weightKg: 70, elo: 1548, daysInactive: 126, winRate: 0.5, finishRate: 0.1,
    strikingLanded: 35.6, takedownSuccess: 0.8, knockdownRate: 0.1,
    stats: { striking: 100, takedown: 16, titleFights: 0 },
    radar: [
      { subject: 'Volume Golpe', A: 150, fullMark: 150 }, { subject: 'Força', A: 60, fullMark: 150 },
      { subject: 'Wrestling', A: 32, fullMark: 150 }, { subject: 'Jiu-Jitsu', A: 50, fullMark: 150 },
      { subject: 'Cardio', A: 100, fullMark: 150 }, { subject: 'Defesa', A: 140, fullMark: 150 },
    ]
  },
];
