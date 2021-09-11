import React, { FC } from 'react';
import CharacterCard from './CharacterCard';
import CharacterHeadLine from './CharacterHeadLine';
import CharacterMovies from './CharacterMovies';
import CharacterDataLine from './CharacterDataLine';
import type { V5Character_HumanFragment } from '~/__generated__/graphql';

type Maybe<T> = T | null;
export type Character = V5Character_HumanFragment;
export type Movie = {
  __typename?: 'Film';
  title?: Maybe<string>;
  posterUrl?: Maybe<string>;
  episodeNumber?: Maybe<number>;
  releaseDate?: Maybe<any>;
  featuredPlanets?: Maybe<
  ReadonlyArray<Maybe<{ __typename?: 'Planet'; name?: Maybe<string> }>>
  >;
  featuredHumans?: Maybe<
  ReadonlyArray<Maybe<{ __typename?: 'Human'; name?: Maybe<string> }>>
  >;
};
export type Movies = Maybe<ReadonlyArray<Maybe<Movie>>>;

type Props = {
  character?: Maybe<Character>
  design?: "PREVIEW" | "INITIAL" | "CARD_WITH_MOVIES"
  baseUrl?: string
};

const CharacterProfile: FC<Props> = ({ character, baseUrl, design = "INITIAL" }) => {
  return (
    <CharacterCard avatarUrl={character?.avatarUrl} design={design}>
      <CharacterHeadLine
        design={design}
        id={character?.id}
        name={character?.name}
        gender={character?.gender}
        baseUrl={baseUrl}
      />
      {design !== "PREVIEW" ? (
        <>
          {design === "CARD_WITH_MOVIES" ? <CharacterMovies movies={character?.appearsIn || null} /> : null}
          <CharacterDataLine type="date" isReady={!!character?.birthYear}>
            <span>{character?.birthYear}</span>
          </CharacterDataLine>
          <CharacterDataLine type="height" isReady={!!character?.height}>
            <span>{character?.height} cm</span>
          </CharacterDataLine>
          <CharacterDataLine type="weight" isReady={!!character?.mass}>
            {character?.mass} Kg
          </CharacterDataLine>
          <CharacterDataLine
            type="lightsaber"
            isReady={character?.isJedi === true || character?.isJedi === false}
          >
            {character?.isJedi ? 'Jedi' : 'Non Jedi'}
          </CharacterDataLine>
          <CharacterDataLine type="planet" isReady={!!character?.homeWorld}>
            {character?.homeWorld?.name}
          </CharacterDataLine>
        </>
      ) : null}
    </CharacterCard>
  );
};

export default CharacterProfile;
