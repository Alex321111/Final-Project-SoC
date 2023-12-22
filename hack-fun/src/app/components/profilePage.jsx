import CustomAvatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-solid-svg-icons';
import AvatarUnmodified from '../components/AvatarUnmodified';
import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import {
  faHouse,
  faCircleStop,
  faComments,
  faListCheck,
  faDiagramProject,
  faUser,
  faRightFromBracket,
  faPowerOff,
  faGithub,
} from '@fortawesome/free-solid-svg-icons';
export default function ProfilePage({ userName }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [skills, setSkills] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [points, setPoints] = useState(null);
  const [aboutMe, setAboutMe] = useState('');
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(''); // Set initial loading state to false
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser);
        setPoints(currentUser?.user_metadata?.hack_points || '');
      }
    );
  }, []);
  useEffect(() => {
    if (user) {
      displayPoints();
    }
  }, [user]);
  const displayPoints = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('user_profiles')
      .select(
        'id, username,role_description,about_me, skills, github_link, hack_points'
      )
      .eq('id', user.id);
    if (error) {
      console.error(error);
    } else {
      setUsername(data[0].username);
      setAboutMe(data[0].about_me);
      setSkills(data[0].skills);
      setGithub(data.github_project_link);
      setLoading(false);
      setPoints(data[0].hack_points);
      setRole(data[0].role_description);
    }
  };

  // return () => {
  //   authListener.unsubscribe();
  // };

  return (
    <div className="w-full p-t-8 bg-dark-2 lg:w-10/12 px-4 py- lg:order-3 lg:text-right lg:self-center ">
      <div>
        <div className="py-6 px-3 mt-12 sm:mt-0">
          {/* <button
            className="bg-indigo-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Connect
            <FontAwesomeIcon icon={faGithub} />
          </button> */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <AvatarUnmodified username={username} />
      </div>

      <div className="text-center flex flex-col mt-12">
        <h3 className="text-2xl font-semibold leading-normal text-blueGray-700 mb-2">
          {username ? username : 'Jimmy'}
        </h3>
        <div className="text-sm px-2 py-1 w-20 bg-indigo-200 m-auto text-indigo-800 rounded-full">
          {points ? points : '0'}
        </div>
        <div className="mb-2 text-indigo-500 mt-6 font-bold">
          {role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Bootcamper'}
        </div>{' '}
        <div className="mb-2 text-white">
          {skills
            ? skills
            : 'React | Node.js | JavaScript (ES6+) | HTML5 | CSS3 | Express.js'}
        </div>
      </div>

      <div className="my-8 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
              {aboutMe
                ? aboutMe
                : '👋 Hey there, fellow hackers! Im a passionate tech enthusiast and proud graduate of School of code, where I immersed myself in the intricacies of coding, specializing in React and Next.js'}
              {/* <br></br>
              <br></br>
              Now, as an ex-bootcamper, Ive joined this dynamic Hackathon
              community with a mission to turn innovative ideas into tangible
              solutions.
              <br></br>
              <br></br>
              Im all about crafting sleek web applications, designing efficient
              algorithms, and exploring emerging technologies. I thrive on
              collaboration and believe in the power of diverse minds coming
              together.
              <br></br>
              <br></br>
              Lets connect and code something extraordinary whether you have a
              project idea, want to discuss the latest tech trends or just geek
              out over coding challenges.
              <br></br>
              <br></br>
              Excited to be part of this vibrant community, and looking forward
              to the collaborative coding journey ahead! 🚀✨ */}
            </p>
            <a
              href={github}
              className="font-bold text-pink-500 pointer cursor-pointer"
            >
              Check out my Github!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
