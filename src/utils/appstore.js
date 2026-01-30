import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './userSlice'
import MovieReducer from './movieSlice'
import GPTreducer from './gptSlice'
import ConfigReducer from './configslice'

const AppStore = configureStore({
    reducer:{
       user:UserReducer,
       movie:MovieReducer,
       gpt:GPTreducer,
       config:ConfigReducer,
    }
})


export default AppStore
