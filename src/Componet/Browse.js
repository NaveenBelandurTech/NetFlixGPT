import Header from "./Header"
import useNowPlayingMovie from "../hooks/useMovieFetch"
import MainContainer from "./MainContainer"
import { SecondaryContainer } from "./SecondaryContainer"


export const Browse = () => {

// Here We Are Using the Custom Hooks
    useNowPlayingMovie ()

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
