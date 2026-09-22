export interface PredictionFeatures {
  delta_elo: number;
  delta_days_inactive: number;
  delta_streak: number;
  delta_win_rate: number;
  delta_finish_rate: number;
  delta_experience: number;
  delta_height: number;
  delta_reach: number;
  delta_age: number;
  r_age_over35: number;
  b_age_over35: number;
  stance_matchup: number;
  delta_roll_sig_landed: number;
  delta_roll_sig_atmp: number;
  delta_roll_kd: number;
  delta_roll_td_success: number;
  delta_roll_td_atmp: number;
  delta_roll_sub_att: number;
  delta_roll_ctrl_seconds: number;
  delta_roll_sig_str_landed_head: number;
  delta_roll_sig_str_landed_body: number;
  delta_roll_sig_str_landed_leg: number;
  delta_roll_sig_str_landed_distance: number;
  delta_roll_sig_str_landed_clinch: number;
  delta_roll_sig_str_landed_ground: number;
  delta_roll_total_str_landed: number;
}

export interface PredictRequest {
  features: PredictionFeatures;
}

export interface PredictResponse {
  fighter_a_win_probability: number;
  fighter_b_win_probability: number;
  key_factors: string[];
}

export interface Fighter {
  id: number;
  name: string;
}

// Projecao leve usada nas listagens/seletores (vem de GET /api/v1/fighters).
export interface FighterLight {
  id: string;
  name: string;
  category: string;
  record: string;
  elo: number;
  country: string;
  flag: string;
}

// Perfil completo (vem de GET /api/v1/fighters/{id}).
export interface FighterBase extends FighterLight {
  age: number;
  heightCm: number;
  reachCm: number;
  weightKg: number;
  stance: string;
  daysInactive: number;
  streak: number;
  numFights: number;
  winRate: number;
  finishRate: number;
  strikingLanded: number;
  takedownSuccess: number;
  knockdownRate: number;
  ctrlSeconds: number;
  subAtt: number;
  tdAtmp: number;
  stats: { striking: number; takedown: number; titleFights: number };
  radar: { subject: string; A: number; fullMark: number }[];
}

export interface FighterListResponse {
  total: number;
  limit: number;
  offset: number;
  items: FighterLight[];
}

export interface Event {
  id: number;
  name: string;
  date: string;
}
