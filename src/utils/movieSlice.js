import {createSlice} from '@reduxjs/toolkit'

const MovieSlice = createSlice({
    name:"MovieSlice",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
             state.nowPlayingMovies = action.payload
        },
        addtrailersVideo:(state,action) =>{
            state.trailerVideo = action.payload
        }
    }
})


export const {addNowPlayingMovie,addtrailersVideo}  = MovieSlice.actions
export default MovieSlice.reducer
