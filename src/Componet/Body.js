import Login from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ToastContainer} from 'react-toastify'

export const Body = () => {

  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);



  return (
    <div>
    <ToastContainer/>
      <RouterProvider router={AppRouter} />
    </div>
  );
};
