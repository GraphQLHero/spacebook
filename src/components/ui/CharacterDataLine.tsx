import React, { FC } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { RectShape } from 'react-placeholder/lib/placeholders';

const CharacterDataLine: FC<{ type: string; isReady: boolean }> = ({
  type,
  isReady,
  children,
}) => {
  let icon = '/img/height.svg';
  switch (type) {
    case 'date':
      icon = '/img/date.svg';
      break;
    case 'height':
      icon = '/img/height.svg';
      break;
    case 'lightsaber':
      icon = '/img/lightsaber.svg';
      break;
    case 'planet':
      icon = '/img/planet.svg';
      break;
    case 'weight':
      icon = '/img/weight.svg';
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center mt-4 text-gray-700">
      <img className="h-6 w-6 fill-current" src={icon} alt="Icon" />
      <span className="px-2 text-sm">
        <ReactPlaceholder
          customPlaceholder={
            <RectShape color="#CDCDCD" style={{ width: 50, height: 10 }} />
          }
          showLoadingAnimation
          ready={isReady}
          // type="text"
          // rows={1}
        >
          {children}
        </ReactPlaceholder>
      </span>
    </div>
  );
};

export default CharacterDataLine;
