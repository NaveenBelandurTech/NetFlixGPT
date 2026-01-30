import { MovieCards } from "./MovieCards";

const MovieList = ({ title, movie }) => {
  return (
    <div className="p-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-6">
          {movie?.map(({ poster_path, original_title }, i) => {
            return (
              <MovieCards
                key={i}
                posterPath={poster_path}
                posteralt={original_title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
