'use client';
import supabase from '../utils/supabase';
import { useState } from 'react';
import React from 'react';
import Alert from '../components/Alert';

/*export default function ProjectForm() {
  const notify = () => toast('Wow so easy!');
  
  const ProjectSubmission = () => {
    const [user, setUser] = useState(null);
    const [newProject, setNewProject] = useState('');
    const [username, setUsername] = useState('');
    const [teamname, setTeamname] = useState('');
    const [github_project_link, setGithub_project_link] = useState('');
    const [presentation_link, setPresentation_link] = useState('');
    const [project_description, setProject_description] = useState('');
   // const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          const currentUser = session?.user;
          setUser(currentUser);
        }
      );
  
      // return () => {
      // 	authListener.unsubscribe();
      // };
    }, []);
*

/*
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleSkillsChange = (e) => {
      setSkills(e.target.value);
    };
  
    const handleRoleChange = (e) => {
      setRoleDescription(e.target.value);
    };
  
    const handleGithubChange = (e) => {
      setGithub(e.target.value);
    };
  
    const handleLinkedInChange = (e) => {
      setLinkedIn(e.target.value);
    };
  
    const handleAboutMeChange = (e) => {
      setAboutMe(e.target.value);
    };
*/

/*
        await supabase.public.project_feed({
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
        });*/

/*const handleSubmit = async (e) => {
      e.preventDefault();
      const {
        username,
        teamname,
        github_project_link,
        presentation_link,
        project_description,
      } = Object.fromEntries(new FormData(e.currentTarget));
      if (
        typeof username === 'string' &&
        typeof teamname === 'string' &&
        typeof github_project_link === 'string' &&
        typeof presentation_link === 'string' &&
        typeof project_description === 'string'         
      ) {

        const handleNewProject = async (event) => {
          event.preventDefault();
      
          if (user) {
            const { data, error } = await supabase
              .from('project_feed')
              .insert([{ username: newUsername, user_id: user.id, teamname: newTeamname, github_project_link: newGithub_project_link, presentation_link: newPresentation_link, project_description: newProject_description}]);
      
            if (error) {
              console.error('Error inserting project: ', error);
            } else {
              setNewProject('');
            }
          }
        };}



      }
    };*/

export default function ProjectForm() {
  const [alert, setAlert] = useState(false);
  const [username, setUsername] = useState('');
  const [teamName, setTeamName] = useState('');
  const [githubProjectLink, setGithubProjectLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [presentationLink, setPresentationLink] = useState('');

  function handleCloseAlert() {
    setAlert(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('project_feed').insert([
      {
        username: username,
        team_name: teamName,
        github_project_link: githubProjectLink,
        project_description: projectDescription,
        presentation_link: presentationLink,
      },
    ]);
    if (error) {
      console.error('Error: ', error);
    } else {
      console.log('Success: ', data);
      setAlert(true);
    }
  };

  return (
    <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-dark-2">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl text-indigo-500 mb-4">
            Submit your project
          </h1>
          <p>Enter your information to register</p>
        </div>
        <div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="username" className="text-xs font-semibold px-1">
                Username
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  className="w-full text-dark-2 -ml-10  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  className="w-full text-dark-2 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Bunch of hacks"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
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
                  type="text"
                  className="w-full text-dark-2 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="https://github.com/user/repo"
                  value={githubProjectLink}
                  onChange={(e) => setGithubProjectLink(e.target.value)}
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
                  type="text"
                  className="w-full text-dark-2 mb-2 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="https://youtube.com/demo"
                  value={presentationLink}
                  onChange={(e) => setPresentationLink(e.target.value)}
                />
              </div>
              <label htmlFor="" className="text-xs font-semibold px-1">
                Project description
              </label>
              <textarea
                className="justify-start flex p-4 text-black w-full y-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Describe your project..."
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                maxLength="200"
              ></textarea>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-[150px] bg-indigo-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009B49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                >
                  Submit
                </button>
                {alert && (
                  <Alert
                    message={`Thank you for submitting your project !`}
                    type="indigo"
                    onClose={handleCloseAlert}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

/*
  return (
    <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-dark-2">
      <form onSubmit={handleSubmit}>
    <div className="text-center mb-10">
      <h1 className="font-bold text-3xl text-indigo-500 mb-4">
        Submit your project
      </h1>
      <p>Enter your information to register</p>
    </div>
    <div>
      <div className="flex -mx-3">
        <div className="w-1/2 px-3 mb-5">
          <label htmlFor="username" className="text-xs font-semibold px-1">
            Username
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              className="w-full -ml-10  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              id="username"
              name="username"
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
              onClick={notify}
              type="submit"
              className="w-[150px] bg-indigo-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009B49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
);
}*/
