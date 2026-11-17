#!/bin/sh
set -e

# Gera a migração inicial (idempotente) e aplica no Postgres, aguardando o banco subir.
python manage.py makemigrations catalog --noinput
until python manage.py migrate --noinput; do
  echo "Banco indisponivel, aguardando..."
  sleep 3
done

# Arquivos estáticos do Admin (servidos pelo WhiteNoise).
python manage.py collectstatic --noinput

# Popula o catálogo a partir do JSON do MLOps (se montado).
python manage.py load_catalog || true

# Cria o superusuário do Admin a partir das variáveis de ambiente, se definidas.
if [ -n "$DJANGO_SUPERUSER_PASSWORD" ]; then
  python manage.py createsuperuser --noinput || true
fi

exec gunicorn config.wsgi:application --bind 0.0.0.0:8003 --workers 2
