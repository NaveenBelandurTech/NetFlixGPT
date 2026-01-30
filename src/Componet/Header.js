import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { LOGO } from "../utils/constants";
import {toggleGPtSearchView} from '../utils/gptSlice'
import { SupportedLanguage } from "../utils/constants";
import {changeLanguage} from '../utils/configslice'

const Header = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const Selector = useSelector((data) => {
    return data.user;
  });

  const GptSearch = useSelector((data)=>{
    return data.gpt.
showGptsearch
  })

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate("/");
        toast.success("Logged Out SuccessFully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // This is the FireBase Api it triggers when there is changes in login or logout whenever a login or logout happens it works
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // When ever the User is register or login this function runs
        const { uid, email, displayName } = user;
        Dispatch(
          addUser({
            uuid: uid,
            email: email,
            displayname: displayName,
          })
        );
        Navigate("/browse");
      } else {
        // When ever the user is logged out this works
        Dispatch(removeUser());
        Navigate("/");
      }
    });

    // Unsubscribed When The Component is UnMount
    return () => unSubscribe();
  }, []);

  const handleGptsearch = () =>{
    // Toogle  GPT Search Button
     Dispatch(toggleGPtSearchView())
  }

  const handleChange = (e)=>{
   Dispatch(changeLanguage(e.target.value))
  }



  return (
    <div
      className="absolute w-full z-10 px-8  py-2 bg-gradient-to-b from to-black"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />

      {Selector == null ? (
        ""
      ) : (
        <div className='flex p-2'>
          {GptSearch &&    <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleChange}>
            {SupportedLanguage.map((data,i)=> <option key={i} value={data.indi}>
              {data.name}
            </option>)}
          </select>}
       
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-2xl' onClick={handleGptsearch}>{GptSearch ? "Home Page" : 'Gpt Search'}</button>
          <button
            onClick={handleSignOut}
            className="cursor-pointer text-white font-bold"
          >
            {"Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
