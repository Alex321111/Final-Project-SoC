import Link from 'next/link';
import CustomAvatar from './Avatar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCircleStop,
  faComments,
  faListCheck,
  faDiagramProject,
  faUser,
  faUsers,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

const BottomBar = () => {
  return (
    <nav className="bottom-bar">
      <div className="rounded-[10px]">
        <ul className="flex items-center justify-center  gap-10 ml-7 mt-4">
          <Link href="/home" className="hover:text-primary-500">
            <FontAwesomeIcon
              icon={faHouse}
              size="lg"
              className="px-2 hover-text "
            />
          </Link>
          <Link href="/groupchat" className="hover:text-primary-500">
            <FontAwesomeIcon icon={faComments} size="lg" className="px-2" />
          </Link>
          <Link href="/teamchat" className="hover:text-primary-500">
            <FontAwesomeIcon icon={faUsers} size="lg" className="px-2" />
          </Link>
          <Link href="/projectsubmission" className="hover:text-primary-500">
            <FontAwesomeIcon icon={faRocket} size="lg" className="px-2" />
          </Link>
          <Link href="/pastprojects" className="hover:text-primary-500">
            <FontAwesomeIcon icon={faListCheck} className="px-2" />
          </Link>

          <div className="px-4">
            <Link href="/profile">
              <CustomAvatar
                size={25}
                variant="beam"
                username="Mary"
                style={{ marginLeft: '15%' }}
              />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default BottomBar;
