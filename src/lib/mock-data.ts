export type Team = { name: string; short: string; logo: string; color: string };

const t = (name: string, short: string, color: string, logo: string): Team => ({ name, short, color, logo });

export const teams = {
  tigres: t("Tigres del Norte", "TIG", "#F59E0B", "🐯"),
  halcones: t("Halcones FC", "HAL", "#3B82F6", "🦅"),
  pumas: t("Pumas Roca", "PUM", "#EAB308", "🐆"),
  toros: t("Toros Salvajes", "TOR", "#DC2626", "🐂"),
  lobos: t("Lobos del Valle", "LOB", "#6B7280", "🐺"),
  aguilas: t("Águilas Doradas", "AGU", "#FACC15", "🦅"),
  panteras: t("Panteras Flag", "PAN", "#A855F7", "🐈"),
  cobras: t("Cobras Femenil", "COB", "#10B981", "🐍"),
  truenos: t("Truenos BC", "TRU", "#EF4444", "⚡"),
  reyes: t("Reyes Capital", "REY", "#0EA5E9", "👑"),
};

export const heroMatch = {
  league: "LIGA ROCA - JORNADA 14",
  status: "live" as const,
  minute: "67'",
  home: teams.tigres,
  away: teams.halcones,
  scoreHome: 2,
  scoreAway: 1,
  venue: "Estadio Roca, Monterrey",
  attendance: "12,480",
};

export const liveMatches = [
  { id: 1, league: "Fútbol Dominical", home: teams.pumas, away: teams.toros, sh: 1, sa: 1, min: "34'", live: true },
  { id: 2, league: "Flag Femenil", home: teams.cobras, away: teams.panteras, sh: 21, sa: 14, min: "Q3", live: true },
  { id: 3, league: "Basquetbol Roca", home: teams.truenos, away: teams.reyes, sh: 78, sa: 71, min: "Q4 4:32", live: true },
  { id: 4, league: "Liga Juvenil", home: teams.lobos, away: teams.aguilas, sh: 0, sa: 0, min: "12'", live: true },
];

export const ticker = [
  "GOL — Tigres 2-1 Halcones (M. Reyes 65')",
  "TD — Cobras 21-14 Panteras (L. Ruiz)",
  "Triple — Truenos +7 sobre Reyes",
  "Tarjeta roja — Lobos vs Águilas",
  "Final — Pumas 3-2 Toros",
  "Inicia 2do tiempo en Estadio Roca",
  "Récord: Halcones suman 5 sin perder",
];

export const news = [
  { id: 1, tag: "FICHAJE", title: "Tigres asegura a delantero argentino por 2 temporadas", time: "hace 12 min" },
  { id: 2, tag: "ANÁLISIS", title: "Por qué Halcones es el equipo a vencer este otoño", time: "hace 1 h" },
  { id: 3, tag: "FLAG", title: "Cobras Femenil clasifica al campeonato regional", time: "hace 3 h" },
  { id: 4, tag: "BASQUET", title: "Truenos rompe racha invicta de Reyes en el Coloso", time: "hace 5 h" },
];

export const standings = [
  { pos: 1, team: teams.halcones, pj: 14, pts: 32, dif: "+18" },
  { pos: 2, team: teams.tigres, pj: 14, pts: 30, dif: "+15" },
  { pos: 3, team: teams.pumas, pj: 14, pts: 27, dif: "+9" },
  { pos: 4, team: teams.toros, pj: 14, pts: 22, dif: "+3" },
  { pos: 5, team: teams.aguilas, pj: 14, pts: 19, dif: "-2" },
  { pos: 6, team: teams.lobos, pj: 14, pts: 14, dif: "-11" },
];

export const upcoming = [
  { id: 1, league: "Liga Roca", home: teams.pumas, away: teams.halcones, date: "Sáb 18:00" },
  { id: 2, league: "Flag Femenil", home: teams.panteras, away: teams.cobras, date: "Dom 11:00" },
  { id: 3, league: "Basquetbol", home: teams.reyes, away: teams.truenos, date: "Dom 19:30" },
  { id: 4, league: "Juvenil", home: teams.aguilas, away: teams.lobos, date: "Lun 20:00" },
];

export const leagues = [
  { name: "Fútbol Dominical", teams: 18, color: "from-red-600/30 to-orange-500/10", icon: "⚽", featured: true },
  { name: "Flag Femenil", teams: 12, color: "from-fuchsia-600/30 to-pink-500/10", icon: "🏈" },
  { name: "Basquetbol Roca", teams: 10, color: "from-blue-600/30 to-cyan-500/10", icon: "🏀" },
  { name: "Liga Juvenil", teams: 24, color: "from-amber-500/30 to-yellow-500/10", icon: "🥇" },
  { name: "Voleibol Mixto", teams: 8, color: "from-emerald-600/30 to-teal-500/10", icon: "🏐" },
];
