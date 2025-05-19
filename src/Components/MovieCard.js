import React from 'react';
import { IMG_URL } from '../utils/constants';

const MovieCard = ({ poster ,onClick }) => {
  
  if (!poster) return null; // Check if poster is available
  return (
    <div className="md:w-56 w-40 flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-20 relative z-30" onClick={onClick} >
      <img
        className="w-full h-full  object-cover rounded-lg shadow-lg"
        alt="poster"
        src={IMG_URL + poster}
      />
    </div>
  );
};

export default MovieCard;
