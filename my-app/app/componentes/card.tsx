import { LucideIcon } from 'lucide-react';

interface CardProps {
  titulo: string;
  icone: LucideIcon | string; 
  colorIcon?: string; 
  bgIcon?: string;
  number: string;
  label: string;
}

// 1. Incluímos o colorIcon na desestruturação e definimos o valor padrão caso não seja passado
export default function Card({ titulo, icone: Icone, colorIcon = 'text-[#1E3A8A]', bgIcon = 'bg-[#EFF6FF]', number, label  }: CardProps) {
  return (
    <div className="h-[133px] w-[221px] bg-white p-3 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center gap-4">
        
        {/* 2. Injetamos a variável de classe completa usando Template Literals (crases) */}
        <div className={`flex justify-center items-center text-2xl font-bold h-10 w-10  rounded-xl shrink-0 ${colorIcon} ${bgIcon}`}>
          
          {/* Validação dinâmica */}
          {typeof Icone === 'string' ? (
            Icone
          ) : (
            <Icone size={20} />
          )}

        </div>
        <p className="text-gray-600 font-medium text-sm line-clamp-2">{titulo}</p>
      </div>
      <span className="text-[35px]  font-bold text-blue-800">{number}</span>
      <p className='text-[11px] text-gray-600'>{label}</p>
    </div>
  );
}