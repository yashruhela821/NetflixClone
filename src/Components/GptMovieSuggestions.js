// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import MovieCard from "./MovieCard";
// import MovieCardShimmer from "./Shimmer";
// import PopUp from "./PopUp";

// const GptMovieSuggestions = () => {
//   const [selectedMovieId, setSelectedMovieId] = useState(null);
  
//     const handleCardClick = (id) => {
//       setSelectedMovieId(id);
//     };
  
//     const handleCloseModal = () => {
//       setSelectedMovieId(null);
//     };
  
//   const { SuggestedMoviesFromDS, searchedMoviesFromTMDB ,searchedText , loading} = useSelector(
//     (store) => store.gpt
//   );

//   if (loading) {
//     return (
//      < MovieCardShimmer/>
//     );
//   }

//   if (!SuggestedMoviesFromDS || !searchedMoviesFromTMDB)
//     return (
//       <div className="bg-black bg-opacity-30 backdrop-blur-md text rounded-3xl p-6 shadow-lg h-36">
//         <h1 className="font-sans text-3xl font-bold text-white mb-4 text-center">
//           What's in your mind ? Let's ask Ai !
//         </h1>
//       </div>
//     );
    

//   return (
//     <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-xl p-2 shadow-lg ">
//       {/* {SuggestedMoviesFromDS.map((movie, index) => (
//         <MovieList key={movie} title={movie} movies={searchedMoviesFromTMDB[index]} />
//       ))} */} 
//       <div>
//         <h1 className=" font-sans 2xl font bold text-white mb-8 text-center ">
//         Suggestionsbased on "{searchedText}" 
//         </h1>
//       </div>
//       <div className="flex flex-row md:flex-wrap gap-16 justify-center overflow-x-auto scrollbar-none md:py-5 pb-10   z-10" >
//         {searchedMoviesFromTMDB.map((movie) => (
//           <div key={movie.id} onClick={() => handleCardClick(movie.id)}
//           className="cursor-pointer">
//             <MovieCard poster={movie.poster_path}/>
//           </div>
//         ))}
//       </div>
//       {selectedMovieId && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={handleCloseModal} // clicking background closes modal
//         >
//           <div
//             className="bg-gray-900  rounded-lg max-w-3xl w-full relative"
//             onClick={(e) => e.stopPropagation()} // stop click inside modal from closing
//           >
//             <button
//               className="absolute top-3 right-5 text-white text-2xl z-50"
//               onClick={handleCloseModal}
//             >
//               ✖
//             </button>
//             <PopUp movieID={selectedMovieId} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GptMovieSuggestions;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import MovieCardShimmer from './Shimmer';
import PopUp from './PopUp';

const GptMovieSuggestions = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedMovieId(id);
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
  };

  const {
    SuggestedMoviesFromDS,
    searchedMoviesFromTMDB,
    searchedText,
    loading,
  } = useSelector((store) => store.gpt);

  if (loading) {
    return <MovieCardShimmer />;
  }

  if (!SuggestedMoviesFromDS || !searchedMoviesFromTMDB) {
    return (
      <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-6 shadow-lg h-36">
        <h1 className="font-sans text-xl md:text-3xl font-bold text-white mb-4 text-center">
          What's on your mind? Let's ask AI!
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-xl shadow-lg">
        <h1 className="font-sans text-xl md:text-2xl font-bold text-white mb-6 text-center">
          Suggestions based on "{searchedText}"
        </h1>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center md:overflow-x-auto scrollbar-none md:py-5 pb-10">
          {searchedMoviesFromTMDB.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleCardClick(movie.id)}
              className="cursor-pointer flex justify-center"
            >
              <MovieCard poster={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>

      {selectedMovieId &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 my-auto"
            onClick={handleCloseModal}
          >
            <div
              className="bg-gray-900  rounded-lg max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-5 text-white text-2xl z-50"
                onClick={handleCloseModal}
              >
                ✖
              </button>
              <PopUp movieID={selectedMovieId} />
            </div>
          </div>,
          document.body // inject directly into <body>
        )}
    </>
  );
};

export default GptMovieSuggestions;
