import React from 'react';
import { MoreVertical, Edit2, Trash2, User } from 'lucide-react'; // Instale lucide-react para os ícones

// Interface para tipagem dos dados
interface LogRow {
  id: string;
  nome: string;
  cargo: string;
  matricula: string;
  status: 'Aprovado' | 'Recusado';
  dispositivo: string;
  data: string;
}

const mockData: LogRow[] = [
  { id: '1', nome: 'Nome', cargo: 'Analista (cargo)', matricula: '20230050', status: 'Aprovado', dispositivo: 'Keychain RFID', data: '12/10/2026 - 10:25:56' },
  { id: '2', nome: 'Nome', cargo: 'Analista (cargo)', matricula: '20230050', status: 'Aprovado', dispositivo: 'Keychain RFID', data: '12/10/2026 - 10:25:56' },
  { id: '3', nome: 'Nome', cargo: 'Analista (cargo)', matricula: '20230050', status: 'Recusado', dispositivo: 'Keychain RFID', data: '12/10/2026 - 10:25:56' },
  { id: '4', nome: 'Nome', cargo: 'Analista (cargo)', matricula: '20230050', status: 'Recusado', dispositivo: 'Keychain RFID', data: '12/10/2026 - 10:25:56' },
  { id: '5', nome: 'Nome', cargo: 'Analista (cargo)', matricula: '20230050', status: 'Aprovado', dispositivo: 'Keychain RFID', data: '12/10/2026 - 10:25:56' },
];

export default function LogTable() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4  min-h-screen font-sans text-gray-700">
      
      {/* HEADER DA SEÇÃO */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex gap-6 sm:gap-12 border-b-2 border-transparent justify-between w-full">
          <button className="font-semibold text-gray-800 border-b-2 border-orange-500 pb-1 px-1 text-sm sm:text-base">Nome</button>
          <button className="font-medium text-gray-500 hover:text-gray-700 pb-1 px-1 text-sm sm:text-base">Matrícula</button>
          <button className="font-medium text-gray-500 hover:text-gray-700 pb-1 px-1 text-sm sm:text-base">Status</button>
          <button className="font-medium text-gray-500 hover:text-gray-700 pb-1 px-1 text-sm sm:text-base">Id da Tag</button>
          <button className="font-medium text-gray-500 hover:text-gray-700 pb-1 px-1 text-sm sm:text-base">Ultimo Acesso</button>
          <button className="text-sm font-semibold text-gray-800 hover:underline">Ver Tudo</button>
        </div>
      </div>

      {/* CONTAINER DAS LINHAS */}
      <div className="space-y-3">
        {mockData.map((row) => (
          <div
            key={row.id}
            className="bg-white rounded-[12px] p-4 md:p-3 shadow-sm border border-gray-100
                       flex flex-col md:flex-row md:items-center md:justify-between 
                       gap-4 md:gap-0 transition-all hover:shadow-md"
          >
            {/* COLUNA 1: Checkbox + Avatar + Nome/Cargo */}
            <div className="flex items-center gap-3 min-w-[100px]">
              
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                <User size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{row.nome}</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light">{row.cargo}</p>
              </div>
            </div>

            {/* COLUNA 2: Matrícula */}
            <div className="flex justify-between text-center items-center md:min-w-[120px]">
              <span className="text-sm sm:text-base font-semibold text-gray-600">{row.matricula}</span>
            </div>

            {/* COLUNA 3: Status */}
            <div className="flex justify-between md:justify-start items-center md:min-w-[120px]">
              <span className="text-xs font-semibold uppercase text-gray-400 md:hidden">Status:</span>
              <span
                className={`px-4 py-1 rounded-[8px] text-xs sm:text-sm font-bold tracking-wide border inline-block text-center min-w-[100px]
                  ${row.status === 'Aprovado' 
                    ? 'bg-[#EAF5EE] text-[#4A8B67] border-[#D1EADC]' 
                    : 'bg-[#FDF0ED] text-[#D16D53] border-[#F7D8D0]'}`}
              >
                {row.status}
              </span>
            </div>

            {/* COLUNA 4: Tipo de Dispositivo */}
            <div className="flex justify-between md:justify-start items-center md:min-w-[140px]">
              <span className="text-xs font-semibold uppercase text-gray-400 md:hidden">Dispositivo:</span>
              <span className="text-sm sm:text-base font-bold text-gray-500">{row.dispositivo}</span>
            </div>

            {/* COLUNA 5: Data e Hora */}
            <div className="flex justify-between md:justify-start items-center md:min-w-[180px]">
              <span className="text-xs font-semibold uppercase text-gray-400 md:hidden">Data:</span>
              <span className="text-xs sm:text-sm text-gray-400 font-medium">{row.data}</span>
            </div>

            {/* COLUNA 6: Ações (Botões) */}
            <div className="flex justify-end items-center gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
              <button className="text-gray-400 hover:text-red-500 transition-colors p-1" aria-label="Deletar">
                <Trash2 size={18} />
              </button>
              <button className="text-gray-400 hover:text-blue-500 transition-colors p-1" aria-label="Editar">
                <Edit2 size={18} />
              </button>
              <button className="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Mais opções">
                <MoreVertical size={18} />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}