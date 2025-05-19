// import React, { useState } from "react";
// import MovieCard from "./MovieCard";
// import PopUp from "./PopUp";

// const MovieList = ({ title, movies }) => {
//   const [selectedMovieId, setSelectedMovieId] = useState(null);

//   const handleCardClick = (id) => {
//     setSelectedMovieId(id);
//   };

//   const handleCloseModal = () => {
//     setSelectedMovieId(null);
//   };

//   if (!movies || movies.length === 0) return null;

//   return (
//     <div className="relative  ">
//       <h1 className="text-lg md:text-xl font-bold text-white mb-4 z-30 ">{title}</h1>
//       <div className="">
//         <div className="flex overflow-x-auto scrollbar-none py-5">
//           <ul className="flex gap-4">
//             {movies.map((movie) => (
//               <li key={movie.id}>
//                 <div
//                   onClick={() => handleCardClick(movie.id)}
//                   className="cursor-pointer"
//                 >
//                   <MovieCard poster={movie.poster_path} />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
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

// export default MovieList;

// import React, { useState, useEffect } from "react";
// import MovieCard from "./MovieCard";
// import PopUp from "./PopUp";

// const MovieList = ({ title, movies }) => {
//   const [selectedMovieId, setSelectedMovieId] = useState(null);

//   const handleCardClick = (id) => {
//     setSelectedMovieId(id);
//   };

//   const handleCloseModal = () => {
//     setSelectedMovieId(null);
//   };

//   // Prevent background scroll when modal is open
//   useEffect(() => {
//     if (selectedMovieId !== null) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }

//     // Cleanup on unmount (optional safety)
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, [selectedMovieId]);

//   if (!movies || movies.length === 0) return null;

//   return (
//     <div className="relative">
//       <h1 className="text-lg md:text-xl font-bold text-white mb-4 z-30">{title}</h1>
//       <div>
//         <div className="flex overflow-x-auto scrollbar-none py-5">
//           <ul className="flex gap-4">
//             {movies.map((movie) => (
//               <li key={movie.id}>
//                 <div
//                   onClick={() => handleCardClick(movie.id)}
//                   className="cursor-pointer"
//                 >
//                   <MovieCard poster={movie.poster_path} />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {selectedMovieId && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={handleCloseModal}
//         >
//           <div
//             className="bg-gray-900 rounded-lg max-w-3xl w-full relative"
//             onClick={(e) => e.stopPropagation()}
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

// export default MovieList;


import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import PopUp from "./PopUp";

const MovieList = ({ title, movies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const scrollRef = useRef(null); // Ref to scrollable container

  const handleCardClick = (id) => {
    setSelectedMovieId(id);
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedMovieId !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedMovieId]);

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative ">
      <h1 className="text-lg md:text-xl font-bold text-white mb-4 z-50">
        {title}
      </h1>

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 w-6 h-20 z-50 pr-2 pl-1 bg-black bg-opacity-40 text-white rounded-full "
        >
        ◀ 
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 w-6 h-20 z-50 pr-2 pl-1 bg-black bg-opacity-40 text-white rounded-full"
        >
          ▶
        </button>

        {/* Scrollable Movie List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-none py-5 scroll-smooth"
        >
          <ul className="flex gap-4">
            {movies.map((movie) => (
              <li key={movie.id}>
                <div
                  onClick={() => handleCardClick(movie.id)}
                  className="cursor-pointer"
                >
                  <MovieCard poster={movie.poster_path} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedMovieId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-lg max-w-3xl w-full relative"
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
        </div>
      )}
    </div>
  );
};

export default MovieList;
