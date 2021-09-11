import { FC } from 'react';
import { Movie } from './CharacterProfile';
import Image from 'next/image';
import moment from 'moment';

const MovieModal: FC<{ movie: Movie; onClose: () => void }> = ({
  movie,
  onClose,
}) => {
  if (!movie) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-auto flex"
    >
      <div
        onClick={(e) => e.preventDefault()}
        className="relative p-8 my-10 bg-white w-full max-w-screen-lg m-auto flex-col flex rounded-lg overflow-y-auto"
      >
        <div className="px-3 py-2 font-bold text-gray-700 bg-gray-100 text-4xl">
          {movie.title}
        </div>
        <div className="px-3 py-2 text-gray-500 text-xl">
          Date de sortie : {moment(movie.releaseDate).format('ll')}
        </div>
        <div className="px-3 py-3 text-gray-600 flex">
          <div className="w-1/2 h-144 relative">
            <Image
              src={movie.posterUrl || ''}
              alt="Picture of the movie"
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              className="float-left"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8Ww8AAh8BTjL/F68AAAAASUVORK5CYII="
            />
          </div>
          <div className="w-1/2 h-144">
            <div className="grid grid-cols-1 gap-4">
            <div>
              <h4 className="text-2xl mb-4 text-gray-700 bg-gray-100">Personnages</h4>
              <ul className="list-none mb-4">
                {movie.featuredHumans?.map((h, i) => (
                  <li key={i}>{h?.name || ''}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl mb-4 text-gray-700 bg-gray-100">Planètes</h4>
              <ul className="list-none mb-4">
                {movie.featuredPlanets?.map((p, i) => (
                  <li key={i}>{p?.name || ''}</li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;