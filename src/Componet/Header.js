import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { LOGO } from "../utils/constants";

const Header = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const Selector = useSelector((data) => {
    return data.user;
  });

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
        console.log(user, "user profile");
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

  return (
    <div
      className="absolute w-full z-10 px-8   py-2 bg-gradient-to-b from to-black"
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
        <div>
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
