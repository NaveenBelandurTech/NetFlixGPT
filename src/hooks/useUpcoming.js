import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {API_CONSTANT} from '../utils/constants'
import {addUpcomingVideo} from '../utils/movieSlice'
import { useSelector } from 'react-redux'

const useUpcomingData = () =>{
    const Dispatch = useDispatch()
     const Selector = useSelector((data)=>data.movie.upcomingVideo)
        const FetchUpcomingData = async () =>{
            const dataFetch = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_CONSTANT)
            const dataUpcoming = await dataFetch.json()
             Dispatch(addUpcomingVideo(dataUpcoming?.results))
        
}

      useEffect(()=>{
        if(!Selector)  FetchUpcomingData()
        
        },[])
  
}

export default useUpcomingData