import Link from "next/link";
import CustomAvatar from "./Avatar.jsx";
import AvatarUnmodified from "./AvatarUnmodified.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleStop,
  faComments,
  faListCheck,
  faDiagramProject,
  faUser,
  faUsers,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import CustomAvatarUnmodified from "./AvatarUnmodified.jsx";

const BottomBar = ({ userName }) => {
  return (
    <nav className="bottom-bar pb-5">
      <div className="rounded-[10px] border-grey-500 border-t-2">
        <ul className="flex items-center justify-center gap-7 ml-7 mt-4">
          <Link href="/home" className="hover:text-indigo-500">
            <FontAwesomeIcon
              icon={faHouse}
              size="lg"
              className="px-2 hover-text mb-3 "
            />
          </Link>
          <Link href="/groupchat" className="hover:text-indigo-500">
            <FontAwesomeIcon
              icon={faComments}
              size="lg"
              className="px-2 hover-text mb-3"
            />
          </Link>
          <Link href="/teamchat" className="hover:text-indigo-500">
            <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              className="px-2 hover-text mb-3"
            />
          </Link>
          <Link href="/projectsubmissions" className="hover:text-indigo-500">
            <FontAwesomeIcon
              icon={faRocket}
              size="lg"
              className="px-2 hover-text mb-3"
            />
          </Link>
          <Link href="/pastprojects" className="hover:text-indigo-500">
            <FontAwesomeIcon
              icon={faListCheck}
              className="px-2 hover-text mb-3 "
            />
          </Link>

          <div className="px-4 hover-text mb-5">
            <Link href="/profile">
              <AvatarUnmodified
                size={30}
                variant="beam"
                username={userName}
                // style={{ marginLeft: "15%" }}
              />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default BottomBar;
