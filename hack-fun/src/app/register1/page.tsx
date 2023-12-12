//Register page tsx
'use client';

import { Input, Button } from '@supabase/ui';
import supabase from '../utils/supabase';

export default function Register() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      email,
      password,
      username,
      name,
      about_me,
      linkedin_link,
      github_link,
      role_description,
      skills,
      avatar_url,
    } = Object.fromEntries(new FormData(e.currentTarget));

    if (
      typeof email === 'string' &&
      typeof password === 'string' &&
      typeof username === 'string' &&
      typeof name === 'string' &&
      typeof about_me === 'string' &&
      typeof linkedin_link === 'string' &&
      typeof github_link === 'string' &&
      typeof role_description === 'string' &&
      typeof skills === 'string' &&
      typeof avatar_url === 'string'
    ) {
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            name,
            about_me,
            linkedin_link,
            github_link,
            role_description,
            skills,
            avatar_url,
          },
        },
      });
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <Input type="username" name="username" label="username" />
        <Input type="name" name="name" label="Full Name" />
        <Input type="about_me" name="about_me" label="About Me" />
        <Input type="linkedin_link" name="linkedin_link" label="LinkedIn" />
        <Input type="github_link" name="github_link" label="Github" />
        <Input
          type="role_description"
          name="role_description"
          label="Are you a bootcamper, exbootcamper or a mentor?"
        />
        <Input
          type="skills"
          name="skills"
          label="Please give us a brief summary of you skills and the tech you have experience with"
        />
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
  );
}
