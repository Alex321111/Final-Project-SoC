//Register page tsx
'use client'

import { Input, Button } from '@supabase/ui'
import supabase from '../utils/supabase'

export default function Register() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password, username, name, about_me, linkedin_link, github_link, role_description, skills} = Object.fromEntries(
      new FormData(e.currentTarget)
    )
    if (
      typeof email === 'string' &&
      typeof password === 'string' &&
      typeof username === 'string' &&
      typeof name === 'string' &&
      typeof about_me === 'string' &&
      typeof linkedin_link === 'string' &&
      typeof github_link === 'string' &&
      typeof role_description === 'string' &&
      typeof skills === 'string'
    ) {
      await supabase.auth.signUp(
        {
          email,
          password,
        },
        {
          data:
          {username, name, about_me, linkedin_link, github_link, role_description, skills,}
        }
      )
    }
  }
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <Input type="username" name="username" label="Username" />
        <Input type="Full Name" name="Full Name" label="Full Name" />
        <Input type="About Me" name="About Me" label="About Me" />
        <Input type="LinkedIn" name="LinkedIn" label="LinkedIn" />
        <Input type="Github" name="Github" label="Github" />
        <Input type="Role Description" name="Role Description" label="Are you a bootcamper, exbootcamper or a mentor?" />
        <Input type="Skills" name="Skills" label="Please give us a brief summary of you skills and the tech you have experience with" />
        <Button type="primary" htmlType="submit">
          Create my Profile
        </Button>
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