import React from "react";
import { LuArrowDownToLine } from "react-icons/lu";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export const ScrollToTop = () => {
  return (
    <button
      onClick={() => scrollToTop()}
      className="absolute bottom-5 right-5 lg:w-20 w-16 lg:h-20 h-16 flex justify-center items-center group hover:scale-105 transition-all bg-brown-cookie rounded-full"
    >
      <i className="text-xl lg:text-3xl text-brown-dark-2 group-hover:scale-105 rotate-180">
        <LuArrowDownToLine />
      </i>
    </button>
  );
};
