import Header from "./Header"
import useNowPlayingMovie from "../hooks/useMovieFetch"
import MainContainer from "./MainContainer"
import { SecondaryContainer } from "./SecondaryContainer"
import useNowPopularMovies from "../hooks/useNowPlaying"
import useUpcomingData from "../hooks/useUpcoming"
import useTopRatedMovies from "../hooks/useTopRated"

export const Browse = () => {

// Here We Are Using the Custom Hooks
// It Loads when the we Browse 
    useNowPlayingMovie ()
    useNowPopularMovies()
    useUpcomingData()
    useTopRatedMovies()
  return (
   <div>
   <Header/>
   <MainContainer/>
   <SecondaryContainer/>
   {/*
   Main Container
    - Video Container
    - Video Title
    Secondary Container
    - MovieList * n
    - Cards * n
    */}
   </div>
  )
}
