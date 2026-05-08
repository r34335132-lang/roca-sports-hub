import { standings, upcoming } from "@/lib/mock-data";
import { Bell, Search } from "lucide-react";

export function RightPanel() {
  return (
    <aside className="hidden xl:flex flex-col gap-5 sticky top-0 h-screen overflow-y-auto p-6 border-l border-border bg-card">
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center gap-2 bg-elevated border border-border rounded-xl px-3 py-2">
          <Search size={14} className="text-muted-foreground" />
          <input className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground" placeholder="Buscar equipo, jugador..." />
        </div>
        <button className="h-9 w-9 grid place-items-center rounded-xl bg-elevated border border-border hover:bg-card transition relative">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>
      </div>

      <div className="rounded-2xl border border-border bg-elevated p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="label-eyebrow">TABLA</div>
          <span className="text-[10px] text-muted-foreground">Liga Roca · J14</span>
        </div>
        <div className="grid grid-cols-[20px_1fr_28px_28px_36px] gap-2 text-[10px] text-muted-foreground font-bold mb-2 px-1">
          <span>#</span><span>EQUIPO</span><span className="text-right">PJ</span><span className="text-right">DIF</span><span className="text-right">PTS</span>
        </div>
        <div className="space-y-1">
          {standings.map((s) => (
            <div key={s.pos} className="grid grid-cols-[20px_1fr_28px_28px_36px] gap-2 items-center py-1.5 px-1 rounded-lg hover:bg-card transition text-sm">
              <span className={["font-black tabular-nums", s.pos <= 3 ? "text-primary" : "text-muted-foreground"].join(" ")}>{s.pos}</span>
              <span className="flex items-center gap-2 truncate">
                <span className="text-base">{s.team.logo}</span>
                <span className="font-semibold truncate">{s.team.short}</span>
              </span>
              <span className="text-right text-muted-foreground tabular-nums">{s.pj}</span>
              <span className="text-right text-muted-foreground tabular-nums">{s.dif}</span>
              <span className="text-right font-black tabular-nums">{s.pts}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-elevated p-5">
        <div className="label-eyebrow mb-4">PRÓXIMOS</div>
        <div className="space-y-4">
          {upcoming.map((u) => (
            <div key={u.id} className="group cursor-pointer">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[10px] tracking-widest text-muted-foreground font-bold uppercase">{u.league}</div>
                <div className="text-[10px] font-bold text-primary">{u.date}</div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-base">{u.home.logo}</span>
                <span className="font-semibold flex-1 truncate">{u.home.short}</span>
                <span className="text-muted-foreground text-xs">vs</span>
                <span className="font-semibold flex-1 text-right truncate">{u.away.short}</span>
                <span className="text-base">{u.away.logo}</span>
              </div>
              <div className="h-px bg-border mt-3 group-last:hidden" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 to-transparent p-5">
        <div className="label-eyebrow text-foreground/80">PARTIDO DEL DÍA</div>
        <div className="font-black text-xl mt-2 leading-tight">Tigres vs Halcones</div>
        <p className="text-xs text-muted-foreground mt-1">El clásico regiomontano en exclusiva por Roca Pass.</p>
        <button className="mt-4 w-full text-sm font-semibold bg-primary text-primary-foreground rounded-lg py-2 hover:brightness-110 transition">
          Activar recordatorio
        </button>
      </div>
    </aside>
  );
}
