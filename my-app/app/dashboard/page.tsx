// app/dashboard/page.tsx
"use client";

export default function Dashboard() {
  // Se o Middleware estiver funcionando, o usuário só chega aqui se estiver logado.
  return (
    <div className="p-8">
      <h1 className="text-white text-3xl font-bold">Perscrutar Dashboard</h1>
      <p className="text-gray-300 mt-4">Bem-vindo, você está na área protegida.</p>
    </div>
  );
}