import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

// Adicione esta verificação aqui:
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Variáveis de ambiente do Supabase não encontradas! Verifique seu arquivo .env")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
