"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { UsersRound, Home, LogOut } from "lucide-react";
import Link from "next/link";

export default function Moldura({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      name: "Home",
      href: "/usuario",
      icon: Home,
    },
    {
      name: "Usuarios",
      href: "/usuario/perfil",
      icon: UsersRound,
    },
  ];

  const handleLogout = () => {
    // Deleta o cookie mockado definindo max-age=0
    document.cookie = "auth_token=; path=/; max-age=0";
    
    // Atualiza o estado das rotas para o Next.js reconhecer a perda do cookie
    router.refresh();
    
    // Redireciona o usuário de volta para a tela de login (raiz)
    router.push("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Alterado para flex-col justify-between para empurrar o botão de sair para a base da barra */}
      <aside className="w-[76px] bg-white text-gray-400 flex flex-col justify-between items-center py-6 fixed h-full z-20 border-r border-slate-200">
        
        {/* Bloco Superior: Logo e Navegação */}
        <div className="flex flex-col items-center w-full">
          <div className="mb-10 font-bold text-xl text-blue-400">
            P.
          </div>

          <nav className="flex flex-col gap-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
                    active
                      ? "bg-[var(--color-roxo-200)] text-white shadow-lg shadow-blue-900/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <Icon size={24} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bloco Inferior: Botão de Sair */}
        <div className="w-full flex justify-center px-3">
          <button
            onClick={handleLogout}
            title="Sair da conta"
            className="flex items-center justify-center p-3 rounded-xl text-red-400 hover:text-white hover:bg-red-500 transition-all cursor-pointer"
          >
            <LogOut size={24} />
          </button>
        </div>

      </aside>

      <div className="flex flex-col flex-1 ml-[76px]">
        <header className="h-16 border-b bg-white flex items-center px-8 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-800">
            Perscrutar
          </h1>
        </header>

        <main className="bg-gray-50 min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}