import React from "react";
import logoCookta from "../../assets/logo-cookta-grande.webp";
import Atropos from "atropos/react";
import "atropos/css";

export const CardAtropos = () => {
  const aboutUsSection = () => {
    return (
      <div className="flex justify-center items-center bg-brown-cookie flex-col lg:flex-row mt-16 m-4 rounded p-6">
        <div className="w-2/3 h-full justify-between text-xl flex flex-col text-center items-center text-brown-dark pt-6">
          <h2 className="text-2xl pb-7">
            Hola!, somos un pequeño emprendimiento llamado Cookta
          </h2>
          <p>Nos dedicamos a cocinar productos de pastelería.</p>
          <p>Las cookies y budines son nuestras especialidades!</p>
          <p className="pt-4">
            Tenemos como objetivo hacerte disfrutar de comidas deliciosas
          </p>
          <p>a precios super accesibles!</p>
          <p className="pt-4">
            No te quedes con las ganas y hacenos un pedido!
          </p>
          <p className="pt-16 text-xl">
            Te esperamos, como siempre, para que disfrutes de nuestras delicias.
          </p>
          <p className="text-5xl italic font-light pt-5">Cookta</p>
        </div>
        <div className="ml-16 mt-10 lg:mt-0">
          <img
            className="w-[452px] h-[452px] hidden xl:block object-cover"
            src={logoCookta}
            alt="logo-cookta"
          />
        </div>
      </div>
    );
  };

  return (
    <>
    <div className="hidden xl:block">
      <Atropos
        highlight={false}
        rotateXMax={6}
        rotateYMax={6}
        activeOffset={50}
      >
        {aboutUsSection()}
      </Atropos>
    </div>
      <div className="block xl:hidden">
        {aboutUsSection()}
      </div>
    </>
  );
};
