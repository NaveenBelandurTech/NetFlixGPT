import lang from '../utils/LanguageConstants'
import {useSelector} from 'react-redux'

const GptsearchBar = () => {
  const Language = useSelector((data)=>{
    return data.config.lang
  })

  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-1/2 bg-black p-4 rounded-lg grid grid-cols-12 gap-4"
      >
        <input
          type="text"
          placeholder={lang[Language].gptsearchPlaceholder}
          className="col-span-9 p-3 rounded-md outline-none bg-white"
        />

        <button
          type="submit"
          className="col-span-3 bg-red-700 text-white rounded-md font-semibold hover:bg-red-800 transition"
        >
         {lang[Language]?.search}
        </button>
      </form>
    </div>
  )
}

export default GptsearchBar