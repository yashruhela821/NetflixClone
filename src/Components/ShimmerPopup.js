const ShimmerPopup = () => {
    return (
      <div className="animate-pulse text-white">
        {/* Shimmer for image */}
        <div className="relative w-full h-72 bg-gray-700 rounded-lg"></div>
  
        {/* Title  */}
        <div className="px-4 mt-4">
          <div className="h-6 bg-gray-700 rounded w-2/4 mb-4 flex flex-wrap"> 
            
          </div>
         
        </div>
  
        {/* Details shimmer */}
        <div className="px-4 mt-4 py-6">
          <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6 "></div>
        </div>
      </div>
    );
  };
  
  export default ShimmerPopup;
  