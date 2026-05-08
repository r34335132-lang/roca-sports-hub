import { Menu, Search, Bell } from "lucide-react";

export function MobileTopBar() {
  return (
    <header className="lg:hidden sticky top-0 z-30 glass border-b border-border px-4 py-3 flex items-center justify-between">
      <button className="h-9 w-9 grid place-items-center rounded-xl bg-elevated border border-border">
        <Menu size={18} />
      </button>
      <div className="leading-none text-center">
        <div className="text-xl font-black tracking-tighter">ROCA</div>
        <div className="text-[10px] font-black tracking-[-0.05em] text-primary -mt-0.5">SPORTS.</div>
      </div>
      <div className="flex gap-2">
        <button className="h-9 w-9 grid place-items-center rounded-xl bg-elevated border border-border"><Search size={16} /></button>
        <button className="h-9 w-9 grid place-items-center rounded-xl bg-elevated border border-border relative">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>
      </div>
    </header>
  );
}
