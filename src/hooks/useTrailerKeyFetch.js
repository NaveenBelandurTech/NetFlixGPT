import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addtrailersVideo} from '../utils/movieSlice'
import {API_CONSTANT} from '../utils/constants'

const useTrailerFetchKey = (movieId) =>{
const Dispatch = useDispatch()
  const FetchData = async () =>{
    const getData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_CONSTANT)
    const data = await getData.json()
    console.log(data.results,'data from video background')

    const Filtertrailer = data.results.filter(videos => videos.type == 'Trailer')
    const trailer = Filtertrailer.length  ?  Filtertrailer[0] : data.results[0]
    // Here We get the key for the you tube vide of that particular movie trailer 
    console.log(trailer)
    // Storing this trailer you tube key in the redux store
    Dispatch(addtrailersVideo(trailer))
  }


  useEffect(()=>{
    FetchData()
  },[])
}


export default useTrailerFetchKey