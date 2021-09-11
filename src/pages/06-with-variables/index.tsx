import React, { useState, useEffect } from 'react';
import fetchGraphQL from '~/fetchGraphQL';
import { CharactersGrid, CharacterProfile } from '~/components/ui';
import { V2HomeQuery } from '~/__generated__/graphql';

const query = /* GraphQL */ `
  fragment V5PreviewCharacter_human on Human {
    id
    name
    gender
    avatarUrl
  }
  query V5HomeQuery {
    humans {
      ...V5PreviewCharacter_human
    }
  }
`;

function Home() {
  // We'll load data, initially setting it to null
  const [data, setData] = useState<V2HomeQuery | null>(null);

  // When the component mounts we'll fetch data
  useEffect(() => {
    fetchGraphQL<V2HomeQuery>(query, {}, 'V2HomeQuery')
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
        <CharacterProfile key={i} character={character} design="PREVIEW" baseUrl="/06-with-variables" />
      ))}
    </CharactersGrid>
  );
}

export default Home;
