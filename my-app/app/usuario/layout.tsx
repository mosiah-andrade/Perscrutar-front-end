import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Moldura from "../componentes/MolduraUsuario"; // Importe com M maiúsculo
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema de Gestão",
  description: "Controle financeiro e projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full">
        {/* Usando o componente como Moldura (PascalCase) */}
        <Moldura>
          {children}
        </Moldura>
      </body>
    </html>
  );
}