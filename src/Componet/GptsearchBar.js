import {useSelector} from 'react-redux'
import {useRef,useState} from 'react'
// import client from '../utils/Chatgpt'
import lang from '../utils/LanguageConstants'
import { API_CONSTANT } from '../utils/constants'
import {addGptMoviesResult} from '../utils/gptSlice'
import {useDispatch} from 'react-redux'


const GptsearchBar = () => {
  const Dispatch = useDispatch()
  const [loading,setLoading] = useState(false)
  const Text = useRef(null)
  const Language = useSelector((data)=>{
    return data.config.lang
  })

    // Will Be connected to the chatgpt and it will recommend us 5 movies then that text will be sent to tmdb
//   const gptQuery = "Act as a Movie Recommendation System and Suggest me a movie for the Query" + Text.current.value + ".only give me names of 5 movies, comma separated like they example give ahead Example Result:Kantara,KGF"

//   const handleClick = async () =>{
// const completion = await client.chat.completions.create({
//   model: 'gpt-3.5-turbo',
//   messages: [
//     { role: 'developer', content: gptQuery },
//   ],
// });

// console.log(completion);

const handleClick = () =>{
  // Response From the ChatGpt Will Be Sent to tmdb to get the data search api and fetch the result from tmdb
  try{
    const FetchData = async (a) =>{
   const MovieSearch = await fetch(`https://api.themoviedb.org/3/search/movie?query=${a}&include_adult=false&language=en-US&page=1`,API_CONSTANT)
   const MovieResult = await MovieSearch.json()
   setLoading(true)
   Dispatch(addGptMoviesResult(MovieResult?.results))
   setLoading(false)
    }
     FetchData(Text.current.value)

  }
  catch(err){
   console.log(err)
  }    



}
  
if(loading){
  return <p>Loading...</p>
}


  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-1/2 bg-black p-4 rounded-lg grid grid-cols-12 gap-4"
        onSubmit={(e)=>e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[Language].gptsearchPlaceholder}
          className="col-span-9 p-3 rounded-md outline-none bg-white"
          ref={Text}
       
        />

        <button
          type="submit"
          className="col-span-3 bg-red-700 text-white rounded-md font-semibold hover:bg-red-800 transition"
          onClick={handleClick}
        >
         {lang[Language]?.search}
        </button>
      </form>
    </div>
  )
}

export default GptsearchBar