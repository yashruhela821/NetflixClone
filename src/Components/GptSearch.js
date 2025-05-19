
import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMAGE } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className=" min-h-screen ">
      {/* Fixed background image */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full bg-gradient-to-b from-black/7j0 to-black/90"></div>
      </div>

      {/* Main content */}
      <div className=" z-10 md:pt-[10%] pt-24 px-4">
        <GptSearchBar />
        <div className="mt-8">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
