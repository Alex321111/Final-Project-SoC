import Link from 'next/link';
import CustomAvatar from './Avatar.jsx';
import AvatarUnmodified from './AvatarUnmodified.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';

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
import CustomAvatarUnmodified from './AvatarUnmodified.jsx';

const BottomBar = ({ userName }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser);
        setUsername(currentUser?.user_metadata?.username || 'Guest');
      }
    );
  }, []);
  useEffect(() => {
    if (user) {
      displayUsername();
    }
  }, [user]);
  const displayUsername = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('user_profiles')
      .select('username')
      .eq('id', user.id);
    if (error) {
      console.error(error);
    } else {
      // Set the points state variable with the result
      setUsername(data[0].username);
      setLoading(false);
    }
  };
  return (
    <nav className="bottom-bar pb-5 w-full">
      <div className="rounded-[10px] border-grey-500 border-t-2 w-full">
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
                username={username}
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
