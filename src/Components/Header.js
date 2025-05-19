// import React, { useEffect } from "react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../utils/Firebase";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser, removeUser } from "../utils/UserSlice";
// import {  LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
// import { toggelGptSearch } from "../utils/gptSlice";
// import { setLanguage } from "../utils/configSlice";
// const Header = () => {
//   // const user = auth.currentUser;
//   const dispatch = useDispatch();

//   const user = useSelector((store) => store.user);
//   const isGptSearchPage = useSelector((store) => store.gpt.gptSearch);
//   const navigate = useNavigate();
//   const HandleSignout = () => {
//     signOut(auth)
//       .then(() => {})
//       .catch((error) => {
//         // An error happened.
//       });
//   };
//   ///event or you say "e"
//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     dispatch(setLanguage(selectedLanguage));
//   };

//   const handleGptSearchClick = () => {
//     dispatch(toggelGptSearch());
//   };
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName } = user;
//         dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
//         navigate("/browse");
//         // console.log("hellooooooooooo")
//       } else {
//         dispatch(removeUser());
//         navigate("/");
//         // console.log("user not found")
//       }
//     });
//     return () => unsubscribe(); // Cleanup subscription on unmount
//   }, []);
//   return (
//     <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between">
//       <img src={LOGO} alt="Netflix Logo" className="w-40 md:pt-0 pt-1" />
//       {user && (
//         <div className=" flex  mr-10 md:mt-5 mt-0">
//           {isGptSearchPage && (
//             <select
//               className="bg-gray-800 text-white  rounded-md md:mr-4 md:ml-4  md:right-0 absolute md:relative right-4  "
//               onChange={handleLanguageChange}
//             > 
//               {SUPPORTED_LANGUAGES.map((language) => (
//                 <option key={language.identifier} value={language.identifier}>
//                   {language.name}
//                 </option>
//               ))}
//             </select>
//           )}
//           <button
//            style={{
//             backgroundImage: "url('https://i.pinimg.com/736x/1f/32/a8/1f32a8f29f0e022f01af8bccf7a94736.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundBlendMode: "soft-light"
//           }}
//             className="bg-cover bg-center bg-blend-soft-light  md:ml-0 absolute  left-56 md:relative md:left-0 top-5
//           text-white md:px-4 px-1 py-2 w-20 h-10 md:-py-5 rounded-md mr-28  text-bold hover:opacity-90 transition duration-300 ease-in-out"
//             type="button"
//             onClick={handleGptSearchClick} 
//           >
//             {isGptSearchPage ? "HOME" : "GPT"}
//           </button>

//           <button
//             onClick={HandleSignout}
//             className="absolute md:top-5 top-4 right-5 bg-red-600 text-white px-4 py-2 rounded-md cusor-pointer hover:bg-red-700 transition duration-300 ease-in-out"
//             type="button"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggelGptSearch } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGptSearchPage = useSelector((store) => store.gpt.gptSearch);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign-out error:", error);
        alert("Failed to sign out. Please try again.");
      });
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  const handleGptSearchClick = () => {
    dispatch(toggelGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className=" absolute w-full  md:bg-transparent bg-gradient-to-b from-black z-50 flex md:flex-row justify-between items-center px-4 py-2  ">
      <img src={LOGO} alt="Netflix Logo" className="w-40 " />
      {user && (
        <div className="flex flex-wrap items-center justify-end gap-4 mt-4 md:mt-0">
          {isGptSearchPage && (
            <select
              className="bg-gray-800 text-white rounded-md mr-4 px-2 py-1  md:right-52 md:top-6 absolute top-20"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/1f/32/a8/1f32a8f29f0e022f01af8bccf7a94736.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "soft-light"
            }}
            className="text-white md:px-4 px-2  md:py-2 ml-4 md:w-20 md:h-10  h-8  rounded-md font-bold hover:opacity-90 transition duration-300 ease-in-out md:mx-0 top-0  "
            type="button"
            onClick={handleGptSearchClick}
          >
            {isGptSearchPage ? "HOME" : "GPT"}
          </button>

          <button
            onClick={handleSignOut}
            className="bg-red-600 ml-4 font-bold md:w-20 md:h-10 px-2 h-8 text-white md:px-4 md:py-2 rounded-md cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out"
            type="button"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
