import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { botttsNeutral } from '@dicebear/collection';

const Avatar = () => {
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 108,
    }).toDataUriSync();
  }, []);
  return <img src={avatar} alt="Avatar" />;
};

export default Avatar;
