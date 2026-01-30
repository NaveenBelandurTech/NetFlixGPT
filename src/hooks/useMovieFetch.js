import { useEffect } from "react";
import { API_CONSTANT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useSelector } from "react-redux";


const useNowPlayingMovie = () => {
  const Dispatch = useDispatch();
  const Selector = useSelector((data)=>data.movie.nowPlayingMovies)
  // Fetch Data from. TMDB Apj and adding to the redux store so better to add a custom Hooks here
  const getnowplayingmovies = async () => {
    const List = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_CONSTANT
    );
    const Data = await List.json();
    Dispatch(addNowPlayingMovie(Data.results));
  };

  useEffect(() => {
    if(!Selector)  getnowplayingmovies();
  }, []);
};

export default useNowPlayingMovie;
