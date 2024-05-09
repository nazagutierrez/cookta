import React from "react";
import logoCookta from "../../assets/logo-cookta.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import Footer from "../Footer/Footer";
import SliderMenu from "../Slider/SliderMenu";

const Header = ({ children }) => {
  return (
    <>
      <motion.div
        className="flex fixed w-full h-20 items-center bg-brown font-medium justify-between p-4 shadow-md z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.8, ease: "easeIn" }}
      >
        <Link to="/">
          <img
            src={logoCookta}
            alt="logo-cookta"
            className="w-28 cursor-pointer"
          />
        </Link>
        <div className="gap-10 hidden sm:flex">
          <div className="transition-all">
            <Link to="/" className="nav-item">
              Inicio
            </Link>
          </div>
          <div className="transition-all">
            <Link to="/nosotros" className="nav-item">
              Nosotros
            </Link>
          </div>
          <div className="transition-all">
            <Link to="/como-comprar" className="nav-item">
              Como Comprar
            </Link>
          </div>
        </div>
        <div className="flex gap-3 text-brown-dark justify-end">
          <motion.a
            className="text-3xl cursor-pointer hidden sm:block"
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{
              scale: 0.98,
              rotate: 0,
            }}
            href="https://www.instagram.com/cookta__/"
            target="_blank"
          >
            <SiInstagram />
          </motion.a>
          <motion.a
            className="text-3xl cursor-pointer hidden sm:block"
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{
              scale: 0.98,
              rotate: 0,
            }}
            href="https://wa.me/2364673632/?text=Hola!%20Me%20interesa%20un%20producto"
            target="_blank"
          >
            <BsWhatsapp />
          </motion.a>
          <motion.a
            className="block sm:hidden"
            whileTap={{
              scale: 0.70,
            }}
          >
            <SliderMenu />
          </motion.a>
        </div>
      </motion.div>
      <div className="h-full w-full">{children}</div>
      <Footer />
    </>
  );
};

export default Header;
