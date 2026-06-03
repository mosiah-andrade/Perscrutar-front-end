"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const user= {
    email: 'admin@senac.edu',
    password: 'admin'
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === user.email && password === user.password) {
      // Cria um cookie mockado que expira em 1 dia
      document.cookie = "auth_token=true; path=/; max-age=86400";
      
      // router.refresh() é necessário para que o Proxy/Middleware 
      // perceba o novo cookie imediatamente
      router.refresh(); 
      router.push('/dashboard');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center bg-[linear-gradient(180deg,_#36312E_50.52%,_#D4D4D4_110.06%)] text-gray-200">
      <main className="flex flex-1 w-full m-auto flex-col items-center justify-center py-32 px-16 sm:items-start">
          <h1 className="text-5xl font-bold text-center sm:text-left">
            Perscrutar
          </h1>
          <p className="mt-4 text-2xl text-center sm:text-left">
            O sistema de controle de acesso com reconhecimento facila e Tags
          </p>
          <form onSubmit={handleLogin}
            className="mt-8 w-full max-w-md p-8"
          >
            <div className="flex flex-col gap-4">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="rounded-[8.066px] bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800 text-gray-600"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                className="rounded-[8.066px] bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800 text-gray-600"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" name="remember" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-lg font-medium">
                Manter-me conectado
              </label>
            </div>
            <button
              type="submit"
              className="rounded-[8.066px] bg-[#DF6A3F] hover:bg-[#C15A35] text-white font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full m-6 cursor-pointer button"
            >
              Entrar
            </button>
          </form>
      </main>
    </div>
  );
}
