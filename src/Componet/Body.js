
import Login from './Login'
import {Browse} from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

export const Body = () => {

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
  return (
    <>
   <RouterProvider router={AppRouter}/>
    </>
  )
}


