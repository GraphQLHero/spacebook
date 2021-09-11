import React from 'react';
import { CharacterProfile, CharactersGrid } from '~/components/ui';

function Home() {
  const characters = [null, null, null];
  return (
    <CharactersGrid>
      {characters.map((character, i) => (
        <CharacterProfile key={i} character={character} />
      ))}
    </CharactersGrid>
  );
}

export default Home;
