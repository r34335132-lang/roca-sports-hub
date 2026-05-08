import { heroMatch } from "@/lib/mock-data";
import { MapPin, Users } from "lucide-react";

export function HeroMatch() {
  const m = heroMatch;
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card card-hover">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(80% 100% at 0% 0%, ${m.home.color}25, transparent 55%), radial-gradient(80% 100% at 100% 100%, ${m.away.color}25, transparent 55%), linear-gradient(180deg, #141416 0%, #1C1C1E 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(225,6,0,0.18),transparent_60%)]" />

      <div className="relative p-8 md:p-10">
        <div className="flex items-center justify-between">
          <div className="label-eyebrow">{m.league}</div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/40">
            <span className="h-2 w-2 rounded-full bg-primary animate-live-pulse" />
            <span className="text-xs font-bold tracking-wider">EN VIVO · {m.minute}</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div
              className="h-20 w-20 md:h-24 md:w-24 rounded-2xl grid place-items-center text-5xl border border-border"
              style={{ background: `linear-gradient(135deg, ${m.home.color}40, transparent)` }}
            >
              {m.home.logo}
            </div>
            <div className="text-center md:text-left">
              <div className="text-xs text-muted-foreground">LOCAL</div>
              <div className="font-bold text-lg leading-tight">{m.home.name}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="text-6xl md:text-8xl font-black tabular-nums leading-none">{m.scoreHome}</div>
            <div className="text-2xl md:text-3xl text-muted-foreground font-light">:</div>
            <div className="text-6xl md:text-8xl font-black tabular-nums leading-none">{m.scoreAway}</div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div
              className="h-20 w-20 md:h-24 md:w-24 rounded-2xl grid place-items-center text-5xl border border-border"
              style={{ background: `linear-gradient(135deg, ${m.away.color}40, transparent)` }}
            >
              {m.away.logo}
            </div>
            <div className="text-center md:text-right">
              <div className="text-xs text-muted-foreground">VISITA</div>
              <div className="font-bold text-lg leading-tight">{m.away.name}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin size={14} /> {m.venue}</div>
            <div className="flex items-center gap-2"><Users size={14} /> {m.attendance} asistentes</div>
          </div>
          <div className="flex gap-2">
            <button className="text-sm font-semibold bg-primary text-primary-foreground rounded-xl px-4 py-2 hover:brightness-110 transition">Ver en vivo</button>
            <button className="text-sm font-semibold bg-elevated border border-border rounded-xl px-4 py-2 hover:bg-card transition">Estadísticas</button>
          </div>
        </div>
      </div>
    </div>
  );
}
