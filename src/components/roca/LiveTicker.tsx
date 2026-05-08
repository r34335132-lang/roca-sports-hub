import { ticker } from "@/lib/mock-data";

export function LiveTicker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
      <div className="absolute left-0 top-0 bottom-0 z-10 px-4 flex items-center gap-2 bg-primary text-primary-foreground font-bold text-xs tracking-wider">
        <span className="h-2 w-2 rounded-full bg-white animate-live-pulse" />
        LIVE
      </div>
      <div className="absolute left-20 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap py-3 pl-24">
        {items.map((t, i) => (
          <span key={i} className="text-sm text-muted-foreground px-6 border-r border-border last:border-0">
            <span className="text-foreground font-semibold">·</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
