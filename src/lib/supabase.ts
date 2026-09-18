import 'server-only'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Server-only client. Uses the secret key, which bypasses Row Level Security,
// so it must never be imported into a client component.
let client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (client) return client

  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const secretKey = process.env.SUPABASE_SECRET_KEY

  if (!url || !secretKey) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SECRET_KEY in environment variables')
  }

  client = createClient(url, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return client
}
