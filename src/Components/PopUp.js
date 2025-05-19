// import React, { useState, useEffect } from "react";
// import { OPTIONS } from "../utils/constants";

// const PopUp = ({ movieID }) => {
//   const [movieDetails, setMovieDetails] = useState(null);

//   const getMovieDetails = async (movieId) => {
//     try {
//       const data = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
//         OPTIONS
//       );
//       const json = await data.json();
//       const { backdrop_path, title, overview, release_date, genres } = json;
//       const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
//       const genreNames = genres.map((genre) => genre.name).join("  . ");
//       const releaseYear = new Date(release_date).getFullYear();
//       setMovieDetails({
//         title,
//         overview,
//         releaseYear,
//         genreNames,
//         imageUrl,
//       });
//     } catch (error) {
//       console.error("Failed to fetch movie details:", error);
//     }
//   };

//   useEffect(() => {
//     if (movieID) {
//       getMovieDetails(movieID);
//     }
//   }, [movieID]);

//   if (!movieDetails) return <div>Loading...</div>;

//   return (
//     <div>
//       <div className="w-full ">
//         <div className="">
//           <img
//             src={movieDetails.imageUrl}
//             alt="Movie Poster"
//             className="w-full
//                    rounded-lg shadow-lg"
//           />
//           <h1 className=" text-2xl font-bold font-sans text-white mt-4">
//             {movieDetails.title}
//           </h1>
//         </div>
//       </div>
//       <div className="text-white mt-4 px-4 bg-black">
//         <span className="text-gray-400 mt-2"> {movieDetails.releaseYear}</span>
//         <span className="text-gray-400 mt-2"> {movieDetails.genreNames}</span>
//         <p className="text-gray-400 mt-2">{movieDetails.overview}</p>
//       </div>
//     </div>
//   );
// };

// export default PopUp;



import React, { useState, useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import ShimmerPopup from "./ShimmerPopup";

const PopUp = ({ movieID }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  const getMovieDetails = async (movieId) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        OPTIONS
      );
      const json = await data.json();
      const { backdrop_path, title, overview, release_date, genres } = json;
      const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
      const genreNames = genres.map((genre) => genre.name).join(" ‎ ‎   •‎   ‎   ");
      const releaseYear = new Date(release_date).getFullYear();
      setMovieDetails({
        title,
        overview,
        releaseYear,
        genreNames,
        imageUrl,
      });
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  };

  useEffect(() => {
    if (movieID) {
      getMovieDetails(movieID);
    }
  }, [movieID]);

  if (!movieDetails) return <div > <ShimmerPopup/></div>;

  return (
    <div className="text-white">
      <div className="relative w-full">
        <img
          src={movieDetails.imageUrl}
          alt="Movie Poster"
          className="w-full rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg " />

        {/* Title + buttons */}
        <div className="absolute bottom-1 md:bottom-6 left-5 md:left-6 md:pl-4 ">
          <h1 className="text-3xl md:text-4xl font-bold md:mb-4 mb-2">{movieDetails.title}</h1>
          <div className="flex gap-4">
            <button className="bg-white text-black md:px-4 md:py-2 py-0 rounded text-sm px-2 hover:bg-gray-300 transition">
              ▶ Play
            </button>
            <button className="bg-gray-600 bg-opacity-70 text-white px-4 py-2 rounded hover:bg-gray-500 transition">
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Details below image */}
      <div className="md:px-4 bg-black bg-opacity-80  rounded-lg pb-8 ">
        <div className="flex gap-3 text-white md:pl-5 pl-4">
          <span className=" flex flex-wrap gap-4  " >{movieDetails.releaseYear }</span>
            <span className="text-gray-400"> • </span>
          <span>{movieDetails.genreNames}</span>
        </div>
        <p className="text-white mt-2 pl-4">{movieDetails.overview}</p>
      </div>
    </div>
  );
};

export default PopUp;
