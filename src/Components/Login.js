import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validate";
import { auth } from "../utils/Firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_IMAGE } from "../utils/constants";


const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const [Message, setMessage] = useState(null);
  const toggleSignIn = () => {
    setisSignin(!isSignin);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    const error = CheckValidData(email.current.value, password.current.value);
    setMessage(error);
    if (error) return;

    if (!isSignin) {
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          // Navigate("/browse");  no need to navigate here as implemented in firebase onauthstatechange
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            setMessage(errorMessage);
          console.log(Message)
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in=
          const user = userCredential.user;
          // Navigate("/browse"); no need to navigate here as implemented in firebase onauthstatechange

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage);
          console.log(errorCode+" "+errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className=" bg-gradient-to-b from-black absolute w-full h-full -z-10">
        <img className="w-full h-full object-cover " src={BACKGROUND_IMAGE} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black bg-opacity-70 top-[15%] md:w-3/12 w-11/12 m-auto rounded-md my-36 p-4 mx-auto right-0 left-0 text-white"
      >
        <h1 className="text-3xl text-LEF pl-3 py-4 font-bold">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            type="name"
            placeholder="full name"
            className=" border border-gray-400  bg-black bg-opacity-0 p-2 rounded-md text-white my-4 w-full"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address or phone number"
          className=" bg-black bg-opacity-0 border border-gray-400 p-2 rounded-md text-white  w-full"
        />
        {Message === "Please enter a valid email address." ? (
          <p className="text-red-600 text-sm font-semibold">{Message}</p>
        ) : null}
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className=" border border-gray-400  bg-black bg-opacity-0 p-2 rounded-md text-white my-4 w-full"
        />
        {Message ===
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number." ? (
          <p className="text-red-600 text-sm font-semibold">{Message}</p>
        ) : null}
        <button
          className="p-2 my-4  bg-red-600 rounded-md text-white hover:bg-red-700 w-full"
          onClick={handleValidation}
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white p-4 font-semibold cursor-pointer"
          onClick={toggleSignIn}
        >
          {isSignin
            ? "New to Netflix ? Sign Up Now"
            : "Already a user  ? Sign in Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
