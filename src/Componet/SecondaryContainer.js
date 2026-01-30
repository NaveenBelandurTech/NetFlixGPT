// Contains MovieList Popular Now Playing Movies Trending Horror Movie

import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const {nowPlayingMovies,topRatedVideo,popularVideo,upcomingVideo} = useSelector((data) => {
    return data.movie;
  });
  return (
   nowPlayingMovies && (
    <div className='bg-black'>
      <div className=' -mt-20 pl-12 relative z-20'>
      <MovieList title={"Now Playing Movie"} movie={nowPlayingMovies} /> 
      <MovieList title={"Trending"} movie={topRatedVideo} />
      <MovieList title={"Popular"} movie={popularVideo} />
      <MovieList title={"Upcoming"} movie={upcomingVideo} />
      </div>
    </div>
    )
  );
};
