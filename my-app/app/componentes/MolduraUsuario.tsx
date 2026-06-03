"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { UsersRound, Home, IdCardLanyard } from "lucide-react";
import Link from "next/link";

export default function Moldura({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
    }
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-[76px] bg-white text-gray-400 flex flex-col items-center py-6 fixed h-full z-20 border-r border-slate-200">
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