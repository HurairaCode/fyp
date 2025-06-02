// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zsmadaiddqwqntgdyliq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzbWFkYWlkZHF3cW50Z2R5bGlxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODUzNTg3NiwiZXhwIjoyMDY0MTExODc2fQ.gF64RHEV3irWrNNv_k-2URskknEMTxucjui8LmQNZYc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
