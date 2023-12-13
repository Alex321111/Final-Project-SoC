//Register page tsx
'use client';

import { useState } from 'react';
import react from 'react';
import CustomAvatar from '../src/app/components/Avatar.jsx';

import supabase from '../src/app/utils/supabase';
export default function Register() {
  const [avatarUrl, setAvatarUrl] = useState('');

  const generateAvatarUrl = (username: string): string => {
    const avatarUrl = 'https://source.boringavatars.com/';
    const variant = 'beam';

    const fullAvatarUrl = `${avatarUrl}${variant}/40/${encodeURIComponent(
      username
    )}`;

    return fullAvatarUrl;
  };

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
      avatar_image_url
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
      typeof avatar_image_url === 'string'
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
            avatar_image_url,
          },
        },
      });
    }
    if (username === 'string') {
      const userAvatarUrl = generateAvatarUrl(username);
      setAvatarUrl(userAvatarUrl);
    }
  };
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <CustomAvatar size={40} url={avatarUrl} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="about_me">About Me</label>
        <textarea id="about_me" name="about_me"></textarea>

        <label htmlFor="linkedin_link">LinkedIn</label>
        <input type="text" id="linkedin_link" name="linkedin_link" />

        <label htmlFor="github_link">Github</label>
        <input type="text" id="github_link" name="github_link" />

        <label htmlFor="role_description">
          Are you a bootcamper, exbootcamper or a mentor?
        </label>
        <input type="text" id="role_description" name="role_description" />

        <label htmlFor="skills">
          Please give us a brief summary of your skills and the tech you have
          experience with
        </label>
        <textarea id="skills" name="skills"></textarea>

        <button type="submit">Create my account</button>

        {/* <button type="submit">Create an Account</button> */}
      </form>
    </div>
  );
}
