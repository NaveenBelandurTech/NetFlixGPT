import Header from "./Header"
import { useState } from "react"


 const Login = () => {
  const [isSignInForm,setisSignForm] = useState(true)

  const toogleSigInForm = () =>{
     setisSignForm(!isSignInForm)
  }
  return (
  <div>
  <Header/>
  <div className='absolute'>
    <img className="" src='https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg' alt='bg'/>
  </div>

  {/*Login Form */}
  <form className='absolute p-12  bg-black w-100 mx-auto my-36 right-0 left-0 text-white opacity-90'>
  <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
  {!isSignInForm &&    <input type='text' placeholder="Enter Name" className="p-4 my-4 w-full bg-gray-700"/>}
    <input type='text' placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
    <input type='password' placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>
    <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
    <p className='py-4 cursor-pointer' onClick={toogleSigInForm}>{isSignInForm ? "New To Netflix? sign In Now" : "Already Registered Sign Up Now..."}</p>
  </form>
  </div>
  )
}


export default Login