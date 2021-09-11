import React, { useState, useEffect } from 'react';
import fetchGraphQL from '~/fetchGraphQL';
import { CharacterProfile, CharacterPage } from '~/components/ui';
import { V4HanSoloQuery } from '~/__generated__/graphql';

export const profileFragment = /* GraphQL */ `
  fragment V4CharacterQuery_character on Human {
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
    appearsIn {
      title
      posterUrl
      episodeNumber
      releaseDate
      featuredPlanets {
        name
      }
      featuredHumans {
        name
      }
    }
  }
`;

const query = /* GraphQL */ `
  ${profileFragment}
  query V4HanSoloQuery {
    hanSolo {
      ...V4CharacterQuery_character
    }
  }
`;

function Character() {
  const [data, setData] = useState<V4HanSoloQuery | null>(null);

  useEffect(() => {
    fetchGraphQL<V4HanSoloQuery>(query)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
      <CharacterPage>
        <CharacterProfile character={data?.hanSolo} design="CARD_WITH_MOVIES" />
      </CharacterPage>
  );
}

export default Character;
