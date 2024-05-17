import React from "react";

const InitAnimation = () => {
  const animationStyle =
    "z-40 pointer-events-none fixed text-9xl home-bg border-brown-dark content-center bg-brown h-full w-full text-brown-dark font-light";
  return (
    <>
      <div className={`${animationStyle} left-0 border-r-2 text-end animation-left`}>
        <h1 className="bg-[#C29A6A] blur-l-box float-right w-60 h-48 content-center">Coo</h1>
      </div>
      <div className={`${animationStyle} right-0 border-l-2 animation-right`}>
        <h1 className="bg-[#C29A6A] blur-r-box w-44 h-48 content-center">kta</h1>
      </div>
    </>
  );
};

export default InitAnimation;
