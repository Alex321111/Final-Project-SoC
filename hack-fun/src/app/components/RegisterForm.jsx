import React from 'react';
import CustomAvatar from './Avatar';
import Image from 'next/image';
//import '../styles/globals.css';
import HackAFunLogo from '../components/hack-a-fun.png';

function CreateAccountForm(props) {
  const { handleSubmit } = props;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };
  return (
    <>
      <div className="mr-6 mt-4">
        <section className="flex flex-col md:flex-grow">
          <div className="flex items-center  justify-center">
            <Image
              className="hack-logo"
              width={680}
              height={120}
              src={HackAFunLogo}
              alt="hack-a-fun-logo"
            />
          </div>
        </section>
      </div>

      <div className="bg-dark-2 max-w-4xl p-6 mx-auto rounded-md shadow-md mt-5">
        <div className="flex justify-center">
          {' '}
          <CustomAvatar size={50} />{' '}
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1"
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
              <option
                value="bootcamper"
                type="text"
                id="role_desciption"
                name="role_desciption"
              >
                bootcamper
              </option>
              <option
                value="exbootcamper"
                type="text"
                id="role_desciption"
                name="role_desciption"
              >
                exbootcamper
              </option>
              <option
                value="mentor"
                type="text"
                id="role_desciption"
                name="role_desciption"
              >
                mentor
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="about_me"></label>
            <textarea
              maxlength="200"
              className="justify-start flex block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Tell us about yourself (Max 200 characters)"
              id="about_me"
              name="about_me"
            ></textarea>
          </div>
          <div>
            <textarea
              maxlength="200"
              className="justify-start flex block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Please give us a brief summary of your skills and the tech you have
            experience with (Max 200 characters)"
              id="skills"
              name="skills"
            ></textarea>
          </div>
        </form>
        <div className="block flex-col items-center justify-end mt-6 ">
          <button
            class="w-full rounded border-solid border-white border bg-blue-900 shadow-lg shadow-blue-500/50 py-1 px-3 mt-4"
            type="submit"
          >
            Create my account
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateAccountForm;
