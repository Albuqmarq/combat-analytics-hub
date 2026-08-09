# services/inference/Dockerfile
#
# Receita para construir a imagem Docker do Inference Service.

# --- Imagem base ---
# Usamos uma versão "slim" do Python 3.11: já vem com Python instalado,
# mas é bem mais leve que a imagem completa (menos MBs pra baixar/rodar).
FROM python:3.11-slim

# --- Diretório de trabalho dentro do container ---
# Tudo que rodarmos daqui pra frente (COPY, RUN, CMD) acontece dentro
# dessa pasta virtual /app, que existe só dentro do container.
WORKDIR /app

# --- Copiar e instalar as dependências PRIMEIRO ---
# Copiamos só o requirements.txt antes do resto do código de propósito.
# Por quê? O Docker faz "cache" de cada etapa (layer). Se só o código mudar
# mas as dependências continuarem as mesmas, o Docker reaproveita essa
# etapa de instalação já pronta, ao invés de reinstalar tudo de novo —
# isso deixa o rebuild muito mais rápido no dia a dia.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# --- Copiar o resto do código da aplicação ---
# Agora sim copiamos a pasta 'app' inteira (main.py, schemas/, engine/)
# pra dentro do container.
COPY app ./app

# --- Porta que esse serviço usa ---
# Isso é só documentação/informação pro Docker — não abre a porta sozinho,
# só avisa "esse container espera ser acessado pela porta 8001".
EXPOSE 8001

# --- Comando que roda quando o container iniciar ---
# Note: SEM --reload aqui. O --reload é só útil durante desenvolvimento
# local (auto-restart ao salvar arquivo). Dentro do container, isso não
# faz sentido e ainda consome recursos à toa.
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8001"]