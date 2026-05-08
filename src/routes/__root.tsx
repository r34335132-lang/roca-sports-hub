import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PanelRightClose, PanelRightOpen, Menu, X } from "lucide-react";

// Asegúrate de tener estos componentes creados en tu proyecto
import { Sidebar } from "@/components/roca/Sidebar";
import { RightPanel } from "@/components/roca/RightPanel";

import appCss from "../styles.css?url";

// --- COMPONENTES DE ERROR PERSONALIZADOS A LA MARCA ---
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Página no encontrada</h2>
        <p className="mt-2 text-sm text-[#8E8E93]">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[#E10600] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#B00400]"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          Esta página no cargó
        </h1>
        <p className="mt-2 text-sm text-[#8E8E93]">
          Algo salió mal de nuestro lado. Puedes intentar recargar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-[#E10600] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#B00400]"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-[#3A3A3C] bg-[#1C1C1E] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2C2C2E]"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

// --- CONFIGURACIÓN DE LA RUTA RAÍZ ---
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Roca Sports | Portal Deportivo" },
      { name: "description", content: "Plataforma premium de cobertura deportiva." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// --- EL CASCARÓN DE LA APP (LAYOUT RESPONSIVO) ---
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Escuchar el tamaño de la pantalla para colapsar paneles en celulares
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1024) {
        setIsRightPanelOpen(false);
        setIsSidebarOpen(false);
      } else {
        setIsRightPanelOpen(true);
        setIsSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen bg-[#0B0B0B] text-white overflow-hidden relative">
        
        {/* 1. BARRA LATERAL (SIDEBAR) RESPONSIVA */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm" 
            onClick={() => setIsSidebarOpen(false)} 
          />
        )}
        <div className={`fixed lg:relative top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 bg-[#1C1C1E] border-r border-[#3A3A3C] w-[260px] ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button 
            className="absolute top-4 right-4 lg:hidden text-[#8E8E93] hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </button>
          <Sidebar />
        </div>

        {/* 2. ÁREA CENTRAL PRINCIPAL (Donde van las noticias y marcadores) */}
        <div className="flex-1 flex flex-col overflow-hidden relative z-10">
          
          {/* Luz roja de escenario de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-[#E10600]/5 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Header de Celular (Se oculta automáticamente en PC) */}
          <div className="lg:hidden flex items-center justify-between p-4 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#3A3A3C] z-20">
            <button onClick={() => setIsSidebarOpen(true)} className="text-white p-2">
              <Menu size={24} />
            </button>
            <div className="flex flex-col items-center">
              <span className="font-black text-xl tracking-tighter leading-none">ROCA</span>
              <span className="font-black text-sm tracking-tighter text-[#E10600] leading-none">SPORTS<span className="text-[#E10600]">.</span></span>
            </div>
            <button 
              onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
              className="p-2 text-[#E10600]"
            >
              <PanelRightOpen size={24} />
            </button>
          </div>

          {/* Botón flotante para ocultar/mostrar estadísticas en PC */}
          <button 
            onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
            className="hidden lg:flex absolute top-6 right-6 z-50 p-2.5 bg-[#1C1C1E]/80 hover:bg-[#2C2C2E] border border-[#3A3A3C] rounded-full backdrop-blur-md transition-all shadow-lg text-[#8E8E93] hover:text-white"
            title={isRightPanelOpen ? "Ocultar Estadísticas" : "Mostrar Estadísticas"}
          >
            {isRightPanelOpen ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
          </button>

          {/* Aquí se inyectan las demás páginas */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-8">
            <Outlet />
          </div>
        </div>

        {/* 3. PANEL DERECHO DE ESTADÍSTICAS (Colapsable) */}
        <div 
          className={`
            fixed lg:relative right-0 top-0 h-full z-40
            transition-all duration-300 ease-in-out
            border-l border-[#3A3A3C] bg-[#1C1C1E]/95 lg:bg-[#1C1C1E]/40 backdrop-blur-xl
            ${isRightPanelOpen 
              ? 'translate-x-0 w-[85%] sm:w-[350px] lg:w-[320px]' 
              : 'translate-x-full w-0 lg:min-w-0 border-l-0'}
          `}
        >
          {/* Botón para cerrar en celular */}
          <button 
            onClick={() => setIsRightPanelOpen(false)}
            className="lg:hidden absolute top-4 left-4 p-2 bg-[#3A3A3C] rounded-full text-white z-50"
          >
            <PanelRightClose size={20} />
          </button>
          
          <div className={`h-full w-full overflow-y-auto ${!isRightPanelOpen && 'hidden'}`}>
             <RightPanel />
          </div>
        </div>

        {/* Overlay oscuro para móvil al abrir estadísticas */}
        {isRightPanelOpen && (
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsRightPanelOpen(false)}
          />
        )}

      </div>
    </QueryClientProvider>
  );
}
