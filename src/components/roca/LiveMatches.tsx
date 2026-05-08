import { liveMatches } from "@/lib/mock-data";
import { ChevronRight } from "lucide-react";

export function LiveMatches() {
  return (
    <section>
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="label-eyebrow">EN JUEGO</div>
          <h2 className="text-2xl font-black mt-1">Partidos en vivo</h2>
        </div>
        <button className="text-xs font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
          Ver todo <ChevronRight size={14} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {liveMatches.map((m) => (
          <div key={m.id} className="rounded-2xl border border-border bg-card p-5 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[10px] tracking-widest text-muted-foreground font-bold uppercase">{m.league}</div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-live-pulse" />
                {m.min}
              </div>
            </div>
            <div className="space-y-3">
              <Row team={m.home} score={m.sh} winner={m.sh > m.sa} />
              <Row team={m.away} score={m.sa} winner={m.sa > m.sh} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Row({ team, score, winner }: { team: { name: string; logo: string; color: string }; score: number; winner: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-9 w-9 rounded-lg grid place-items-center text-xl border border-border"
        style={{ background: `${team.color}25` }}
      >
        {team.logo}
      </div>
      <div className={["flex-1 text-sm font-semibold", winner ? "text-foreground" : "text-muted-foreground"].join(" ")}>
        {team.name}
      </div>
      <div className={["text-2xl font-black tabular-nums", winner ? "text-foreground" : "text-muted-foreground"].join(" ")}>
        {score}
      </div>
    </div>
  );
}
