import React from 'react';
import ZoneStack from './ZoneStack';

export default function GraveyardZone({ count, latestCardName, opponent }) {
  return (
    <ZoneStack
      label={opponent ? 'Opponent Grave' : 'Graveyard'}
      count={count}
      subtitle={opponent ? 'visible' : latestCardName || 'empty'}
    />
  );
}
