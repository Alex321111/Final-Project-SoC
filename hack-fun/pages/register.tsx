'use client';

import supabase from '../src/app/utils/supabase';
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
      typeof skills === 'string'
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
          },
        },
      });
    }
  };
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center px-4">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="email"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="password"
          id="password"
          name="password"
        />

        <label htmlFor="username">Username</label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
          id="username"
          name="username"
        />

        <label htmlFor="name">Full Name</label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="about_me">About Me</label>
        <textarea id="about_me" name="about_me"></textarea>

        <label htmlFor="linkedin_link">LinkedIn</label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
          id="linkedin_link"
          name="linkedin_link"
        />

        <label htmlFor="github_link">Github</label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
          id="github_link"
          name="github_link"
        />

        <label htmlFor="role_description">
          Are you a bootcamper, exbootcamper or a mentor?
        </label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
          id="role_description"
          name="role_description"
        />

        <label htmlFor="skills">
          Please give us a brief summary of your skills and the tech you have
          experience with
        </label>
        <textarea id="skills" name="skills"></textarea>

        <button type="submit">Log In</button>
        <p>Forgotten Password</p>
        <p>Here for the first time?</p>
        <button type="submit">Create an Account</button>
      </form>
    </div>
  );
}
