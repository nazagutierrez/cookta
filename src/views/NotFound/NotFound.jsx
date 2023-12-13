import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-brown flex items-center flex-col justify-center text-brown-dark">
      <p className="text-5xl mb-5">Página no encontrada!</p>
      <h1 className="text-2xl">Estos links podrían ayudarte:</h1>
      <div className="flex flex-col w-1/6 mt-1">
      <Link to="/" className="text-2xl w-fit nav-item after:bg-brown-dark text-brown-dark">Cookta inicio</Link>
      <Link to="/nosotros" className="text-2xl w-fit nav-item after:bg-brown-dark text-brown-dark">Cookta nosotros</Link>
      </div>
    </div>
  );
};

export default NotFound;
