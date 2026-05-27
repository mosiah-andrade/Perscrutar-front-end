import { ArrowUpRight, UsersRound, CircleAlert, ShieldAlert, Video, CircleCheck, Radio, Clock  } from 'lucide-react';
import FluxoGrafico from '../componentes/FluxoGrafico';
import LogTable from '../componentes/TabelaUsuarios';
export default function Home() {  
  return (
      <main className="bg-[#E5E5E5] h-full flex flex-1 w-full m-auto flex-col items-center justify-center py-15 px-25 sm:items-start">
        <div className="flex justify-between mb-8 w-full flex-wrap gap-4">
          <div className="w-[221px] h-[166px] bg-white rounded-xl flex flex-row p-[20px] items-center justify-center" >
            <div className="flex flex-col " >
              <p className="text-gray-400 text-sm">Pessoas no Predio</p>
              <span className="text-[40px] font-bold text-black">452</span>
              <div className="flex items-center gap-1 text-green-500" >
                <ArrowUpRight size={16}/>
                <div className="text-xs w-[60%]" >
                  12% aumento vs ontem
                </div>
              </div>
            </div>
            <UsersRound size={40} className="text-[#1E3A8A] bg-[#EFF6FF] p-2 rounded-xl" />
          </div>
          <div className="w-[221px] h-[166px] bg-white rounded-xl flex flex-row p-[20px] items-center justify-center" >
            <div className="flex flex-col " >
              <p className="text-gray-400 text-sm">Alerta de Segurança</p>
              <span className="text-[40px] font-bold text-red-500">03</span>
              <div className="flex items-center gap-1 text-red-500" >
                <ShieldAlert size={16}/>
                <div className="text-xs w-[70%]" >
                  Requer Atenção Imediata
                </div>
              </div>
            </div>
            <CircleAlert size={40} className="text-[#EF4444] bg-[#FEE2E2] p-2 rounded-xl" />
          </div>
          <div className="w-[221px] h-[166px] bg-white rounded-xl flex flex-row p-[20px] items-center justify-center" >
            <div className="flex flex-col " >
              <p className="text-gray-400 text-sm">Cameras Online</p>
              <span className="text-[40px] font-bold text-black">124 <span className="text-[20px] text-gray-400">/128</span></span>
              <div className="flex items-center gap-1 text-green-500" >
                <CircleCheck size={16}/>
                <div className="text-xs w-[60%]" >
                  96,8% Uptime Sistema
                </div>
              </div>
            </div>
            <Video size={40} className="text-[#1E3A8A] bg-[#EFF6FF] p-2 rounded-xl" />
          </div>
          <div className="w-[221px] h-[166px] bg-white rounded-xl flex flex-row p-[20px] items-center justify-center" >
            <div className="flex flex-col " >
              <p className="text-gray-400 text-sm">Acesso do dia</p>
              <span className="text-[40px] font-bold text-black">1.842</span>
              <div className="flex items-center gap-1 text-green-500" >
                <Clock size={16}/>
                <div className="text-xs w-[60%]" >
                  Ultimo acesso às 17:45
                </div>
              </div>
            </div>
            <Radio size={40} className="text-[#1E3A8A] bg-[#EFF6FF] p-2 rounded-xl" />
          </div>
          
        </div>
        <div className="w-full flex gap-8 items-stretch flex-wrap">
          {/* O Gráfico tenta ocupar o máximo de espaço possível */}
          <div className="flex-[999] min-w-[600px]"> 
            <FluxoGrafico />
          </div>

          {/* A Coluna de Alertas */}
          <div className="flex-1 flex flex-col min-w-[400px] max-w-full xl:max-w-[400px]">
            <ul className="flex-1 bg-white rounded-xl p-4 flex flex-col gap-4 overflow-y-auto">
              <div className="text-sm text-blue-900 mb-2 flex gap-3">
                <ShieldAlert size={20} className="text-[#EF4444]"/>
                Alerta
              </div>
              
              <li className="text-[11px] text-gray-500 border-b pb-2 bg-[#E0D8D8] p-4 flex justify-between items-start gap-4 border border-red-500 rounded-[4px]">
                {/* flex-shrink-0 impede que a imagem fique oval ao ser "esmagada" */}
                <img src="https://tse1.explicit.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa" alt="" className="w-auto h-[80%] max-h-[80px] m-auto flex-shrink-0 aspect-square rounded-full object-cover border border-red-500" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-700">Elevador 2</span>
                  </div>
                  <p className='text-justify'>Lorem ipsum dolor sit amet, consecte</p>
                  <div className="flex gap-4 mt-2 font-medium">
                    <a 
                      href="#" 
                      className="text-white bg-blue-900 px-3 rounded-sm h-7 flex items-center justify-center text-xs font-medium transition-colors hover:bg-blue-800 hover:underline"
                    >
                      Ver câmera
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-900 bg-white px-3 rounded-sm h-7 flex items-center justify-center text-xs font-medium transition-colors hover:bg-gray-400 hover:underline"
                    >
                      Dispensar
                    </a>
                  </div>
                </div>
                
                <span className="text-[10px] whitespace-nowrap">14:22</span>
              </li>
              <li className="text-[11px] text-gray-500 border-b pb-2 bg-[#E0D8D8] p-4 flex justify-between items-start gap-4 border border-red-500 rounded-[4px]">
                {/* flex-shrink-0 impede que a imagem fique oval ao ser "esmagada" */}
                <img src="https://tse1.explicit.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa" alt="" className="w-auto h-[80%] max-h-[80px] m-auto flex-shrink-0 aspect-square rounded-full object-cover border border-red-500" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-700">Elevador 2</span>
                  </div>
                  <p className='text-justify'>Lorem ipsum dolor sit amet, consecte</p>
                  <div className="flex gap-4 mt-2 font-medium">
                    <a 
                      href="#" 
                      className="text-white bg-blue-900 px-3 rounded-sm h-7 flex items-center justify-center text-xs font-medium transition-colors hover:bg-blue-800 hover:underline"
                    >
                      Ver câmera
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-900 bg-white px-3 rounded-sm h-7 flex items-center justify-center text-xs font-medium transition-colors hover:bg-gray-400 hover:underline"
                    >
                      Dispensar
                    </a>
                  </div>
                </div>
                
                <span className="text-[10px] whitespace-nowrap">14:22</span>
              </li>
              <li className="text-[11px] text-gray-500 border-b pb-2 bg-[#E0D8D8] p-4 flex justify-between items-start gap-4 border border-red-500 rounded-[4px]">
                {/* flex-shrink-0 impede que a imagem fique oval ao ser "esmagada" */}
                <img src="https://tse1.explicit.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa" alt="" className="w-auto h-[80%] max-h-[80px] m-auto flex-shrink-0 aspect-square rounded-full object-cover border border-red-500" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-700">Elevador 2</span>
                  </div>
                  <p className='text-justify'>Lorem ipsum dolor sit amet, consecte</p>
                  <div className="flex gap-4 mt-2 font-medium">
                    <a 
                      href="#" 
                      className="text-white bg-blue-900 px-3 rounded-sm h-7 flex items-center justify-center text-xs font-medium transition-colors hover:bg-blue-800 hover:underline"
                    >
                      Ver câmera
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-900 bg-white px-3 rounded-sm h-7 flex items-center justify-center text-xs font-medium transition-colors hover:bg-gray-400 hover:underline"
                    >
                      Dispensar
                    </a>
                  </div>
                </div>
                
                <span className="text-[10px] whitespace-nowrap">14:22</span>
              </li>
            </ul>
          </div>
        </div>

        <LogTable/>
      </main>
  );
}
