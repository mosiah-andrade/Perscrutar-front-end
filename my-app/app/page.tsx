import { ArrowUpRight, UsersRound, CircleAlert, ShieldAlert, Video, CircleCheck, Radio, Clock  } from 'lucide-react';
import FluxoGrafico from './componentes/FluxoGrafico';
export default function Home() {  
  return (
      <main className="bg-[#E5E5E5] h-full flex flex-1 w-full m-auto flex-col items-center justify-center py-15 px-25 sm:items-start">
          <div className="flex justify-between mb-8 w-full" >
            <div className="w-[221px] h-[166px] bg-white rounded-xl flex flex-row p-[20px] items-center justify-center" >
              <div className="flex flex-col " >
                <p className="text-gray-400 text-sm">Pessoas no Predio</p>
                <span className="text-[40px] font-bold text-black">452</span>
                <p className="flex items-center gap-1 text-green-500" >
                  <ArrowUpRight size={16}/>
                  <div className="text-xs w-[60%]" >
                    12% aumento vs ontem
                  </div>
                </p>
              </div>
              <UsersRound size={40} className="text-[#1E3A8A] bg-[#EFF6FF] p-2 rounded-xl" />
            </div>
            <div className="w-[221px] h-[166px] bg-white rounded-xl flex flex-row p-[20px] items-center justify-center" >
              <div className="flex flex-col " >
                <p className="text-gray-400 text-sm">Alerta de Segurança</p>
                <span className="text-[40px] font-bold text-red-500">03</span>
                <p className="flex items-center gap-1 text-red-500" >
                  <ShieldAlert size={16}/>
                  <div className="text-xs w-[70%]" >
                    Requer Atenção Imediata
                  </div>
                </p>
              </div>
              <CircleAlert size={40} className="text-[#EF4444] bg-[#FEE2E2] p-2 rounded-xl" />
            </div>
            <div className="w-[221px] h-[166px] bg-white rounded-xl flex flex-row p-[20px] items-center justify-center" >
              <div className="flex flex-col " >
                <p className="text-gray-400 text-sm">Cameras Online</p>
                <span className="text-[40px] font-bold text-black">124 <span className="text-[20px] text-gray-400">/128</span></span>
                <p className="flex items-center gap-1 text-green-500" >
                  <CircleCheck size={16}/>
                  <div className="text-xs w-[60%]" >
                    96,8% Uptime Sistema
                  </div>
                </p>
              </div>
              <Video size={40} className="text-[#1E3A8A] bg-[#EFF6FF] p-2 rounded-xl" />
            </div>
            <div className="w-[221px] h-[166px] bg-white rounded-xl flex flex-row p-[20px] items-center justify-center" >
              <div className="flex flex-col " >
                <p className="text-gray-400 text-sm">Acesso do dia</p>
                <span className="text-[40px] font-bold text-black">1.842</span>
                <p className="flex items-center gap-1 text-green-500" >
                  <Clock size={16}/>
                  <div className="text-xs w-[60%]" >
                    Ultimo acesso às 17:45
                  </div>
                </p>
              </div>
              <Radio size={40} className="text-[#1E3A8A] bg-[#EFF6FF] p-2 rounded-xl" />
            </div>
            
          </div>
          <div className="w-full flex gap-8" >
            <FluxoGrafico />
            <div className="flex justify-end mt-4 w-full flex-col" >
              <p className="text-sm text-gray-500" >
                Alerta
              </p>
              <ul className="w-[400px] h-[200px] bg-white rounded-xl p-4 flex flex-col gap-4" >
                <li className="text-sm text-gray-500" >
                  <img src="" alt="" />
                  <span>Elevador 2</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                  <div>
                    <a href="">Ver camera</a>
                    <a href="">Dispensar</a>
                  </div>
                </li>
                <li>
                  <img src="" alt="" />
                  <span>Porta Principal</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                  <div>
                    <a href="">Ver camera</a>
                    <a href="">Dispensar</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </main>
  );
}
