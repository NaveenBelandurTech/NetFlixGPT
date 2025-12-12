
import Login from './Login'
import {Browse} from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {useEffect} from 'react'
import { auth } from '../utils/firebase'
import {useDispatch} from 'react-redux'
import {addUser,removeUser} from '../utils/userSlice'
import {onAuthStateChanged} from 'firebase/auth'

export const Body = () => {
const Dispatch = useDispatch()
  const AppRouter = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])

  // This is the FireBase Api it triggers when there is changes in login or logout whenever a login or logout happens it works
  useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user,'user profile')
    // When ever the User is register or login this function runs
    const {uid,email,displayName} = user
    Dispatch(addUser(addUser({uuid:uid,email:email,displayname:displayName})))

  } else {
    // When ever the user is logged out this works
    Dispatch(removeUser())

  }
});
  },[])



  return (
    <>
   <RouterProvider router={AppRouter}/>
    </>
  )
}


