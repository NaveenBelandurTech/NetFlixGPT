import {createSlice} from '@reduxjs/toolkit'


const GPTSlice = createSlice({
    name:"GPtSearch",
    initialState:{
      showGptsearch:false,
      gptMovies:null
    },
    reducers:{
        toggleGPtSearchView:(state) =>{
          state.showGptsearch = !state.showGptsearch
        },
        addGptMoviesResult:(state,actions) =>{
          state.gptMovies = actions.payload
        },
    }
})

export const {toggleGPtSearchView,addGptMoviesResult} = GPTSlice.actions
export default GPTSlice.reducer  