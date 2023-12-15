'use client';
import '../styles/globals.css';
import supabase from '../src/app/utils/supabase';
import CustomAvatar from '../src/app/components/Avatar.jsx';
import SocLogo from '../src/app/components/take-three.png';
import HackAFunLogo from '../src/app/components/hack-a-fun.png';
import Image from 'next/image';
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
    <>
      <div className=" mt-4 mb-2">
        <div className="flex flex-col items-center justfy-center">
          <Image
            className="soc-logo"
            alt={'Soc-logo'}
            width={80}
            height={80}
            src={SocLogo}
          />
        </div>
        {/* <section className="flex flex-col md:flex-grow p-4"> */}
        <div className="flex items-center justify-center">
          <Image
            className="hack-logo"
            width={480}
            height={120}
            src={HackAFunLogo}
            alt="hack-a-fun-logo"
          />
        </div>
        {/* </section> */}
      </div>

      <div className="bg-dark-2 max-w-4xl p-6 m-6 mx-auto rounded-md shadow-md mt-20">
        <div className="flex items-center justify-center">
          <CustomAvatar size={40} />
        </div>
        <form
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div>
            <label htmlFor="linkedin_link">LinkedIn</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              id="linkedin_link"
              name="linkedin_link"
            />
          </div>
          <div>
            <label htmlFor="github_link">Github</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              id="github_link"
              name="github_link"
            />
          </div>
          <div>
            <label htmlFor="role_description">Role</label>
            <select className="block relative w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option id="role_desciption">
                bootcamper
              </option>
              <option  id="role_desciption">
                exbootcamper
              </option>
              <option  id="role_desciption">
                mentor
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="about_me"></label>
            <textarea
              className="justify-start flex block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Tell us about yourself (Max 200 characters)"
              id="about_me"
              name="about_me"
            ></textarea>
          </div>
          <div>
            <textarea
              className="justify-start flex block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Please give us a brief summary of your skills and the tech you have
          experience with (Max 200 characters)"
              id="skills"
              name="skills"
            ></textarea>
          </div>
        </form>
        <div className="block flex items-center justify-center mt-6 ">
          <button
            className="rounded border-solid border-white border bg-blue-900 shadow-lg shadow-blue-500/50 py-1 px-3 ml-100 mt-4"
            type="submit"
          >
            Create my account
          </button>
        </div>
      </div>
    </>
  );
}
