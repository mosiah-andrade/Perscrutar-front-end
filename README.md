# 👁️ Perscrutar Acesso - Sistema de Controle de Acesso com IoT

## 1. Identificação
* [cite_start]**Nome do Projeto:** Projeto Perscrutar Acesso 
* [cite_start]**Equipe:** Brunna Pontual Spanudakis, Heitor Farias Pinheiro do Amaral, Maria Luiza Cavalcanti Valeriano, Marianna Gomes Kottas, Mosiah Assunção Andrade, Victor Militino Santos Gonçalves, Vinicius Marques Gomes Silva
* [cite_start]**Turma/Período:** Análise e Desenvolvimento de Sistemas (ADS) - 2026 
* [cite_start]**Instituição:** Faculdade Senac Pernambuco 
* [cite_start]**UCs Integradas:** Internet das Coisas (IoT) - UC4 

---

## 2. Links de Acesso
* **Repositório GitHub (Firmware/IoT):** [https://github.com/Hfaaf/Iot_faceTag](https://github.com/Hfaaf/Iot_faceTag)
* **Repositório GitHub (Front-end):** [https://github.com/mosiah-andrade/Perscrutar-front-end](https://github.com/mosiah-andrade/Perscrutar-front-end)
* **Apresentação:** [Inserir Link para Slides/PDF]
* **Software/Solução Rodando:** [Site Percrutar](https://perscrutar-front-end.vercel.app/)]
* **Simulação:** [Link do Wokwi](https://wokwi.com/projects/458856490594274305?classId=21e70d71-96a1-4f9d-9f1c-5f0212dce567&assignmentId=4779f4ca-344c-426a-8131-db760141bf69&submissionId=1238e40d-2702-6b3e-decd-7bf09094b8fb)]
* **Outros:** `[Inserir Link para Miro, Kanban, Figma, etc.]`

---

## 3. Documento de Requisitos Simplificado

### Problema
[cite_start]O prédio da Faculdade Senac apresenta vulnerabilidades no controle de acesso, sem um sistema de identificação robusto na entrada e sem o registro sistemático de entradas e saídas, permitindo o fluxo de pessoas não autorizadas e dificultando auditorias de segurança.

### Escopo do MVP
[cite_start]Desenvolvimento de um sistema de segurança de acesso duplo, combinando a leitura de TAG RFID com o reconhecimento facial biométrico para garantir confiabilidade[cite: 18, 254]. [cite_start]O dispositivo físico atua na coleta (borda), enviando dados via nuvem (TLS) para validação cruzada [cite: 98-99, 104].

### Requisitos Funcionais (RF) Principais
* [cite_start]**RF-01 Leitura RFID:** O sistema identifica o usuário via TAG na entrada[cite: 322].
* [cite_start]**RF-02 Reconhecimento Facial:** Segunda camada de autenticação ativada após a leitura RFID[cite: 324].
* [cite_start]**RF-08 Registro Automático:** Entradas e saídas são salvas com horário, ID do usuário e área acessada[cite: 324].

### Requisitos Não Funcionais (RNF) Mensuráveis
* [cite_start]**RNF-01 Tempo de Resposta:** Todo o processo de autenticação e liberação deve ocorrer em no máximo 2 segundos[cite: 122, 329].
* [cite_start]**RNF-03 Disponibilidade:** O sistema deve ter disponibilidade mínima de 99,5% no horário de funcionamento[cite: 329].
* [cite_start]**RNF-05 Precisão Biométrica:** Taxa de precisão mínima de 95% e falsos positivos inferiores a 1%[cite: 330].

---

## 4. Mapeamento de UCs

| Conceito / Tecnologia | Disciplina / UC | Onde está evidenciado no projeto |
| :--- | :--- | :--- |
| **Integração de Sensores e Microcontrolador** | Internet das Coisas (IoT) - UC4 | [cite_start]Leitura do RFID MFRC522 e Sensor Ultrassônico HC-SR04 integrados ao ESP32-S3[cite: 5, 20, 236]. |
| **Comunicação de Dados** | Internet das Coisas (IoT) - UC4 | [cite_start]Envio de payloads via MQTT e HTTP, além de criptografia TLS 1.3 [cite: 110, 118-119]. |
| **Persistência de Dados** | Banco de Dados | [cite_start]Armazenamento de logs e cadastros no PostgreSQL com criptografia AES-256[cite: 110, 124]. |
| **Interface de Usuário** | Desenvolvimento Front-end | [cite_start]Dashboard administrativo em tempo real para alertas e gestão [cite: 128-129, 145]. |

---

## 5. Esboços e Diagramas Técnicos

### Arquitetura Lógica
[cite_start]A arquitetura funciona em 5 camadas principais [cite: 113-127]:
1. [cite_start]**Borda (IoT):** ESP32-S3 WROVER, HC-SR04 (presença), MFRC522 (RFID), ESP32-CAM (câmera) [cite: 114-115].
2. [cite_start]**Comunicação:** Rede Wi-Fi usando protocolos MQTT e HTTP sobre TLS 1.3 [cite: 117-119].
3. [cite_start]**Servidor Central:** Validação cruzada RFID + Biometria [cite: 120-121].
4. [cite_start]**Banco de Dados:** PostgreSQL isolado com backup [cite: 123-124].
5. [cite_start]**Aplicação (Mobile/Web):** Dashboard e alertas push para admins [cite: 127-129].

### Fluxograma de Decisão do Firmware
1. [cite_start]`HC-SR04` detecta presença a < 30cm[cite: 102].
2. [cite_start]`ESP32` aciona leitor RFID `MFRC522` e captura a imagem via `ESP32-CAM` [cite: 102-104].
3. [cite_start]Dados enviados ao servidor via TLS 1.3[cite: 104].
4. [cite_start]Resposta do servidor -> Se `Acesso Permitido`: LED Verde = ON / Se `Acesso Negado`: LED Vermelho = ON [cite: 106-107].
5. [cite_start]Emissão do Log via MQTT[cite: 108].

<img width="907" height="409" alt="image" src="https://github.com/user-attachments/assets/a5601147-0c1b-4787-8ee9-6cca8dc0af96" />


---

## 6. Dossiê de Evidências


* **Protótipo Físico:** `[Inserir fotos nítidas do circuito nas protoboards]`
* **Simulação:** `[Inserir prints do Wokwi demonstrando as conexões]`
* **Métricas via Serial:** `[Inserir prints do Serial Monitor com a leitura do UUID do RFID, Payload JSON e IPs]`
* **Painel Web:** `[Inserir prints do dashboard web rodando]`

---

## 7. Instruções de Execução e Configuração

### Segurança e Integridade
O repositório utiliza o padrão de variáveis de ambiente. **Jamais** versione chaves de API, senhas do Wi-Fi ou dados sensíveis. O arquivo `.env` está contido no `.gitignore`.

Para rodar localmente, copie o arquivo de exemplo:
```bash
cp config.example .env
