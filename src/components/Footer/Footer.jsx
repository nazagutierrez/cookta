import React from "react";
import { IoMdMail } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <>
      <div className="flex w-full justify-around border-t xl:justify-between bg-brown-cookie h-24 md:h-32 border-b border-brown-dark/40 text-[#1b120a]">
        <h1 className="xl:flex text-6xl font-light p-6 h-full items-center justify-start hidden">
          Cookta
        </h1>
        <div className="flex justify-center gap-20">
          <div className="flex flex-col items-center text-xl sm:text-2xl justify-center gap-1.5 text-center">
            <h3>Hablanos a</h3>
            <div
              className="text-xl flex items-center gap-1"
            >
              <BsTelephone />
              <h3>+54 9 2364 37-3048</h3>
            </div>
          </div>
          <div className="xl:flex flex-col items-center justify-center text-lg gap-1 hidden ">
            <p className="text-2xl">Recoje tu pedido en</p>
            <div className="flex items-center justify-center gap-1">
              <IoLocationSharp />
              <a
                className="nav-item text-xl text-[#1b120a]"
                href="https://maps.app.goo.gl/DfLAYdjuokKPuR2H9"
                target="_blank"
                rel="noreferrer"
              >Cabrera 358</a>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-start">
          <div className="flex flex-col md:flex-row text-xl sm:text-2xl font-normal mr-6 gap-1 text-center">
            <p>Cocinero:</p>
            <a
              className="italic text-[#1b120a] nav-item text-xl sm:text-2xl"
              href="https://www.instagram.com/marcemastroiani/"
              target="_blank"
              rel="noreferrer"
            >
              Marcelo Mastroianni
            </a>
          </div>
        </div>
      </div>
      <div className="flex xl:justify-between justify-around items-center p-5 h-24 sm:h-16 w-full text-[#1b120a] font-medium text-center bg-brown-cookie">
        <div className="flex flex-col sm:flex-row gap-x-2">
          <span className="self-center">© Copyright {date}.</span>
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
            <p className="hidden lg:inline-block">- Pastelería en Junín Buenos Aires</p>
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-base md:text-lg flex flex-col sm:flex-row gap-x-1">
            <h4>Creado por:</h4>
            <span className="italic w-fit">Nazareno Gutierrez</span>
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
