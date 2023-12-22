"use client";
  import React, { useState, useEffect } from "react";
  import supabase from "../utils/supabase";
  
    export default function ProjectCard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from('project_feed')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error: ', error);
        } else {
            console.log('Projects fetched successfully: ', data);
            setProjects(data);
        }
    };

    return (
      <>
        {projects.map((project, index) => (
          <div key={index} className="max-w-2xl mx-auto">
            <div className="m-2 bg-dark-2 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <a href={project.presentation_link}>
                <img
                  className="rounded-t-lg"
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ReactProject"
                />
              </a>
              <div className="p-5">
                <a href={project.presentation_link}>
                  <h5 className="text-blue-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    {project.team_name}
                  </h5>
                </a>
                <p className="font-normal text-white mb-3 dark:text-gray-400">
                  {project.project_description}
                </p>
                <div className="flex justify-between space-x-4">
  <a
    href={project.github_project_link}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Github Project Link
  </a>
  <a
    href={project.presentation_link}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Project Presentation Link
  </a>
</div>
              </div>
            </div>
          </div>
        ))}
      </>
    );


/*

    return (
      <>
        {projects.map((project, index) => (
          <div key={index} className="max-w-2xl mx-auto">
            <div className=" m-2 bg-dark-2 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <a href={project.presentation_link}>
                <img
                  className="rounded-t-lg"
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ReactProject"
                />
              </a>
              <div className="p-5">
                <a href={project.presentation_link}>
                  <h5 className="text-blue-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    {project.team_name}
                  </h5>
                </a>
                <p className="font-normal text-white mb-3 dark:text-gray-400">
                  {project.project_description}
                </p>
                <a
                  href={project.github_project_link}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Github Project Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    );
*/




/*return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.username}</h2>
                    <p>{project.team_name}</p>
                    <a href={project.github_project_link}>Github Project Link</a>
                    <p>{project.project_description}</p>
                    <a href={project.presentation_link}>Presentation Link</a>
                </div>
            ))}
        </div>
    );
}


  return (
    <>
      <div>
        <div className="max-w-2xl mx-auto">
          <div className=" m-2 bg-dark-2 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="ReactProject"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-blue-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  team_name
                </h5>
              </a>
              <p className="font-normal text-white mb-3 dark:text-gray-400">
                project_description
                presentation_link
              </p>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vSC4-YfIvlgggRmPM-jlvKjF_o41ZBYcraKvO-8AKeEMhyeS4yMmCaSf9pyavsw3MzpHPvONz-OZIhj/pub"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                github_project_link
              </a>
            </div>
          </div>
          <p className="mt-5">
            {" "}
            <a
              className="text-blue-600 hover:underline"
              href="#"
              target="_blank"
            ></a>
          </p>
        </div>
      </div>


      <div className="max-w-2xl mx-auto">
        <div className="bg-dark-2 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1576444356170-66073046b1bc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="fetch-api-picture"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-blue-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                team_name
              </h5>
            </a>
            <p className="font-normal text-white mb-3 dark:text-gray-400">
              project_description
              presentation_link
            </p>
            <a
              href="https://github.com/SchoolOfCode/workshop_fetch-challenge"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              github_project_link
            </a>
          </div>
        </div>
        <p className="mt-5">
          {" "}
          <a
            className="text-blue-600 hover:underline"
            href="#"
            target="_blank"
          ></a>
        </p>
      </div>




      <div className="max-w-2xl mx-auto">
        <div className="bg-dark-2 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nextjs-picture"
            />
          </a>
          <div className="p-5 sm:pb-20">
            <a href="https://docs.google.com/document/d/e/2PACX-1vRa4v7rAZWZpBs0R_kH_mPpPl788cY9wDILKJkJL6ieKrU2jtsK_9demcudSFDFSU5uAQ30TEM9ENt8/pub">
              <h5 className="text-blue-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                team_name
              </h5>
            </a>
            <p className="font-normal text-white mb-3 dark:text-gray-400">
              project_description
              presentation_link
            </p>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRa4v7rAZWZpBs0R_kH_mPpPl788cY9wDILKJkJL6ieKrU2jtsK_9demcudSFDFSU5uAQ30TEM9ENt8/pub"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              github_project_link
            </a>
          </div>
        </div>
      </div>


      <div className="max-w-2xl mx-auto">
        <div className="bg-dark-2 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://docs.google.com/document/d/e/2PACX-1vRa4v7rAZWZpBs0R_kH_mPpPl788cY9wDILKJkJL6ieKrU2jtsK_9demcudSFDFSU5uAQ30TEM9ENt8/pub">
              <h5 className="text-blue-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                team_name
              </h5>
            </a>
            <p className="font-normal text-white mb-3 dark:text-gray-400">
              project_description
              presentation_link
            </p>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRa4v7rAZWZpBs0R_kH_mPpPl788cY9wDILKJkJL6ieKrU2jtsK_9demcudSFDFSU5uAQ30TEM9ENt8/pub"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              github_project_link
            </a>
          </div>
        </div>
      </div>
    </>
  );*/
}
