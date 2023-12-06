/*import {createClient} from '@supabase/supabase-js'
import { Dispatch, SetStateAction } from 'react'

const supabase = createClient(
    process.env.NEXT_PUBLIC_URL as string,
    process.env.NEXT_PUBLIC_ANON_KEY as string,
);

export default supabase;*/


import { createClient } from '@supabase/supabase-js'
import { Dispatch, SetStateAction} from 'react'

const url = process.env.NEXT_PUBLIC_URL
const anonKey = process.env.NEXT_PUBLIC_ANON_KEY

if (!url || !anonKey) {
  throw new Error('Bloody TypeScript!')
}

const supabase = createClient(url, anonKey)

export default supabase;