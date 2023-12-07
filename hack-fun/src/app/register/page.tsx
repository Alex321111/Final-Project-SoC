//Register page tsx
'use client'

import supabase from '../utils/supabase'

export default function Register() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, username, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    if (
      typeof email === 'string' &&
      typeof password === 'string' &&
      typeof username === 'string'
    ) {
      await supabase.auth.signUp(
        {
          email,
          password,
        },
        {
          data: {
            username,
          },
        }
      )
    }
  }
  return (
  <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
    <form className="w-full space-y-2" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Username
        <input type="text" name="username" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">
        Sign up
      </button>
    </form>
  </div>
)
  }

// begin
// --create a new profile when user signs up
// insert into UserProfiles(id, created_at, name, username, email, about_me, linkedIn, github, roleDescriptor)
// values(new.id, new.created_at, new.name, new.username, new.email, new.about_me, new.linkedIn, new.github, new.roleDescriptor);

// return new;

// end;