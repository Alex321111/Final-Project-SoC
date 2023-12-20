import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import supabase from '../utils/supabase';

const CustomAvatarUnmodified = ({
  variant = 'beam',
  size = 100,
  username = 'Mary',
  color1 = '6E6CD5',
  color2 = '61B4FB',
  color3 = '847AEE',
  color4 = '2A153B',
  color5 = 'FFB238',
}) => {
  const [user, setUser] = useState(null);
  const [avatarKey, setAvatarKey] = useState(0);
  const [points, setPoints] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser);
        setPoints(currentUser?.user_metadata?.username || '');
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
      .select('username')
      .eq('id', user.id);

    if (error) {
      console.error(error);
    } else {
      // Set the points state variable with the result
      setPoints(data[0].username);
      setLoading(false);
    }
  };

  const generateNewAvatar = () => {
    setAvatarKey((prevKey) => prevKey + 1);
  };

  const avatarUrl = `https://source.boringavatars.com/${variant}/${size}/${encodeURIComponent(
    username
  )}?colors=${color1},${color2},${color3},${color4},${color5}`;

  return (
    <div>
      <img
        key={avatarKey}
        src={avatarUrl}
        alt={`Avatar for ${username}`}
        style={{
          borderRadius: '50%',
          width: `${size}px`,
          height: `${size}px`,
          marginRight: '10px',
        }}
      />
      <div>
        <p>{points}</p>
      </div>
    </div>
  );
};

export default CustomAvatarUnmodified;
