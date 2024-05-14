import React from "react";
import { IoMdMail } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <>
      <div className="flex w-full justify-around border-t xl:justify-between bg-brown-cookie h-32 border-b border-brown-dark/40 text-brown-dark">
        <h1 className="xl:flex text-6xl font-light p-6 h-full items-center justify-start hidden">
          Cookta
        </h1>
        <div className="flex justify-center gap-20">
          <div className="flex flex-col items-center text-2xl justify-center gap-1.5 text-center">
            <p className="text-brown-dark font-normal">Seguinos en Instagram</p>
            <a
              className="hover:opacity-60 transition-all"
              href="https://www.instagram.com/cookta__/"
              target="_blank"
              rel="noreferrer"
            >
              <SiInstagram />
            </a>
          </div>
          <div className="xl:flex flex-col items-center justify-center text-lg gap-1 hidden ">
            <p className="text-2xl">Recoje tu pedido en</p>
            <div className="flex items-center justify-center gap-1">
              <IoLocationSharp />
              <p>Alvarez Rodríguez 133</p>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-start">
          <div className="flex flex-col md:flex-row text-2xl font-normal mr-6 gap-1 text-center">
            <p>Cocinera:</p>
            <a
              className="italic nav-item"
              href="https://www.instagram.com/ccatamercado"
              target="_blank"
              rel="noreferrer"
            >
              Catalina Mercado
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 h-28 sm:h-16 w-full text-brown-dark font-medium text-center bg-brown-cookie">
        <div>
          <span>© Copyright {date}.</span>
          <span>
            {" "}
            <a
              href="https://www.instagram.com/cookta__/"
              className="underline decoration-brown-dark-2 hover:decoration-2 text-lg"
              target="_blank"
              rel="noreferrer"
            >
              Cookta
            </a>{" "}
            <p className="hidden sm:inline-block">- Pastelería en Junín Buenos Aires</p>
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-base md:text-lg flex flex-col md:flex-row gap-0 md:gap-1">
            Creado por:
            <span className="italic w-40 md:w-fit">Nazareno Gutierrez</span>
          </h2>
          <div className="text-xl flex justify-center items-center gap-4">
            <a
              href="https://wa.me/2364329720/?text=Hola!"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition-all"
            >
              <AiOutlineWhatsApp />
            </a>
            <a
              href="mailto:nazarenojunin@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition-all"
            >
              <IoMdMail />
            </a>
            <a
              href="https://www.linkedin.com/in/nazarenogutierrez1/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition-all"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
