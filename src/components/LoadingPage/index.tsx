import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-neutral-03 opacity-75 absolute top-0 left-0 right-0 bottom-0"></div>
      <span className="text-neutral-04 relative text-heading-02">
        Loading...
      </span>
    </div>
  );
};

export default LoadingPage;
