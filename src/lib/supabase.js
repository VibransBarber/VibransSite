import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder'

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    console.error('Supabase credentials missing. The app will not function correctly until VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in GitHub Secrets.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
