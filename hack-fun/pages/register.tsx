'use client';
import '../styles/globals.css';
import supabase from '../src/app/utils/supabase';
import CustomAvatar from '../src/app/components/Avatar.jsx';
import SocLogo from '../src/app/components/take-three.png';
import HackAFunLogo from '../src/app/components/hack-a-fun.png';
import Image from 'next/image';
import { useState } from 'react';
export default function Register() {
  const [userName, setUserName] = useState<string>('');

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUserName(value);
    console.log(value);
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
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md  mt-20">
        <div className="flex items-center justify-center">
          <CustomAvatar size={40} username={userName} />
        </div>
        <form
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 bg-dark-2 p-6"
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
              value={userName}
              onChange={handleUserName}
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
          {/* <div>
            <label htmlFor="role_description">
          Are you a bootcamper, exbootcamper or a mentor?
        </label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-dark-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
          id="role_description"
          name="role_description"
        />
        
         </div> */}
         <div>
  <label htmlFor="role_description">Role</label>
  <select 
    id="role_description" 
    name="role_description" 
    className="block relative w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
  >
    <option value="bootcamper">bootcamper</option>
    <option value="exbootcamper">exbootcamper</option>
    <option value="mentor">mentor</option>
  </select>
</div>
          <div>
            <label htmlFor="about_me">About Me</label>
            <textarea
              className="justify-start flex block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Tell us about yourself (Max 200 characters)"
              id="about_me"
              name="about_me"
            ></textarea>
          </div>
          <div>
          <label htmlFor="about_me">Skills</label>
            <textarea
              className="justify-start flex block w-full mt-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Please give us a brief summary of your skills and the tech you have
          experience with (Max 200 characters)"
              id="skills"
              name="skills"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
          <button 
          className="w-[150px] bg-indigo-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
         type="submit">Create an Account</button>
         </div>
        </form>
      </section>
    </>
    /* <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <Image
            className="soc-logo"
            alt={'Soc-logo'}
            width={80}
            height={80}
            src={SocLogo}
          />

          {/* <section className="flex flex-col md:flex-grow p-4"> */
    /* <div className="flex items-center justify-center">
            <Image
              className="hack-logo"
              width={480}
              height={120}
              src={HackAFunLogo}
              alt="hack-a-fun-logo"
            />
          </div>
          {/* </section> */
    /* </div>

        <div className="bg-dark-2 max-w-4xl p-6 m-6 mx-auto rounded-md shadow-md mt-20 ">
          <div className="flex items-center justify-center">
            <CustomAvatar size={40} username={userName} />
          </div>
          <form
            className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"
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
                value={userName}
                onChange={handleUserName}
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
                <option id="role_desciption">bootcamper</option>
                <option id="role_desciption">exbootcamper</option>
                <option id="role_desciption">mentor</option>
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
      </div> */
  );
}


