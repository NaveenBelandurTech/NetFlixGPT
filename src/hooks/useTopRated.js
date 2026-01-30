import { useEffect } from "react";
import { API_CONSTANT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedVideo } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const Dispatch = useDispatch();
  const TopRated = useSelector((data)=>data.movie.
topRatedVideo)
  {console.log(TopRated,'Top rated')}
  try {
    const FetchMovies = async () => {
      const MovieList = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_CONSTANT,
      );

      const movieList = await MovieList.json();
      Dispatch(addTopRatedVideo(movieList?.results));
    };

    useEffect(() => {
      if(!TopRated) FetchMovies();
      
    }, []);
  } catch (err) {
    throw new Error(err);
  }
};

export default useTopRatedMovies;
