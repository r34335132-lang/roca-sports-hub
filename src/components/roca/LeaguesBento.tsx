import { leagues } from "@/lib/mock-data";
import { ArrowUpRight } from "lucide-react";

export function LeaguesBento() {
  return (
    <section>
      <div className="mb-4">
        <div className="label-eyebrow">EXPLORA</div>
        <h2 className="text-2xl font-black mt-1">Ligas Roca</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px]">
        {leagues.map((l, i) => (
          <div
            key={l.name}
            className={[
              "relative overflow-hidden rounded-2xl border border-border bg-card p-5 card-hover group",
              l.featured ? "col-span-2 row-span-2" : "",
              i === 1 ? "col-span-2 md:col-span-2" : "",
            ].join(" ")}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${l.color} opacity-80`} />
            <div className="relative flex flex-col h-full">
              <div className="text-5xl mb-auto">{l.icon}</div>
              <div>
                <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase">{l.teams} equipos</div>
                <div className="flex items-center justify-between mt-1">
                  <h3 className={l.featured ? "text-3xl font-black" : "text-base font-bold"}>{l.name}</h3>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition" size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
