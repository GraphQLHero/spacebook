import React, { FC } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { RectShape } from 'react-placeholder/lib/placeholders';
import romanize from './romanize';
import { Movie, Movies } from './CharacterProfile';
import MovieModal from './MovieModal';

const MovieButton: FC<{ episodeNumber?: number | null; onClick: () => void }> =
  ({ episodeNumber, onClick }) => {
    if (!episodeNumber) return null;
    return (
      <span
        onClick={onClick}
        key={episodeNumber}
        className="p-2 mr-2 bg-red-200 font-bold cursor-pointer"
      >
        {romanize(episodeNumber)}
      </span>
    );
  };

const CharacterMovies: FC<{
  movies: Movies;
}> = ({ movies }) => {
  const isReady = !!(movies && movies.length);
  const [selectedMovieIndex, selectMovieIndex] = React.useState<number | null>(typeof window != "undefined" && window.location && (new URL(window.location.href)).searchParams.get('movie') ? parseInt((new URL(window.location.href)).searchParams.get('movie') || '', 10) : null);
  const selectedMovie = (movies && selectedMovieIndex && movies[selectedMovieIndex]) ? movies[selectedMovieIndex] : null;
  return (
    <div className="my-4">
      <ReactPlaceholder
        showLoadingAnimation
        ready={isReady}
        customPlaceholder={
          <RectShape color="#CDCDCD" className="w-1/4" style={{ height: 32 }} />
        }
      >
        {movies?.map((movie, i) => (
          <MovieButton
            key={i}
            onClick={() => selectMovieIndex(i)}
            episodeNumber={movie?.episodeNumber}
          />
        ))}
        {selectedMovie ? (
          <MovieModal onClose={() => selectMovieIndex(null)} movie={selectedMovie} />
        ) : null}
      </ReactPlaceholder>
    </div>
  );
};
export default CharacterMovies;
