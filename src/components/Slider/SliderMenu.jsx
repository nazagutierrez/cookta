import React, { useState } from "react";
import { Drawer, Box } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logoCookta from "../../assets/logo-cookta.png";
import { motion } from "framer-motion";
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
          className="flex flex-col justify-between h-full bg-brown"
        >
          <div className="slider flex flex-col justify-between h-full items-center">
            <div className="top-slider pb-10 pt-3 flex w-full items-center justify-around">
              <img
                src={logoCookta}
                alt="logo-cookta"
                className="w-36 cursor-pointer rounded-md"
              />
            </div>
            <div className="mid-slider flex flex-col h-full font-medium items-center gap-3">
              <div className="slider-item nav-item">
                <Link to="https://cooktacookies.web.app/">Inicio</Link>
              </div>
              <div className="slider-item nav-item">
                <Link to="/nosotros">Nosotros</Link>
              </div>
              <div className="slider-item nav-item">
                <Link to="/como-comprar">Como Comprar</Link>
              </div>
            </div>
            <div className="bottom-slider flex gap-10">
              <motion.a
                className="text-3xl cursor-pointer"
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
                className=" text-3xl cursor-pointer"
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
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default SliderMenu;
