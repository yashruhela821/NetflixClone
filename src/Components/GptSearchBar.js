// import React, { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import Lang  from '../utils/languageConstants';
// import { API_KEY, OPTIONS } from '../utils/constants';
// import { addSuggestedMoviesFromDS } from '../utils/gptSlice';

// const GptSearchBar =  () => {
//   const dispatch = useDispatch();

//    const helo = useSelector((store) => store.config.lang);
//   // console.log(helo);
//   const searchText =useRef(null);

//   const searchedMovieTMDB = async (movieName) => {
//     const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1" ,OPTIONS);
//     const json = await data.json();
//     return json.results; // Return the first result

//   };

//   const handleGptSearchClick = async () => {
//     // console.log(API_KEY)
//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${API_KEY}`,
//         "Content-Type": "application/json",
//         "HTTP-Referer": "http://localhost", // or your deployed frontend URL
//         "X-Title": "GPT Netflix Search",
//       },
//       body: JSON.stringify({
//         model: "deepseek/deepseek-r1:free",
//         messages: [
//           {
//             role: "system",
//             content: "You are a movie recommendation engine that provides a list of 5 Netflix movies based on user input, output them comma-separated: movie1, movie2... ONLY provide the list of movies, do not add any other text or explanation."
//           },
//           {
//             role: "user",
//             content: searchText.current.value,
//           }
//         ]
//       })
//     });

//     const data = await response.json();
//     const moviesArray=data?.choices?.[0]?.message?.content.split(",");
//     console.log(moviesArray);

//     const promiseArray = moviesArray.map((movie)=>searchedMovieTMDB(movie)
//     );
//     const results = await Promise.all(promiseArray);
//     console.log(results);
//     dispatch(addSuggestedMoviesFromDS({DsMovies: moviesArray, TMDBMovies: results}));
//   };

//   return (
//     <div  className='pt-[10%]'>
//         <form className="  mx-80 bg-gray-800 rounded-md shadow-md  items-center justify-center grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
//             <input ref={searchText} type="text" placeholder={Lang[helo].gptSearchPlaceholder} className = " m-2 p-4 border-gray-300 rounded-md col-span-8" />
//             <button type="submit" onClick={handleGptSearchClick} className="bg-blue-500 text-white  py-3 rounded-md mx-5 col-span-4">{Lang[helo].search}</button>
//         </form>
//     </div>
//   )
// }

// export default GptSearchBar

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lang from "../utils/languageConstants";
import { OPTIONS } from "../utils/constants";
import { addSuggestedMoviesFromDS } from "../utils/gptSlice";
import { setLoading } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const helo = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchedMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    dispatch(setLoading(true));
    if(searchText.current.value === "") {
      alert("Please enter a search term");
      dispatch(setLoading(false));
      return;
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost",
          "X-Title": "GPT Netflix Search",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "system",
              content:
                "You are a movie recommendation engine that provides a list of 8 to 10 Netflix movies and should be available on tmdb based on user input, output them comma-separated: movie1, movie2... ONLY provide the list of movies, do not add any other text or explanation.",
            },
            {
              role: "user",
              content: searchText.current.value,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const moviesArray = data?.choices?.[0]?.message?.content.split(",");
    console.log(moviesArray);

    const promiseArray = moviesArray.map((movie) => searchedMovieTMDB(movie));
    const resolved = await Promise.all(promiseArray);
    const results = resolved.map((movieArray) => movieArray[0]);

    console.log(results);
    dispatch(
      addSuggestedMoviesFromDS({
        DsMovies: moviesArray,
        TMDBMovies: results,
        searchedText: searchText.current.value,
      })
    );
  };

  return (
    <div className="flex justify-center pt-24 md:pt-0 relative z-10">
      <form
        className="w-full  max-w-4xl bg-gray-800 bg-opacity-70 rounded-full shadow-md grid grid-cols-12 items-center  mx-2 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={Lang[helo].gptSearchPlaceholder}
          className="font-mono m-3 p-4 col-span-8 md:col-span-10 rounded-full focus:outline-none"
        />
        <button
          type="submit"
          onClick={handleGptSearchClick}
          className="bg-red-700 hover:bg-red-800 text-white py-3 rounded-full my-4  mr-4 col-span-4 md:col-span-2"
        >
          {Lang[helo].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
