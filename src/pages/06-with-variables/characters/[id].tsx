import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetchGraphQL from '~/fetchGraphQL';
import { CharacterProfile, CharacterPage } from '~/components/ui';
import { V5CharacterQuery } from '~/__generated__/graphql';

const query = /* GraphQL */ `
  fragment V5Character_human on Human {
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
  query V5CharacterQuery($id: ID!) {
    human(id: $id) {
      ...V5Character_human
    }
  }
`;

function Character() {
  const router = useRouter();
  let { id } = router.query;
  const [data, setData] = useState<V5CharacterQuery | null>(null);

  useEffect(() => {
    fetchGraphQL<V5CharacterQuery>(query, { id }, 'V5CharacterQuery')
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <CharacterPage>
        <CharacterProfile character={data?.human} design="INITIAL" />
      </CharacterPage>
    </>
  );
}

export default Character;
