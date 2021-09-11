import React, { FC } from 'react';
import Image from 'next/image';
import ReactPlaceholder from 'react-placeholder';
import { RectShape } from 'react-placeholder/lib/placeholders';

  const CharacterCard: FC<{ avatarUrl?: string | null, design?: "PREVIEW" | "INITIAL" | "CARD_WITH_MOVIES" }> = ({
  children,
  avatarUrl,
  design,
}) => {
  const isReady = !!avatarUrl;
  const imageHeight = design === "PREVIEW" ? "h-144" : "h-112";
  return (
    <div className="m-10 px-2 text-gray-900">
      <div className={'bg-white rounded-lg overflow-hidden'}>
        <ReactPlaceholder
          showLoadingAnimation
          ready={isReady}
          customPlaceholder={
            <RectShape color="#CDCDCD" className={imageHeight} />
          }
        >
          <div className={`w-full relative ${imageHeight}`}>
            <Image
              src={avatarUrl}
              alt="Picture of the character"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8Ww8AAh8BTjL/F68AAAAASUVORK5CYII="
            />
          </div>
        </ReactPlaceholder>
        <div className="py-4 px-6">{children}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
