import React from "react";

const InitAnimation = () => {
  const animationStyle =
    "z-40 pointer-events-none fixed text-9xl initial-transition-bg border-brown-dark content-center bg-brown h-full w-full text-brown-dark font-light";
  return (
    <>
      <div className={`left-0 border-r-2 text-end ${animationStyle} animation-left`}>
        <h1 className="bg-brown blur-l-box float-right w-72 h-52 content-center">Coo</h1>
      </div>
      <div className={`right-0 border-l-2 ${animationStyle} animation-right`}>
        <h1 className="bg-brown blur-r-box w-52 h-52 content-center">kta</h1>
      </div>
    </>
  );
};

export default InitAnimation;
