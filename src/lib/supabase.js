import { createClient } from '@supabase/supabase-js'

// Limpiamos la URL para evitar errores de duplicación o protocolos faltantes
let rawUrl = import.meta.env.VITE_SUPABASE_URL || ''
let supabaseUrl = rawUrl.trim()

if (supabaseUrl && !supabaseUrl.startsWith('http')) {
    // Si el usuario puso el ID de proyecto o la URL sin https
    if (supabaseUrl.includes('.supabase.co')) {
        supabaseUrl = `https://${supabaseUrl}`
    } else {
        supabaseUrl = `https://${supabaseUrl}.supabase.co`
    }
}

const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim()

// Log de ayuda (puedes borrarlo después de que funcione)
if (supabaseUrl && supabaseUrl !== 'https://placeholder.supabase.co') {
    console.log('Intentando conectar a Supabase:', supabaseUrl)
}

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    console.error('ERROR: Credenciales de Supabase no configuradas correctamente en el entorno (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).')
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder')
