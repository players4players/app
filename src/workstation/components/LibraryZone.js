import React from 'react';
import ZoneStack from './ZoneStack';

export default function LibraryZone({ count, opponent }) {
  return (
    <ZoneStack
      label={opponent ? 'Opponent Library' : 'Library'}
      count={count}
      subtitle={opponent ? 'face down' : 'mock deck'}
    />
  );
}
