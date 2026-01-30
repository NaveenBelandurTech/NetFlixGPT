import Header from "./Header"
import useNowPlayingMovie from "../hooks/useMovieFetch"
import MainContainer from "./MainContainer"
import { SecondaryContainer } from "./SecondaryContainer"
import useNowPopularMovies from "../hooks/useNowPlaying"
import useUpcomingData from "../hooks/useUpcoming"
import useTopRatedMovies from "../hooks/useTopRated"
import Gptsearch from "./Gptsearch"
import {useSelector} from 'react-redux'

export const Browse = () => {
  const {showGptsearch
}= useSelector((data)=>{
    return data.gpt
  })

// Here We Are Using the Custom Hooks
// It Loads when the we Browse 
    useNowPlayingMovie ()
    useNowPopularMovies()
    useUpcomingData()
    useTopRatedMovies()
  return (
   <div>
   <Header/>
   {showGptsearch ? (
    <Gptsearch/>

   ) : (<>
   <MainContainer/>
   <SecondaryContainer/>

   </>)}
   


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
