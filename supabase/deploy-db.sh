# Script para desplegar la base de datos de Supabase automáticamente
set -e

PROJECT_ID="gbasdqbpptljbthazate"

if [ -z "$VITE_SUPABASE_DB_PASSWORD" ]; then
  echo "❌ ERROR: VITE_SUPABASE_DB_PASSWORD no está definida. Úsala así:"
  echo "VITE_SUPABASE_DB_PASSWORD=tu_password bash supabase/deploy-db.sh"
  exit 1
fi

echo "🚀 Iniciando despliegue de base de datos para Vibrans ($PROJECT_ID)..."

# 1. Enlazar el proyecto
echo "🔗 Enlazando el proyecto..."
supabase link --project-ref $PROJECT_ID --password "$VITE_SUPABASE_DB_PASSWORD"

# 2. Empujar migraciones locales al servidor remoto
echo "📦 Sincronizando migraciones..."
supabase db push --password "$VITE_SUPABASE_DB_PASSWORD"

echo "✅ Base de datos sincronizada con éxito."
