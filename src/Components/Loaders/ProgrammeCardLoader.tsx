const ProgrammeCardLoader = () => {
    return (
      <div className="bg-white rounded-lg shadow-training-card animate-pulse">
        {/* Image Skeleton */}
        <div className="h-40 bg-gray-300 rounded-t-lg w-full"></div>
        
        <div className="px-2 pt-2 pb-5">
          {/* Title Skeleton */}
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
          
          {/* Details Section */}
          <div className="flex items-center justify-between mt-4">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
          
          {/* Description Skeleton */}
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
          
          {/* Bottom Section Skeleton */}
          <div className="flex items-center justify-between mt-4">
            <div className="h-5 bg-gray-300 rounded w-1/4"></div>
            <div className="h-5 bg-gray-300 rounded w-1/5"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgrammeCardLoader;
  