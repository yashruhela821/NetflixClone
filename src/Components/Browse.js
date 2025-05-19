import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.gptSearch);


useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();

  

  return (
    <div className=" relative k ">
      <Header />
      {showGptSearch ? <GptSearch />:
      <>
       <MainContainer />
       <SecondaryContainer /> </>
      }
      
     
    </div>
  );
};

export default Browse;
