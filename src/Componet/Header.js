import {signOut} from 'firebase/auth'
import {auth} from '../utils/firebase'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

 const Header = () => {
  const Navigate = useNavigate()
  const Selector = useSelector((data)=>{
    return data.user
  })

  const handleSignOut = () =>{
signOut(auth).then(() => {
  // Sign-out successful.
  Navigate('/')
}).catch((error) => {
  // An error happened.
});

  }

  return (
  <div className='absolute flex justify-between  z-10 px-8  w-12/12 py-2 bg-gradient-to-b from to-black'>
    <img className='w-44 ' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    {Selector == null ? "" : <div>
      <button onClick={handleSignOut} className='cursor-pointer text-white font-bold'>{'Sign Out'}</button>
      </div>}
    
  </div>
  )
}


export default Header