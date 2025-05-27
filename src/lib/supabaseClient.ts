
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vscofqncgmldbndqvwxw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzY29mcW5jZ21sZGJuZHF2d3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNTAwMTUsImV4cCI6MjA2MzkyNjAxNX0.wlHKd_vFgrXfTtYd6PF9yNp0t60q6NkVnXXUyk3YW1k'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
