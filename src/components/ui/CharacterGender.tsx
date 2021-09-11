import React, { FC } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { RectShape } from 'react-placeholder/lib/placeholders';
import {HumanGender} from '__generated__/graphql'

type Props = {
  gender?: HumanGender | null
};

function assertUnreachable(x: never): never {
    throw new Error("Didn't expect to get here");
}

const getGenderIcon = (gender: HumanGender): string => {
    switch (gender) {
        case HumanGender.Male:
            return '♂';
        case HumanGender.Female:
            return '♀';
        case HumanGender.Other:
            return '-';
        case HumanGender.Unknown:
                return '?';
        default:
            assertUnreachable(gender);
    }
}

const CharacterGender: FC<Props> = ({
  gender,
}) => {
  return (
          <ReactPlaceholder
            showLoadingAnimation
            ready={!!gender}
            customPlaceholder={
              <RectShape
                color="#CDCDCD"
                className="inline-block"
                style={{ width: 24, height: 24 }}
              />
            }
          >
            <span>{gender ? getGenderIcon(gender) : null}</span>
          </ReactPlaceholder>
  );
};

export default CharacterGender;
