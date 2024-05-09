import React from "react";
import logoCookta from "../../assets/logo-cookta2.webp";

const Nosotros = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start bg-brown-light pt-32 pb-48">
      <h1 className="text-brown-dark-2 title-style">Nosotros</h1>
      <div className="flex justify-center items-center flex-col lg:flex-row shadow-xl mt-16 m-4 border-2 rounded border-brown p-6">
        <div className="w-2/3 h-full justify-between text-xl flex flex-col text-center items-center text-brown-dark pt-6">
          <p className="text-2xl pb-7">Hola!, somos un pequeño emprendimiento llamado Cookta</p>
          <p className="">Nos dedicamos a cocinar productos de pastelería.</p>
          <p>Las cookies y budines son nuestras especialidades!</p>
          <p className="pt-4">Tenemos como objetivo hacerte disfrutar de comidas deliciosas</p>
          <p>a precios super accesibles!</p>
          <p className="pt-4">No te quedes con las ganas y hacenos un pedido!</p>
          
          <p className="pt-16 text-xl">
            Te esperamos, como siempre, para que disfrutes de nuestras delicias.
          </p>
          <p className="text-5xl italic font-light pt-5">Cookta</p>
        </div>
        <div className="flex justify-center items-center ml-2 mt-10 lg:mt-0">
          <img src={logoCookta} alt="logo-cookta" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
