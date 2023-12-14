//Register page tsx
'use client';
import '../styles/globals.css';
import { useState } from 'react';
import react from 'react';
import CustomAvatar from '../src/app/components/Avatar.jsx';
import CreateAccountForm from '../src/app/components/RegisterForm.jsx';
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
      avatar_image_url,
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
    <div className="form-page">
      <CreateAccountForm handleSubmit={handleSubmit} />
    </div>
  );
}
