import React from "react";
import { BiCookie } from "react-icons/bi";
import { CustomDivider } from "./CustomDivider";
import AnimatedBg from "./Animated-bg";

const ComoComprar = () => {
  return (
    <div className="bg-brown relative h-full min-h-screen w-full pt-28 flex flex-col items-center">
      <AnimatedBg />
      <h1 className="text-brown-dark-2 title-style z-20 mx-auto my-6 md:my-14 bg-brown blur-box text-center">Como comprar</h1>
      <div className="z-20 m-auto mt-10 mb-10 bg-brown blur-box flex flex-col justify-center items-center w-3/5 h-fit text-center text-xl md:text-2xl">
        <p>
          Observa la lista de productos y elige los que quieras comprar
        </p>
        <CustomDivider />
        <div>
          Llamanos o escribenos por telefono al{" "}
          <a
            className="underline decoration-brown-dark-2 hover:decoration-2"
            href="https://wa.me/2364673632/?text=Hola!%20Quiero%20saber%20mas%20de%20Cookta"
            target="_blank"
            rel="noreferrer"
          >
           +54 9 2364 37-3048
          </a>{" "}
          para hacer el pedido
        </div>
        <CustomDivider>o también</CustomDivider>
        <div>
          Escribenos un mensaje privado en nuestro instagram{" "}
          <a
            className="underline decoration-brown-dark-2 hover:decoration-2"
            href="https://www.instagram.com/cookta__/"
            target="_blank"
            rel="noreferrer"
          >
            @cookta
          </a>{" "}
          para hacer el pedido
        </div>
        <CustomDivider />
        <p>El pago puede ser realizado en efectivo o por transferencia</p>
        <CustomDivider />
        <p>
          Retirar el pedido por Cabrera 358 a una fecha y hora
          acordada{" "}
        </p>
        <CustomDivider />
        <div className="flex justify-center items-center gap-2">
          <BiCookie className="text-xl text-brown-dark"/>
          Y por ultimo disfrutar de nuestros deliciosos productos!
          <BiCookie className="text-xl text-brown-dark"/>
        </div>
        <CustomDivider />
        <p>Cualquier consulta no dudes en comunicarte con nosotros!</p>
        <CustomDivider>
            <BiCookie className="text-2xl"/>
        </CustomDivider>
      </div>
    </div>
  );
};

export default ComoComprar;
