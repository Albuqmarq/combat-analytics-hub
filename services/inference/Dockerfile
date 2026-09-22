FROM python:3.11-slim

WORKDIR /app

# Dependências do sistema para ML
RUN apt-get update && apt-get install -y libgomp1 && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Garantir que o diretorio de artefatos exista
RUN mkdir -p ./artifacts
COPY ./app ./app
EXPOSE 8001

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8001"]