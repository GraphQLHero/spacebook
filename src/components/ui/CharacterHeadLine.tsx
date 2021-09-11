import React, { FC } from 'react';
import Link from 'next/link';
import ReactPlaceholder from 'react-placeholder';
import { RectShape } from 'react-placeholder/lib/placeholders';
import slugify from './slugify';
import CharacterGender from './CharacterGender';
import {HumanGender} from '__generated__/graphql'

type Props = {
  id?: string | null
  name?: string | null
  gender?: HumanGender | null
  design?: "PREVIEW" | "INITIAL" | "CARD_WITH_MOVIES"
  baseUrl?: string
};

const CharacterHeadLine: FC<Props> = ({
  id,
  name,
  gender,
  design,
  baseUrl
}) => {
  return (
    <h4 className="text-2xl font-semibold text-gray-800">
      <ReactPlaceholder
        showLoadingAnimation
        ready={!!name}
        customPlaceholder={
          <RectShape color="#CDCDCD" className="w-1/4" style={{ height: 32 }} />
        }
      >
        {design === "PREVIEW" && id ? (
          <Link href={`${baseUrl}/characters/${id}`}>
            {name}
          </Link>
        ) : design === "PREVIEW" && name ? (
          <Link href={`${baseUrl}/characters/${slugify(name)}`}>
            {name}
          </Link>
        ) : (
          <span>{name}</span>
        )}
        {design == "CARD_WITH_MOVIES" ? (
          <CharacterGender gender={gender} />
        ) : null}
      </ReactPlaceholder>
    </h4>
  );
};

export default CharacterHeadLine;
