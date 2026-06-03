
import LogTable from "../../componentes/TabelaUsuarios"
import Card from "@/app/componentes/card"
import {CircleCheck, Ban, UserPlus} from 'lucide-react';


export default function Usuarios() {  
  return (
        <div className="bg-[#E5E5E5]">
            <div className=" h-full flex gap-6 justify-between flex-1 w-full  flex-row  py-15 px-25 sm:items-start flex-wrap">
              
              <Card 
                titulo="Total de Tags"
                icone="#" 
                number="1,284"
                label = "12% desde o Ultimo Mês"

              />
              <Card 
                titulo="Tags Ativa" 
                icone={CircleCheck}
                colorIcon="text-[#059669]"
                bgIcon="bg-[#ECFDF5]"
                number="1,152"
                label= "89.7% do total disponível"
              />
              <Card 
                titulo="Tags Bloqueada" 
                icone={Ban}
                colorIcon="text-[#BA1A1A]"
                bgIcon="bg-[#FEF2F2]"
                number="92"
                label= "+3 Novas Solicitações"
              />
              {/* <Card titulo="Tags Bloqueada" /> */}
              <div className="h-[111px] w-[221px] bg-white p-3  rounded-2xl shadow-sm border border-[var(--color-roxo-600)] flex flex-col justify-between">
                <h3 className="text-[19px] text-[var(--color-roxo-200)]  font-bold">Controlhe de Acesso</h3>
                <a href="/dashboard/cadastroUsuario" className=" text-center border border-[var(--color-roxo-600)] text-[var(--color-roxo-200)]  rounded-sm hover:rounded-none hover:bg-green-800 transition-colors duration-300 ease-in-out hover:text-white flex justify-around align-center p-1"> <UserPlus size={19}/>  Novo Cadastro</a>
              </div>
              
            </div>
            <LogTable/>
        </div>
        
  )
}