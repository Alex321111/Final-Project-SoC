import CustomAvatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faHouse,
  faCircleStop,
  faComments,
  faListCheck,
  faDiagramProject,
  faUser,
  faRightFromBracket,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
export default function ProfilePage({ userName }) {
  return (
    <div>
      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
        <div className="py-6 px-3 mt-12 sm:mt-0">
          <button
            className="bg-indigo-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Connect
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CustomAvatar userName={userName} />
      </div>

      {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
        <div className="flex justify-center py-4 lg:pt-4 pt-8">
          <div className="mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
              22
            </span>
            <span className="text-sm text-blueGray-400">Friends</span>
          </div>
          <div className="mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
              10
            </span>
            <span className="text-sm text-blueGray-400">Photos</span>
          </div>
          <div className="lg:mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
              89
            </span>
            <span className="text-sm text-blueGray-400">Comments</span>
          </div>
        </div>
      </div> */}

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
          Solution Manager - Creative Tim Officer
        </div>
        <div className="mb-2 text-blueGray-600">
          <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
          University of Computer Science
        </div>
      </div>

      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
              An artist of considerable range, Jenna the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm, intimate feel with
              a solid groove structure. An artist of considerable range.
            </p>
            <a href="#pablo" className="font-normal text-pink-500">
              Show more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
