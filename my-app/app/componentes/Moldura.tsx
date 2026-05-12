"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { File, Home, Settings} from "lucide-react";
import Link from "next/link";

export default function Moldura({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Projetos", href: "/projetos", icon: File },
    { name: "Configurações", href: "/configuracoes", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar - Largura fixa de 76px */}
      <aside className="w-[76px] bg-white text-gray-400 flex flex-col items-center py-6 fixed h-full z-20 border-r border-slate-200">
        
        {/* Logo Curta ou Ícone no topo */}
        <div className="mb-10 font-bold text-xl text-blue-400">P.</div>

        {/* Menu Lateral */}
        <nav className="flex flex-col gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.name} // Mostra o nome ao passar o mouse
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon size={24} strokeWidth={active ? 2.5 : 2} />
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Container para compensar o Sidebar fixa */}
      <div className="flex flex-col flex-1 ml-[76px]">
        
        {/* Header Superior - Ajustado para não flutuar sobre o conteúdo */}
        <header className="h-16 border-b bg-white flex items-center px-8 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-800">Perscrutar</h1>
          <div className="mx-4 h-4 w-[1px] bg-slate-200"></div>
          <p className="text-sm text-slate-500 font-medium">Controle de Acesso</p>
        </header>

        {/* Área de Conteúdo */}
        <main className="bg-gray-50 min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}