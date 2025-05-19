import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';
const useFetchTrailerUrl = (movieId) => {
    const dispatch = useDispatch();
        const trailerVideo = useSelector((store)=>store.movies.trailerVideo)

    const getMovieVideo = async (movieId) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, OPTIONS);
            const json = await data.json();
    
            if (!json.results || json.results.length === 0) {
                console.warn("No video results found for this movie.");
                console.log(json.results);
                console.log(movieId);
                return; // Exit early if no videos
            }
    
            let trailer = json.results.find((video) => video.type === "Trailer" && video.site === "YouTube");
            if (!trailer) {
                trailer = json.results[0]; // fallback to first available video
            }
    
            if (!trailer) {
                console.warn("No trailer or fallback video found.");

                return;
            }
    
            const { key } = trailer;
            const Url = `https://www.youtube.com/embed/${key}?&autoplay=1&mute=1`;
            dispatch(addTrailerVideo(Url));
        } catch (error) {
            console.error("Failed to fetch movie videos:", error);
        }
    };
    
    useEffect(() => {
     if(!trailerVideo)getMovieVideo(movieId);
    },[movieId])

}
export default useFetchTrailerUrl;
// useEffect is called when componet loads every time[] because of empty array depedencu then it checks if the data is already present in the store or not if not then it calls the api and fetches the data and stores it in redux store using dispatch and addNowPlayingMovies function which is imported from moviesSlice.js file. this is done to avoid multiple api calls and to use the data from redux store if it is already present.