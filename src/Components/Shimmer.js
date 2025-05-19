"use client";

const MovieCardShimmer = () => {
  const shimmerCards = Array(4).fill(null);

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Just a sec...
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-6 shadow-lg  mx-auto">
        {shimmerCards.map((_, index) => (
          <div
            key={index}
            className="w-60 h-80 rounded-lg relative overflow-hidden bg-black bg-opacity-40 mx-auto "
          >
            <div className="absolute inset-0 shimmer-effect"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .shimmer-effect {
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MovieCardShimmer;
