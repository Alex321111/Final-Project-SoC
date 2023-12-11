import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleStop } from '@fortawesome/free-solid-svg-icons';
const LeftSideBar = () => {
  return (
    <nav className="leftsidebar flex min-h-screen -mr-3.5">
      <div className="flex flex-col gap-11">
        <img className="soc-logo" src="./take-three.png" />
        <ul className="py-4 px-6">
          <Link href="/">
            <li className="py-3">
              {' '}
              <FontAwesomeIcon icon={faHouse} className="px-2" /> Home
            </li>
          </Link>
          <Link href="/groupchat">
            <li className="py-3">Community chat</li>
          </Link>
          <Link href="/teamchat">
            <li className="py-3">Team chat</li>
          </Link>
          <Link href="/projectsubmissions">
            <li className="py-3"> Project submissions </li>
          </Link>
          <Link href="/pastprojects">
            <li className="py-3">Past projects </li>
          </Link>
          <Link href="/profile">
            <li className="py-3">Profile </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default LeftSideBar;
