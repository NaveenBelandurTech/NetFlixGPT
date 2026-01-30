import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";
// FireBase Config
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [isSignInForm, setisSignForm] = useState(true);
  const [errormessage, setErrormessage] = useState(null);
  const [visible, setVisible] = useState(true);

  const Navigate = useNavigate();

  let fullName = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  const toogleSigInForm = () => {
    setisSignForm(!isSignInForm);
  };

  const passwordVisible = () => {
    setVisible(!visible);
  };

  const handleButtonClick = () => {
    // Validate the form Data
    // Using the Ref
    const validate = checkValidateData(
      email.current.value,
      password.current.value,
    );
    setErrormessage(validate);
    // If You Got Message then it will return
    if (validate) return;
    // Sign Up and Sign In

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              Navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // Signed up
          toast.success("Registered In SuccessFully");
          email.current.value = "";
          password.current.value = "";
          fullName.current.value = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(`Code${errorCode} Message${errorMessage}`);
        });
    } else {
      // Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          Navigate("/browse");
          const user = userCredential.user;

          toast.success("Logged In SuccessFully");
          email.current.value = "";
          password.current.value = "";
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(`Code${errorCode} Message${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg"
          alt="bg"
        />
      </div>

      {/*Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12  bg-black w-100 mx-auto my-36 right-0 left-0 text-white opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <div className="relative">
          <input
            ref={password}
            type={visible ? "password" : "text"}
            placeholder="Password"
            className="  p-4 my-4 w-full bg-gray-700 "
          />
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white"
            onClick={passwordVisible}
            style={{ position: "absolute", right: "4rem", bottom: "15rem" }}
          >
            {visible ? <FaEyeSlash /> : <IoEyeSharp />}
          </span>
        </div>

        <p className="text-md text-red-600">{errormessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSigInForm}>
          {isSignInForm
            ? "New To Netflix? sign In Now"
            : "Already Registered Sign Up Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
