import CustomAvatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-solid-svg-icons";
import AvatarUnmodified from "../components/AvatarUnmodified";
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
} from "@fortawesome/free-solid-svg-icons";
export default function ProfilePage({ userName }) {
  return (
    <div className="w-full bg-dark-2 lg:w-10/12 px-4 py- lg:order-3 lg:text-right lg:self-center ">
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
        <AvatarUnmodified userName={userName} />
      </div>

      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          {userName}
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          Bootcamp grad
        </div>
        <div className="mb-2 text-blueGray-600 mt-10">
          <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
          Developer
        </div>
        <div className="mb-2 text-blueGray-600">
          <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
          React | Node.js | JavaScript (ES6+) | HTML5 | CSS3 | Express.js |
          MongoDB | RESTful API Design | Git/GitHub | Responsive Web | Team
          Collaboration | Communication Skills
        </div>
      </div>

      <div className="mt-8 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
              👋 Hey there, fellow hackers! I'm a passionate tech enthusiast and
              proud graduate of School of code, where I immersed myself in the
              intricacies of coding, specializing in React and Next.js.
              <br></br>
              <br></br>
              Now, as an ex-bootcamper, I've joined this dynamic Hackathon
              community with a mission to turn innovative ideas into tangible
              solutions.
              <br></br>
              <br></br>
              I'm all about crafting sleek web applications, designing efficient
              algorithms, and exploring emerging technologies. I thrive on
              collaboration and believe in the power of diverse minds coming
              together.
              <br></br>
              <br></br>
              Let's connect and code something extraordinary whether you have a
              project idea, want to discuss the latest tech trends or just geek
              out over coding challenges.
              <br></br>
              <br></br>
              Excited to be part of this vibrant community, and looking forward
              to the collaborative coding journey ahead! 🚀✨
            </p>
            <a href="#pablo" className="font-normal text-pink-500">
              Check out my Github!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
