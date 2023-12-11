import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse} from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function middleware(req: NextApiRequest, res: NextApiResponse) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession()
  return response
}
