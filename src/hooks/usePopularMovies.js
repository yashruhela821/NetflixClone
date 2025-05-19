// import { useDispatch, useSelector } from "react-redux";
// import { addPopularMovies } from "../utils/moviesSlice";
// import { useEffect } from "react";
// import { OPTIONS } from "../utils/constants";

// export const usePopularMovies = () => {
//     const dispatch = useDispatch();
//     const PopularMovies = useSelector((store)=>store.movies.PopularMovies)

//   const getPopularMovies = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",OPTIONS)
//     const json = await data.json();
//     // console.log(json)
//     dispatch(addPopularMovies(json.results));
//   }
//   useEffect(() => {
//     if(!PopularMovies)getPopularMovies();
//   }, []);
// }

// // useEffect is called when componet loads every time[] because of empty array depedencu then it checks if the data is already present in the store or not if not then it calls the api and fetches the data and stores it in redux store using dispatch and addNowPlayingMovies function which is imported from moviesSlice.js file. this is done to avoid multiple api calls and to use the data from redux store if it is already present.

import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.PopularMovies);

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (err) {
      console.error("Error fetching popular movies:", err);
    }
  };

  useEffect(() => {
    if (!PopularMovies || PopularMovies.length === 0) {
      getPopularMovies();
    }
  }, []);

  return PopularMovies;
};
