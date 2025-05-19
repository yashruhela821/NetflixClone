
import { useSelector } from 'react-redux';
import useFetchTrailerUrl from '../hooks/useFetchTrailerUrl';

const VideoBackground = ({movieId}) => {
  const TrailerVideoUrl = useSelector((store) => store.movies?.trailerVideo);
  useFetchTrailerUrl(movieId);


  return (
    <div className=' md:py-0 py-4 '>
    {TrailerVideoUrl &&
      <iframe className='w-screen aspect-video absolute top-0  bg-black   ' src={TrailerVideoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerPolicy="strict-origin-when-cross-origin" >
      </iframe>
    }
     <div className="absolute top-0 left-0 w-full h-full z-10" style={{ background: 'transparent' }}></div>
  
      </div>
  )
}

export default VideoBackground;