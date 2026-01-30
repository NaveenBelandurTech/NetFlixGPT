import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {API_CONSTANT} from '../utils/constants'
import {addUpcomingVideo} from '../utils/movieSlice'

const useUpcomingData = () =>{
    const Dispatch = useDispatch()
   
        const FetchUpcomingData = async () =>{
            const dataFetch = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_CONSTANT)
            const dataUpcoming = await dataFetch.json()
             Dispatch(addUpcomingVideo(dataUpcoming?.results))
        
}

      useEffect(()=>{
         FetchUpcomingData()
        },[])
  
}

export default useUpcomingData