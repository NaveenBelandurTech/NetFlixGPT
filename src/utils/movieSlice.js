import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react'

const MovieSlice = createSlice({
    name:"MovieSlice",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularVideo:null,
        upcomingVideo:null,
        topRatedVideo:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
             state.nowPlayingMovies = action.payload
        },
        addtrailersVideo:(state,action) =>{
            state.trailerVideo = action.payload
        },
        addPopularVideo:(state,action) =>{
            state.popularVideo = action.payload
        },
        addUpcomingVideo:(state,action) =>{
            state.upcomingVideo = action.payload
        },
        addTopRatedVideo:(state,action)=>{
            state.topRatedVideo = action.payload
        }
    }
})


export const {addNowPlayingMovie,addtrailersVideo,addPopularVideo,addUpcomingVideo,addTopRatedVideo}  = MovieSlice.actions
export default MovieSlice.reducer
