// @ts-nocheck
import React, { useState, useEffect } from 'react';
import fetchGraphQL from '~/fetchGraphQL';
import { CharactersGrid, CharacterProfile } from '~/components/ui';

const query = /* GraphQL */ `
  query V0HomeQuery {
    lukeSkywalker {
      name
    }
    leiaOrgana {
      name
    }
    hanSolo {
      name
    }
  }
`;

function Home() {
  // We'll load data, initially setting it to null
  const [data, setData] = useState(null);

  // When the component mounts we'll fetch data
  useEffect(() => {
    fetchGraphQL(query)
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
