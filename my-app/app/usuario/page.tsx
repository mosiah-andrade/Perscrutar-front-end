// 1. Definição da interface mapeando todos os campos que seu componente consome
interface PerfilProps {
  formData?: {
    nomeCompleto?: string;
    matricula?: string;
    email?: string;
    cargoSetor?: string;
    tagId?: string;
    statusInicial?: string;
  };
  imagePreview?: string | null;
}

// 2. Vinculando os argumentos desestruturados à interface criada
export default function Perfil({ formData, imagePreview }: PerfilProps) {
  // Simulando dados caso não venham por props (apenas para exemplo)
  const dados = formData || {
    nomeCompleto: "João Silva Sauro",
    matricula: "2024.1.0023",
    email: "joao.silva@senac.com.br",
    cargoSetor: "aluno",
    tagId: "HJDOJWENKNLI200",
    statusInicial: "Ativo"
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] p-6 md:p-12 flex justify-center items-start font-sans">
      <div className="max-w-7xl w-full">
        
        {/* COLUNA PRINCIPAL - DADOS DO PERFIL */}
        <div className=" bg-white rounded-xl shadow-sm p-8 border border-gray-100 flex flex-col gap-6">
          
          {/* Avatar / Foto de Perfil (Apenas Visualização) */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-28 h-28 bg-[#E2E8F0] rounded-full flex items-center justify-center border-2 border-white shadow-sm overflow-hidden bg-cover bg-center">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Foto de reconhecimento facial" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Nome Completo */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#2D3748]">Nome Completo</label>
            <div className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 font-medium">
              {dados.nomeCompleto || "Não informado"}
            </div>
          </div>

          {/* Matrícula e E-mail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#2D3748]">Matrícula</label>
              <div className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 font-medium">
                {dados.matricula || "Não informada"}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#2D3748]">E-mail</label>
              <div className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 font-medium">
                {dados.email || "Não informado"}
              </div>
            </div>
          </div>

          {/* Cargo / Setor */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#2D3748]">Cargo / Setor</label>
            <div className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 font-medium capitalize">
              {dados.cargoSetor || "Não selecionado"}
            </div>
          </div>

          {/* Seção Tag RFID */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-base font-bold text-[#2D3748]">Tag RFID Vinculada</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* ID da Tag */}
              <div className="md:col-span-8 flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#4A5568]">ID da Tag (Hexadecimal)</label>
                <div className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 font-mono uppercase">
                  {dados.tagId || "Nenhuma tag vinculada"}
                </div>
              </div>

              {/* Status */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#4A5568]">Status da Tag</label>
                <div className="relative flex items-center w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700">
                  <span>{dados.statusInicial || "Inativo"}</span>
                  <div 
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${
                      dados.statusInicial === 'Ativo' ? 'bg-[#10B981]' : 'bg-red-500'
                    }`} 
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}