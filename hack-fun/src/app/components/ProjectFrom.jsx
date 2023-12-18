import React from 'react';

export default function ProjectForm() {
  return (
    <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-dark-2">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-indigo-500 mb-4">
          Submit your project
        </h1>
        <p>Enter your information to register</p>
      </div>
      <div>
        <div className="flex -mx-3">
          <div className="w-1/2 px-3 mb-5">
            <label htmlFor="" className="text-xs font-semibold px-1">
              User name
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                className="w-full -ml-10  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="user87"
              />
            </div>
          </div>
          <div className="w-1/2 px-3 mb-5">
            <label htmlFor="" className="text-xs font-semibold px-1">
              Team name
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Bunch of hacks"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-xs font-semibold px-1">
              Repository link
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="email"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="https://github.com/Selamkd/League-REST-API"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-12">
            <label htmlFor="" className="text-xs font-semibold px-1">
              Demo video/slide link
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="password"
                className="w-full mb-2 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="************"
              />
            </div>
            <label htmlFor="" className="text-xs font-semibold px-1">
              Project description
            </label>
            <textarea
              maxlength="200"
              className="justify-start flex p-4 block w-full y-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Please give us a brief summary of your skills and the tech you have
            experience with (Max 200 characters)"
              id="skills"
              name="skills"
            ></textarea>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-[150px] bg-indigo-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
