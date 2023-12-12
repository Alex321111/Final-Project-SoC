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
// }
const CustomAvatar = ({
  variant = 'beam',
  size = 100,
  username = 'Richard',
  color1 = 'F0B300',
  color2 = '11766D',
  color3 = '410936',
  color4 = 'E46F0A',
  color5 = 'A40B54',
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

CustomAvatar.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.number,
  username: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
  color4: PropTypes.string,
  color5: PropTypes.string,
};

export default CustomAvatar;
