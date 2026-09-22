FROM python:3.11-slim

WORKDIR /app

# Dependências do sistema para compilação e ML
RUN apt-get update && apt-get install -y libgomp1 gcc && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar a aplicação
COPY ./app ./app

EXPOSE 8002

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8002"]
