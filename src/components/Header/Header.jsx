import React from "react";
import logoCookta from "../../assets/logo-cookta.png";
import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import Footer from "../Footer/Footer";
import SliderMenu from "../Slider/SliderMenu";

const Header = ({ children }) => {
  return (
    <>
      <div className="flex fixed w-full h-20 items-center bg-brown-cookie font-medium justify-between p-4 shadow-md z-30">
        <Link to="/">
          <img
            src={logoCookta}
            alt="logo-cookta"
            className="w-28 cursor-pointer"
          />
        </Link>
        <div className="gap-10 hidden sm:flex">
          <Link to="/" className="nav-item">Inicio</Link>
          <Link to="/nosotros" className="nav-item">Nosotros</Link>
          <Link to="/como-comprar" className="nav-item">Como Comprar</Link>
        </div>
        <div className="flex gap-3 text-brown-dark justify-end">
          <a
            className="text-3xl cursor-pointer hidden sm:block hover:scale-105 transition-all"
            href="https://www.instagram.com/cookta__/"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </a>
          <a
            className="text-3xl cursor-pointer hidden sm:block hover:scale-105 transition-all"
            href="https://wa.me/2364673632/?text=Hola!%20Me%20interesa%20un%20producto"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
          <button className="block sm:hidden">
            <SliderMenu />
          </button>
        </div>
      </div>
      <div className="h-full w-full">{children}</div>
      <Footer />
    </>
  );
};

export default Header;
