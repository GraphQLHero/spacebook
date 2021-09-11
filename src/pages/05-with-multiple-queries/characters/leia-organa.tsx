import React, { useState, useEffect } from 'react';
import fetchGraphQL from '~/fetchGraphQL';
import { CharacterProfile, CharacterPage } from '~/components/ui';
import { V4LeiaOrganaQuery } from '~/__generated__/graphql';
import { profileFragment } from './han-solo';

const query = /* GraphQL */ `
  ${profileFragment}
  query V4LeiaOrganaQuery {
    leiaOrgana {
      ...V4CharacterQuery_character
    }
  }
`;

function Character() {
  const [data, setData] = useState<V4LeiaOrganaQuery | null>(null);

  useEffect(() => {
    fetchGraphQL<V4LeiaOrganaQuery>(query)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
      <CharacterPage>
        <CharacterProfile character={data?.leiaOrgana} design="CARD_WITH_MOVIES" />
      </CharacterPage>
  );
}

export default Character;
