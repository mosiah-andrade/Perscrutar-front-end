# 🐙 Perscrutar - Sistema de Controle de Acesso com IoT

## 1. Identificação
**Nome do Projeto:** Projeto Perscrutar Acesso 

**Equipe:** Brunna Pontual Spanudakis, Heitor Farias Pinheiro do Amaral, Maria Luiza Cavalcanti Valeriano, Marianna Gomes Kottas, Mosiah Assunção Andrade, Victor Militino Santos Gonçalves, Vinicius Marques Gomes Silva

**Turma/Período:** Análise e Desenvolvimento de Sistemas (ADS) - 2026 

**Instituição:** Faculdade Senac Pernambuco 

**UCs Integradas:** Internet das Coisas (IoT) - UC4 

---

## 2. Links de Acesso
* **Repositório GitHub (Firmware/IoT):** [https://github.com/Hfaaf/Iot_faceTag](https://github.com/Hfaaf/Iot_faceTag)
* **Repositório GitHub (Front-end):** [https://github.com/mosiah-andrade/Perscrutar-front-end](https://github.com/mosiah-andrade/Perscrutar-front-end)
* **Apresentação:** [Link para Slides/PDF](https://canva.link/2v7frcz2v2rdmnt)
* **Software/Solução Rodando:** [Site Percrutar](https://perscrutar-front-end.vercel.app/)
* **Simulação:** [Link do Wokwi](https://wokwi.com/projects/458856490594274305?classId=21e70d71-96a1-4f9d-9f1c-5f0212dce567&assignmentId=4779f4ca-344c-426a-8131-db760141bf69&submissionId=1238e40d-2702-6b3e-decd-7bf09094b8fb)
* **Outros:** [Link Figma](https://www.figma.com/design/F7l8PmTmfDiCkQi8gz7DZs/TAG-RFID?node-id=36-118&t=oR5Yzg0ypVorkbWt-1)

---

## 3. Documento de Requisitos Simplificado

### Problema
O prédio da Faculdade Senac apresenta vulnerabilidades no controle de acesso, sem um sistema de identificação robusto na entrada e sem o registro sistemático de entradas e saídas, permitindo o fluxo de pessoas não autorizadas e dificultando auditorias de segurança.

### Escopo do MVP
Desenvolvimento de um sistema de segurança de acesso duplo, combinando a leitura de TAG RFID com o reconhecimento facial biométrico para garantir confiabilidade[cite: 18, 254]. [cite_start]O dispositivo físico atua na coleta (borda), enviando dados via nuvem (TLS) para validação cruzada.

### Requisitos Funcionais (RF) Principais
**RF-01 Leitura RFID:** O sistema identifica o usuário via TAG na entrada.
**RF-02 Reconhecimento Facial:** Segunda camada de autenticação ativada após a leitura RFID.
**RF-08 Registro Automático:** Entradas e saídas são salvas com horário, ID do usuário e área acessada.

### Requisitos Não Funcionais (RNF) Mensuráveis
**RNF-01 Tempo de Resposta:** Todo o processo de autenticação e liberação deve ocorrer em no máximo 2 segundos.
**RNF-03 Disponibilidade:** O sistema deve ter disponibilidade mínima de 99,5% no horário de funcionamento.
**RNF-05 Precisão Biométrica:** Taxa de precisão mínima de 95% e falsos positivos inferiores a 1%.

---

## 4. Mapeamento de UCs

| Conceito / Tecnologia | Disciplina / UC | Onde está evidenciado no projeto |
| :--- | :--- | :--- |
| **Integração de Sensores e Microcontrolador** | Internet das Coisas (IoT) - UC4 | Leitura do RFID MFRC522 e Sensor Ultrassônico HC-SR04 integrados ao ESP32-S3. |
| **Comunicação de Dados** | Internet das Coisas (IoT) - UC4 | Envio de payloads via MQTT e HTTP, além de criptografia TLS 1.3. |
| **Persistência de Dados** | Banco de Dados | Armazenamento de logs e cadastros no PostgreSQL com criptografia AES-256. |
| **Interface de Usuário** | Desenvolvimento Front-end | Dashboard administrativo em tempo real para alertas e gestão. |

---

## 5. Esboços e Diagramas Técnicos

### Arquitetura Lógica
A arquitetura funciona em 5 camadas principais :
1. **Borda (IoT):** ESP32-S3 WROVER, HC-SR04 (presença), MFRC522 (RFID), ESP32-CAM (câmera) .
2. **Comunicação:** Rede Wi-Fi usando protocolos MQTT e HTTP sobre TLS 1.3 .
3. **Servidor Central:** Validação cruzada RFID + Biometria .
4. **Banco de Dados:** PostgreSQL isolado com backup .
5. **Aplicação (Mobile/Web):** Dashboard e alertas push para admins .

### Fluxograma de Decisão do Firmware
1. `ESP32 aciona leitor RFID MFRC522 e captura a imagem via ESP32-CAM.
2. Dados enviados ao servidor via TLS 1.3.
3. Resposta do servidor -> Se Acesso Permitido: LED Verde = ON / Se Acesso Negado: LED Vermelho = ON.
4. Emissão do Log via MQTT.



---

## 6. Dossiê de Evidências


* **Protótipo Físico:** 
<img width="1600" height="1596" alt="image" src="https://github.com/user-attachments/assets/d188b5a3-b1b8-4b2d-a254-a64f879521d2" />

* **Simulação:**
<img width="907" height="409" alt="image" src="https://github.com/user-attachments/assets/a5601147-0c1b-4787-8ee9-6cca8dc0af96" />

* **Métricas via Serial:**
<img width="1600" height="296" alt="image" src="https://github.com/user-attachments/assets/1231d810-ac52-483e-ade1-a082fba375de" />

* **Painel Web:**
<img width="1658" height="731" alt="image" src="https://github.com/user-attachments/assets/e25e5e3f-bf87-4fb7-a21b-3e6d3bf4f3c9" />


---



