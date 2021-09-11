import React, { useState, useEffect } from 'react';
import fetchGraphQL from '~/fetchGraphQL';
import { CharactersGrid, CharacterProfile } from '~/components/ui';
import { V4HomeQuery } from '~/__generated__/graphql';

const query = /* GraphQL */ `
  fragment V4HomeQuery_character on Human {
    name
    avatarUrl
  }
  query V4HomeQuery {
    humans {
      ...V4HomeQuery_character
    }
  }
`;

function Home() {
  // We'll load data, initially setting it to null
  const [data, setData] = useState<V4HomeQuery | null>(null);

  // When the component mounts we'll fetch data
  useEffect(() => {
    fetchGraphQL<V4HomeQuery>(query)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const characters = data?.humans || [null, null, null];

  return (
    <CharactersGrid>
      {characters.map((character, i) => (
        <CharacterProfile key={i} character={character} design="PREVIEW" baseUrl="/05-with-multiple-queries" />
      ))}
    </CharactersGrid>
  );
}

export default Home;
