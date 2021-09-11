import React, { useState, useEffect } from 'react';
import fetchGraphQL from '~/fetchGraphQL';
import { CharactersGrid, CharacterProfile } from '~/components/ui';
import { V3HomeQuery } from '~/__generated__/graphql';

const query = /* GraphQL */ `
  fragment V3HomeQuery_character on Human {
    id
    name
    height
    mass
    gender
    birthYear
    isJedi
    avatarUrl
    homeWorld {
      name
      diameter
    }
  }
  query V3HomeQuery {
    lukeSkywalker {
      ...V3HomeQuery_character
    }
    leiaOrgana {
      ...V3HomeQuery_character
    }
    hanSolo {
      ...V3HomeQuery_character
    }
  }
`;

function Home() {
  // We'll load data, initially setting it to null
  const [data, setData] = useState<V3HomeQuery | null>(null);

  // When the component mounts we'll fetch data
  useEffect(() => {
    fetchGraphQL<V3HomeQuery>(query, {}, 'V3HomeQuery')
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const characters = [data?.lukeSkywalker, data?.leiaOrgana, data?.hanSolo];

  return (
    <CharactersGrid>
      {characters.map((character, i) => (
        <CharacterProfile key={i} character={character} />
      ))}
    </CharactersGrid>
  );
}

export default Home;
