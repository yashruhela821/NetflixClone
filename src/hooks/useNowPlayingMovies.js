import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

export const useNowPlayingMovies = () => { 
    const dispatch = useDispatch();
    const NowPlayingMovies = useSelector((store)=>store.movies.NowPlayingMovies)
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",OPTIONS)
    const json = await data.json();
    // console.log(json)
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(() => {
    !NowPlayingMovies &&  getNowPlayingMovies();
  }, []);
}


// useEffect is called when componet loads every time[] because of empty array depedencu then it checks if the data is already present in the store or not if not then it calls the api and fetches the data and stores it in redux store using dispatch and addNowPlayingMovies function which is imported from moviesSlice.js file. this is done to avoid multiple api calls and to use the data from redux store if it is already present.