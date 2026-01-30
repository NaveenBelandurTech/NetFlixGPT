import {useSelector} from 'react-redux'
import { VideTitle } from './VideTitle'
import VideoBackGround from './VideoBackGround'


const MainContainer = () =>{
  const MovieData = useSelector((data) => data?.movie?.nowPlayingMovies)
  // Initial the Movie will be null in initial so adding this condition
  if(MovieData === null){
    return null
  }
  // This is call The Main Movie from the above data
  const MovieFirst = MovieData[0]
  console.log(MovieFirst)

  const {original_title,overview,id} = MovieFirst
    return (
        <section className="pt-[30%] bg-black md:pt-0">
         <VideTitle title={original_title} overview={overview}/>
         <VideoBackGround moviesid={id}/>
        </section>
    )
}



export default MainContainer