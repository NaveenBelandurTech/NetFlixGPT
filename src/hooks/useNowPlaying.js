import {useEffect} from 'react'
import {API_CONSTANT} from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addPopularVideo} from '../utils/movieSlice'
import { useSelector } from 'react-redux'


const useNowPopularMovies = async() =>{
    const Dispatch = useDispatch()
   
    // Memo Checking if user already exist no need of Fetching again using from the store
     const NowPlaying = useSelector((data)=>data.movie.popularVideo)


   const fetchData = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        API_CONSTANT
      )
      const response = await data.json()
      Dispatch(addPopularVideo(response.results))
   }
       useEffect(()=>{
        if(!NowPlaying)    fetchData()
    },[])

}

export default useNowPopularMovies
