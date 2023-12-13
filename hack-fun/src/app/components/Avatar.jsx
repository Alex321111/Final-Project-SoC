import { useState } from 'react';
import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// const styleName = 'gridy';
// function RandomAvatar() {
//   const [avatarUrl, setAvatarUrl] = useState('');
//   useEffect(() => {
//     const seed = Math.random().toString(36).substring(7);

//     const apiUrl = `https://api.dicebear.com/7.x/croodles/svg?backgroundColor=b6e3f4,c0aede,d1d4f9`;
//     fetch(apiUrl)
//       .then((response) => response.text())
//       .then((data) => setAvatarUrl(data))
//       .catch((error) => console.error('Error fetching avatar:', error));
//   }, [styleName]);

//   return <img src={avatarUrl} alt="Random avatar" />;
//

const CustomAvatar = ({
  variant = 'beam',
  size = 100,
  username = 'Mary',
  color1 = '6E6CD5',
  color2 = '61B4FB',
  color3 = '847AEE',
  color4 = '2A153B',
  color5 = 'FFB238',
}) => {
  const [avatarKey, setAvatarKey] = useState(0);

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
        style={{ borderRadius: '50%', width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};

export default CustomAvatar;
