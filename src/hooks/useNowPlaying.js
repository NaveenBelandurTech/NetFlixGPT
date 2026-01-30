import {useEffect} from 'react'
import {API_CONSTANT} from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addPopularVideo} from '../utils/movieSlice'


const useNowPopularMovies = async() =>{
    const Dispatch = useDispatch()


   const fetchData = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        API_CONSTANT
      )
      const response = await data.json()
      Dispatch(addPopularVideo(response.results))
   }
       useEffect(()=>{
     fetchData()
    },[])

}

export default useNowPopularMovies
