import { news } from "@/lib/mock-data";

export function NewsList() {
  return (
    <section>
      <div className="mb-4">
        <div className="label-eyebrow">REDACCIÓN</div>
        <h2 className="text-2xl font-black mt-1">Últimas noticias</h2>
      </div>
      <div className="grid gap-3">
        {news.map((n) => (
          <article key={n.id} className="rounded-2xl border border-border bg-card p-5 card-hover flex items-start gap-4">
            <div className="h-14 w-14 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center text-primary font-black text-xs">
              {n.tag}
            </div>
            <div className="flex-1">
              <h3 className="font-bold leading-snug">{n.title}</h3>
              <div className="text-xs text-muted-foreground mt-1">{n.time}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
