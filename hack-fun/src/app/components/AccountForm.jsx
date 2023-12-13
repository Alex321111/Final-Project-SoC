import React from "react";
import CustomAvatar from "../components/Avatar";

function CreateAccountForm() {
  return (
    <div className="bg-dark-2 max-w-4xl p-6 mx-auto rounded-md shadow-md mt-20">
      <div>
        <CustomAvatar size={40} />
      </div>
      <form className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
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
      <div className="block flex-col justify-end mt-6 ">
        <button
          class="rounded border-solid border-white border bg-blue-900 shadow-lg shadow-blue-500/50 py-1 px-3 ml-100 mt-4"
          type="submit"
        >
          Create my account
        </button>
      </div>
    </div>
  );
}

export default CreateAccountForm;
