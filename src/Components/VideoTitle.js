import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" text-white   md:pt-48 md:px-16 px-4 bg-black  relative pb-10 md:pb-10  md:bg-transparent  w-screen aspect-video  md:bg-gradient-to-r from-black z-10 md:top-0 top-56    ">
      <h1 className="md:text-5xl text-3xl font-bold md:pt-0">{title}</h1>
      <p className=" md:w-1/4 w-full md:pt-3 md:text-lg text-sm">{overview}</p>
      <div>
        <button className="bg-white text-black font-semibold md:w-32 md:py-2 w-14 h-10 md:h-12 md:text-xl text-md mt-5 mr-4 rounded-md hover:bg-opacity-70" >Play</button>
        <button className="bg-gray-500 text-white md:w-32 md:md:h-12 w-20 py-2 px-auto md:text-xl text-md mt-2 opacity-90 rounded-md" > More info</button>
        <p className="text-white font-bold text-xl md:mt-72 mt z-50">Now playing</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      
    </div>
  );
};

export default VideoTitle;
