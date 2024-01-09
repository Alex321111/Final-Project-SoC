import CustomAvatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-solid-svg-icons';
import AvatarUnmodified from '../components/AvatarUnmodified';
import { useState, useEffect } from 'react';
import Link from 'next/link';
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
  faUserPen,
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
      setGithub(data[0].github_link);
      setLoading(false);
      setPoints(data[0].hack_points);
      setRole(data[0].role_description);
      console.log(github);
    }
  };

  // return () => {
  //   authListener.unsubscribe();
  // };

  return (
    <div className="w-full p-t-8 bg-dark-2 lg:w-10/12 px-4 py- lg:order-3 lg:text-right lg:self-center ">
      <div></div>
      <Link href="/editprofile">
        <FontAwesomeIcon
          className="pr-4 pt-5  text-indigo-200 "
          icon={faUserPen}
        />
      </Link>
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
              className="font-bold text-pink-500 pointer hover:text-off-white cursor-pointer"
            >
              Check out my Github!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
                style={{ fill: '#FFFFFF' }}
                className="inline-block ml-2"
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
