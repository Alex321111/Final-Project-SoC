import { useMemo } from 'react ';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

const Avatar = () => {
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 128,
      // ... other options
    }).toDataUriSync();
  }, []);
  return <img src={avatar} alt="Avatar" />;
};

export default Avatar;
