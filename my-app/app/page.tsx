"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Icon from '../public/P-Logo-Marca.png';
import Logo from '../public/Perscrutar-ApresentaçãoIot.png';
import octops from '../public/octops.png';
// import gif from '../public/gif.mp4'

export default function Home() {
  const router = useRouter();
  const user = {
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
    // Alterado para flex-col no mobile e flex-row em telas grandes (lg)
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[image:var(--bg-gradient-main)] text-gray-200 p-4 overflow-hidden">
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
       <Image
          src="/gif.gif" // Caminho direto para a pasta public
          alt="Animacao do Tentaculo"
          width={500}          // Defina uma largura base aproximada
          height={500}         // Defina uma altura base aproximada
          className="w-full max-w-[80vw] lg:max-w-[45vw] h-auto object-contain"
          unoptimized          // CRÍTICO: Sem isso, o Next.js pode travar a animação do GIF
        />
        
      </div> */}
      
      <main className="flex flex-1 w-full max-w-xl flex-col items-center justify-center py-12 px-6 lg:px-16 sm:items-start">
        <div className='flex flex-col m-auto'>
          <Image
            src={Logo}
            alt="Logo Perscrutar"
            placeholder="blur"
            className="h-32 w-auto object-contain" // Corrigido de h-30 para h-32
            unoptimized
          />
          
          <p className="mt-4 text-1xl text-center sm:text-left">
            Inteligência em cada acesso. Clareza em cada registro.
          </p>
        </div>
        
        
        <form onSubmit={handleLogin} className="mt-8 w-full max-w-md">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="rounded-[8.066px] bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800 text-gray-600 w-full"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="rounded-[8.066px] bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800 text-gray-600 w-full"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center mt-4">
            <input type="checkbox" name="remember" id="remember" className="mr-2 h-4 w-4" />
            <label htmlFor="remember" className="text-lg font-medium select-none">
              Manter-me conectado
            </label>
          </div>
          
          <button
            type="submit"
            className="rounded-[8.066px] font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-6 cursor-pointer transition-colors button" // Corrigido m-6 para mt-6
          >
            Entrar
          </button>
        </form>
      </main> 

      {/* <aside className="flex items-center justify-center p-4"> 
        <Image
          src={Icon}
          alt="Ícone decorativo"
          placeholder="blur"
          className="object-cover max-w-[80vw] lg:max-w-[40vw] h-auto"
          unoptimized
        />
      </aside> */}
      
      
      <aside className="flex flex-1 items-center justify-center p-4 w-full h-full lg:max-w-[50vw]"> 
        <Image
          src="/octops4.png" // Caminho direto para a pasta public
          alt="Animacao do Tentaculo"
          width={500}          // Defina uma largura base aproximada
          height={500}         // Defina uma altura base aproximada
          className="w-full max-w-[80vw] lg:max-w-[45vw] h-auto object-contain"
          unoptimized          // CRÍTICO: Sem isso, o Next.js pode travar a animação do GIF
        />
      </aside>

    </div>
  );
}