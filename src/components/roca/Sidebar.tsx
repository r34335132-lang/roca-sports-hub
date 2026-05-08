import { Link } from "@tanstack/react-router";
import { LayoutDashboard, Trophy, ListOrdered, User, Radio, Newspaper, Calendar, Settings } from "lucide-react";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "En Vivo", icon: Radio, to: "/", badge: 4 },
  { label: "Marcadores", icon: Trophy, to: "/" },
  { label: "Ligas", icon: ListOrdered, to: "/" },
  { label: "Calendario", icon: Calendar, to: "/" },
  { label: "Noticias", icon: Newspaper, to: "/" },
  { label: "Perfil", icon: User, to: "/" },
  { label: "Ajustes", icon: Settings, to: "/" },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col gap-2 sticky top-0 h-screen w-full bg-card border-r border-border p-6">
      <div className="mb-8 leading-none select-none">
        <div className="text-5xl font-black tracking-tighter text-foreground">ROCA</div>
        <div className="text-2xl font-black tracking-[-0.05em] text-primary -mt-1">SPORTS.</div>
        <div className="mt-3 h-1 w-10 bg-primary rounded-full" />
      </div>

      <div className="label-eyebrow mb-2 px-3">Navegación</div>
      <nav className="flex flex-col gap-1">
        {nav.map((item, i) => {
          const Icon = item.icon;
          const active = i === 0;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={[
                "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-primary/15 text-foreground border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-elevated border border-transparent",
              ].join(" ")}
            >
              <Icon className={["h-4.5 w-4.5", active ? "text-primary" : ""].join(" ")} size={18} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-bold bg-primary text-primary-foreground rounded-full px-1.5 py-0.5">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-border bg-elevated p-4">
        <div className="label-eyebrow">Premium</div>
        <div className="font-bold mt-1">Roca Pass</div>
        <p className="text-xs text-muted-foreground mt-1">Sin anuncios y partidos exclusivos en HD.</p>
        <button className="mt-3 w-full text-sm font-semibold bg-primary text-primary-foreground rounded-lg py-2 hover:brightness-110 transition">
          Probar 7 días
        </button>
      </div>
    </aside>
  );
}
