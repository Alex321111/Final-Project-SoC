import Link from 'next/link';
import Image from 'next/image';
import SocLogo from '../components/take-three.png';
import Avatar from './Avatar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomAvatar from './Avatar.jsx';

import {
  faHouse,
  faCircleStop,
  faComments,
  faListCheck,
  faDiagramProject,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const LeftSideBar = () => {
  return (
    <nav className="leftsidebar fixed flex-col flex min-h-screen -mr-3.5">
      <div className="flex flex-col gap-11 flex-grow">
        <div className="flex flex-col items-center justfy-center">
          <Image className="soc-logo" width={80} height={80} src={SocLogo} />
        </div>
        <ul className="py-4 px-3">
          <Link href="/home">
            <li className=" hover:bg-primary-500  rounded-lg py-1">
              {' '}
              <FontAwesomeIcon icon={faHouse} className="px-2" /> Home
            </li>
          </Link>
          <Link href="/groupchat">
            <li className=" hover:bg-primary-500  rounded-lg py-5">
              <FontAwesomeIcon icon={faComments} className="px-2" />
              Community chat
            </li>
          </Link>
          <Link href="/teamchat">
            <li className=" hover:bg-primary-500  rounded-lg px-1">
              <FontAwesomeIcon icon={faComments} className="px-2" />
              Team chat
            </li>
          </Link>
          <Link href="/projectsubmissions">
            <li className="py-3 hover:bg-primary-500 rounded-lg px-1">
              <FontAwesomeIcon icon={faListCheck} className="px-2" />
              Project submissions
            </li>
          </Link>
          <Link href="/pastprojects">
            <li className="py-3 hover:bg-primary-500  rounded-lg px-2">
              <FontAwesomeIcon icon={faDiagramProject} className="px-2" />
              Past projects{' '}
            </li>
          </Link>
          <Link href="/profile">
            <li className="py-3 hover:bg-primary-500  rounded-lg px-2">
              <FontAwesomeIcon icon={faUser} className="px-2" />
              Profile{' '}
            </li>
          </Link>
        </ul>
        <div
          className="flex items-center"
          style={{ marginTop: '50px', marginLeft: '1rem' }}
        >
          <CustomAvatar size={30} variant="beam" username="Mary" />
          <span style={{ marginLeft: '1rem' }}>Julian</span>
        </div>
      </div>
    </nav>
  );
};
export default LeftSideBar;
