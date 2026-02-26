#!/bin/bash

# Script para desplegar la base de datos de Supabase automáticamente
# Requiere SUPABASE_ACCESS_TOKEN en las variables de entorno

PROJECT_ID="gbabdqbpptljbthazate"

if [ -z "$VITE_SUPABASE_DB_PASSWORD" ]; then
  echo "⚠️ VITE_SUPABASE_DB_PASSWORD no está definida. La migración podría fallar."
fi

echo "🚀 Iniciando despliegue de base de datos para Vibrans..."

# 1. Enlazar el proyecto (usando non-interactive mode)
supabase link --project-ref $PROJECT_ID --password "$VITE_SUPABASE_DB_PASSWORD"

# 2. Empujar migraciones locales al servidor remoto
echo "📦 Sincronizando migraciones..."
supabase db push --password "$VITE_SUPABASE_DB_PASSWORD"

echo "✅ Base de datos sincronizada con éxito."
