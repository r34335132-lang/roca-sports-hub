import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/roca/Sidebar";
import { RightPanel } from "@/components/roca/RightPanel";
import { HeroMatch } from "@/components/roca/HeroMatch";
import { LiveTicker } from "@/components/roca/LiveTicker";
import { LiveMatches } from "@/components/roca/LiveMatches";
import { LeaguesBento } from "@/components/roca/LeaguesBento";
import { NewsList } from "@/components/roca/NewsList";
import { MobileTopBar } from "@/components/roca/MobileTopBar";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Roca Sports — Cobertura deportiva local en vivo" },
      { name: "description", content: "Marcadores en vivo, ligas locales, fútbol, flag femenil y basquetbol. Roca Sports, tu portal deportivo regional." },
    ],
  }),
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <MobileTopBar />
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_360px] min-h-screen">
        <Sidebar />
        <main className="relative px-4 md:px-8 py-6 md:py-8">
          <div className="absolute inset-0 stage-lighting pointer-events-none" />
          <div className="relative max-w-5xl mx-auto flex flex-col gap-8 animate-fade-in">
            <div>
              <div className="label-eyebrow">ESTELAR</div>
              <h1 className="text-3xl md:text-4xl font-black mt-1 mb-5">Partido del momento</h1>
              <HeroMatch />
            </div>
            <LiveTicker />
            <LiveMatches />
            <LeaguesBento />
            <NewsList />
            <footer className="pt-6 pb-4 text-xs text-muted-foreground flex justify-between border-t border-border">
              <span>© Roca Sports {new Date().getFullYear()}</span>
              <span>Hecho con pasión en MTY</span>
            </footer>
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  );
}
