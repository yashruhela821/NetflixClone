import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
 

  return (
    <div className=" realtive bg-black " >
      <div className=" mt-[28%] md:-mt-40 pl-4 md:pl-12 relative  md:relative">
        <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer