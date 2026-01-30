import {createSlice} from '@reduxjs/toolkit'


const GPTSlice = createSlice({
    name:"GPtSearch",
    initialState:{
      showGptsearch:false
    },
    reducers:{
        toggleGPtSearchView:(state) =>{
          state.showGptsearch = !state.showGptsearch
        }
    }
})

export const {toggleGPtSearchView} = GPTSlice.actions
export default GPTSlice.reducer  