import React, { useState } from "react";
import { Drawer, Box } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logoCookta from "../../assets/logo-cookta.webp";
import { SiInstagram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const SliderMenu = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
      <div
        className="text-3xl hover:opacity-40 p-1 transition-all cursor-pointer"
        onClick={() => setIsSliderOpen(true)}
      >
        <RxHamburgerMenu />
      </div>
      <Drawer
        anchor="right"
        open={isSliderOpen}
        onClose={() => setIsSliderOpen(false)}
      >
        <Box
          p={2}
          width="210px"
          textAlign={"center"}
          className="flex flex-col justify-between h-full bg-brown-cookie"
        >
          <div className="slider flex flex-col justify-between h-full items-center">
            <div className="top-slider pb-10 pt-3 flex w-full items-center justify-around">
              <img
                src={logoCookta}
                alt="logo-cookta"
                className="w-36 h-20 cursor-pointer rounded-md"
              />
            </div>
            <div className="mid-slider flex flex-col h-full font-medium items-center gap-3">
                <Link className="slider-item nav-item" to="/">Inicio</Link>
                <Link className="slider-item nav-item" to="/nosotros">Nosotros</Link>
                <Link className="slider-item nav-item" to="/como-comprar">Como Comprar</Link>
            </div>
            <div className="bottom-slider flex gap-10">
              <a
                className="text-3xl cursor-pointer"
                href="https://www.instagram.com/cookta__/"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram />
              </a>
              <a
                className=" text-3xl cursor-pointer"
                href="https://wa.me/2364673632/?text=Hola!%20Me%20interesa%20un%20producto"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp />
              </a>
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default SliderMenu;
