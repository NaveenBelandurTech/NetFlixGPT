import React from 'react'
import GptsearchBar from './GptsearchBar'
import { GptMoviesuggestion } from './GptMoviesuggestion'
import {BG_URL} from '../utils/constants'

const Gptsearch = () => {
  return (
    <div>
              <div className="absolute -z-10">
        <img
          className=""
           src={BG_URL}
          alt="bg"
        />
      </div>

        <GptsearchBar/>
        <GptMoviesuggestion/>
        
    </div>
  )
}

export default Gptsearch