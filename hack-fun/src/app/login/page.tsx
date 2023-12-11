//Register page tsx
'use client'

import { Input, Button } from '@supabase/ui'
import supabase from '../utils/supabase'

export default function Register() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    if (
      typeof email === 'string' &&
      typeof password === 'string'
    ) {
      await supabase.auth.signUp(
        {
          email,
          password,
        },
      )
    }
  }
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
        <p>Forgotten Password</p>
        <p>Here for the first time?</p>
        <Button type="primary" htmlType="submit">
          Create an Account
        </Button>
      </form>
    </div>
  )
}