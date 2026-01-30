import {useSelector} from 'react-redux'
import MovieList from './MovieList'
import {useState} from 'react'

export const GptMoviesuggestion = () => {
  const [loading,setLoading] = useState(false)
  const Movies = useSelector((data)=>{
    return data?.gpt?.gptMovies
  })

  if(Movies == null){
    return <p>Loading...</p>
  }

  return (
    <div className='p-4 m-4 bg-black text-white opacity-80'>
    {Movies && <h3 className='text-white'>The Number of Flim - {Movies?.length}</h3>}
    <div className='flex flex-row overflow-scroll'>
    {Movies.length == 0 ? (<p>Loading...</p>) : Movies?.map((data,i)=>{
  return (
 <MovieList key={i} title={data.title} movie={[data]} />
  )
})}
</div>
    
    </div>
  )
}
