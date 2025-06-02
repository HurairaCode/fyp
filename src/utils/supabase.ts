import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase_client = createClient('https://zsmadaiddqwqntgdyliq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzbWFkYWlkZHF3cW50Z2R5bGlxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODUzNTg3NiwiZXhwIjoyMDY0MTExODc2fQ.gF64RHEV3irWrNNv_k-2URskknEMTxucjui8LmQNZYc')
