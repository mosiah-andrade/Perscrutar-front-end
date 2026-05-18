'use client';

import React, { useState, useRef } from 'react';
import { Camera, Shield, Radio, CheckCircle } from 'lucide-react';

export default function CadastroUsuario() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // Guarde este estado para enviar via FormData depois
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
        setSelectedFile(file);
        // Cria uma URL temporária para o preview da imagem
        const objectUrl = URL.createObjectURL(file);
        setImagePreview(objectUrl);

        // Boa prática: limpar a URL da memória quando o componente for desmontado
        return () => URL.revokeObjectURL(objectUrl);
    }
    };
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    matricula: '',
    email: '',
    cargoSetor: '',
    tagId: '',
    statusInicial: 'Ativo',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleScan = () => {
    // Simulação de escaneamento de tag RFID
    setFormData((prev) => ({ ...prev, tagId: 'HJDOJWENKNLI200' }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Criamos o objeto FormData 
    const data = new FormData();
    
    // O FormData lida perfeitamente com os tipos de dados do Java (MultipartFile e Strings)
    data.append('nomeCompleto', formData.nomeCompleto);
    data.append('matricula', formData.matricula);
    data.append('email', formData.email);
    data.append('cargoSetor', formData.cargoSetor);
    data.append('tagId', formData.tagId);
    data.append('statusInicial', formData.statusInicial);

    // 2. Validação e anexo do arquivo da foto
    if (selectedFile) {
        // O primeiro parâmetro ('fotoFacial') deve ser EXATAMENTE o mesmo nome esperado no @RequestParam do Java
        data.append('fotoFacial', selectedFile);
    } else {
        alert('Por favor, carregue uma foto para o reconhecimento facial.');
        return;
    }

    try {
        // 3. Substitua pela URL real do seu ambiente Java (ex: http://localhost:8080 ou a URL de produção)
         // Exemplo de uso de variável de ambiente para diferenciar dev/prod
        const API_URL = process.env.NEXT_PUBLIC_API_URL + '/usuarios/cadastro' || 'http://localhost:8080/api/usuarios/cadastro'; ; 

        const response = await fetch(API_URL, {
        method: 'POST',
        body: data, // Enviamos o FormData. O navegador injeta o Content-Type: multipart/form-data automaticamente.
        // Se sua API Java exigir algum Token (ex: JWT), adicione a linha abaixo:
        // headers: { 'Authorization': `Bearer ${seuToken}` }
        });

        if (response.ok) {
        // Se o Java retornar um JSON de sucesso ou apenas o Status 201/200
        alert('Cadastro enviado com sucesso para o servidor Java!');
        // Opcional: resetar estados aqui
        } else {
        // Captura erros retornados pelo Java (ex: validações de DTO)
        const errorText = await response.text();
        alert(`Erro no servidor Java: ${errorText || 'Falha ao cadastrar.'}`);
        }
    } catch (error) {
        console.error('Erro ao conectar com a API Java:', error);
        alert('Não foi possível conectar ao servidor Java. Verifique se o backend está rodando.');
    }
    };
  

  return (
    <div className="min-h-screen bg-[#F0F2F5] p-6 md:p-12 flex justify-center items-start font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* FORMULÁRIO PRINCIPAL */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8 border border-gray-100 flex flex-col gap-6">
          
          {/* Avatar / Foto de Perfil */}
            <div className="flex justify-center mb-4">
            {/* Input escondido */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            <div 
                onClick={handleAvatarClick}
                className="relative group cursor-pointer"
                title="Clique para carregar a foto de reconhecimento facial"
            >
                <div className="w-28 h-28 bg-[#E2E8F0] rounded-full flex items-center justify-center border-2 border-white shadow-sm overflow-hidden bg-cover bg-center transition-all group-hover:opacity-90">
                {imagePreview ? (
                    // Se houver imagem carregada, mostra ela ocupando todo o espaço
                    <img 
                    src={imagePreview} 
                    alt="Preview do reconhecimento facial" 
                    className="w-full h-full object-cover"
                    />
                ) : (
                    // Caso contrário, mantém o SVG padrão
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )}
                </div>
                
                {/* Ícone da Câmera */}
                <div className="absolute bottom-0 right-0 bg-[#4A5568] p-2 rounded-full text-white shadow-md group-hover:bg-[#DE673A] transition-colors duration-200">
                <Camera size={16} />
                </div>
            </div>
            </div>

          <hr className="border-gray-200" />

          {/* Nome Completo */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#2D3748]">Nome Completo</label>
            <input
              type="text"
              name="nomeCompleto"
              value={formData.nomeCompleto}
              onChange={handleChange}
              placeholder="Inserir nome completo"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#E0663B] transition"
            />
          </div>

          {/* Matrícula e E-mail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#2D3748]">Matrícula</label>
              <input
                type="text"
                name="matricula"
                value={formData.matricula}
                onChange={handleChange}
                placeholder="Preencha com o número de matrícula"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#E0663B] transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#2D3748]">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Inserir e-mail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#E0663B] transition"
              />
            </div>
          </div>

          {/* Cargo / Setor */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#2D3748]">Cargo/Setor</label>
            <select
              name="cargoSetor"
              value={formData.cargoSetor}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#E0663B] transition appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23718096' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat', backgroundSize: '16px' }}
            >
              <option value="">Selecione o Setor</option>
              <option value="aluno">Aluno</option>
              <option value="professor">Professor</option>
              <option value="adm">Administrativo</option>
            </select>
          </div>

          {/* Seção Cadastro da Tag RFID */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-base font-bold text-[#2D3748]">Cadastro da Tag RFID</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* ID da Tag */}
              <div className="md:col-span-7 flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#4A5568]">ID da Tag (Hexadecimal)</label>
                <input
                  type="text"
                  name="tagId"
                  value={formData.tagId}
                  onChange={handleChange}
                  placeholder="HJDOJWENKNLI200"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#E0663B] transition uppercase"
                />
              </div>

              {/* Botão Escanear */}
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={handleScan}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#E0663B] text-[#E0663B] font-medium text-sm hover:bg-orange-50 transition"
                >
                  <Radio size={16} />
                  Escanear
                </button>
              </div>

              {/* Status Inicial */}
              <div className="md:col-span-3 flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#4A5568]">Status Inicial</label>
                <div className="relative">
                  <select
                    name="statusInicial"
                    value={formData.statusInicial}
                    onChange={handleChange}
                    className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-300 text-sm bg-white font-medium text-gray-700 focus:outline-none appearance-none"
                  >
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#10B981]" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 flex items-center gap-1">
              ⓘ Apróxime a tag do leitor conectado para preenchimento automático.
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-[#DE673A] text-white font-semibold text-sm rounded-lg hover:bg-[#c9562b] transition shadow-sm"
            >
              Salvar
            </button>
            <button
              type="button"
              className="px-8 py-3 border border-[#DE673A] text-[#DE673A] font-semibold text-sm rounded-lg hover:bg-orange-50 transition"
            >
              Cancelar
            </button>
          </div>

        </form>

        {/* SIDEBAR DA DIREITA */}
        <div className="flex flex-col gap-6">
          
          {/* Box de Segurança de Dados */}
          <div className="bg-[#D9C4B7]/70 rounded-xl p-6 border border-gray-200/40 text-[#A45A36]">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-white/50 rounded-md">
                <Shield size={20} className="text-[#DE673A]" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#8C4623] mb-2">Segurança de Dados</h4>
                <p className="text-xs leading-relaxed font-medium">
                  Todos os dados cadastrados no sistema SENAC seguem rigorosamente a LGPD. 
                  As chaves criptográficas das tags RFID são renovadas periodicamente para 
                  garantir a integridade do monitoramento inteligente.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#A45A36]/20 flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-[#8C4623]">
              <Shield size={14} />
              Criptografia AES-256 Ativa
            </div>
          </div>

          {/* Box de Instruções */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col gap-6">
            <h4 className="font-bold text-xl text-[#0F2942]">Instruções</h4>
            
            <ul className="flex flex-col gap-5">
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EDF2F7] text-[#4A5568] font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <p className="text-xs text-gray-600 leading-relaxed pt-0.5">
                  Certifique-se de que o <strong>CPF</strong> informado é válido e único no sistema.
                </p>
              </li>
              
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EDF2F7] text-[#4A5568] font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <p className="text-xs text-gray-600 leading-relaxed pt-0.5">
                  O e-mail corporativo deve seguir o padrão institucional <code className="bg-gray-100 px-1 py-0.5 rounded text-[#2D3748] font-semibold">@senac.com.br</code>.
                </p>
              </li>
              
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EDF2F7] text-[#4A5568] font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <p className="text-xs text-gray-600 leading-relaxed pt-0.5">
                  Vincule a tag somente após verificar se o <strong>ID hexadecimal</strong> está correto.
                </p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}