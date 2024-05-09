import React from "react";
import Divider from "@mui/material/Divider";
import logoCookta from "../../assets/logo-cookta2.webp";
import { BiCookie } from "react-icons/bi";

const ComoComprar = () => {
  return (
    <div className="bg-brown-light h-full w-full pt-24 px-11">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-brown-dark-2 title-style mb-9">Como comprar</h1>
        <div className="w-2/3 h-full text-center">
          <div>
            Observa la lista de productos y elige el/los que quiera/s comprar
          </div>
          <div className="text-sm text-brown-dark-2 py-3">
            <Divider />
          </div>
          <div>
            Llamanos o escribenos por telefono al{" "}
            <a
              className="underline decoration-brown-dark-2 hover:decoration-2"
              href="https://wa.me/2364673632/?text=Hola!%20Quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noreferrer"
            >
              +54 9 2364 67-3632
            </a>{" "}
            para hacer el pedido
          </div>
          <div className="text-sm text-brown-dark-2">
            <Divider>O</Divider>
          </div>
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
          <div className="text-sm text-brown-dark-2 py-3">
            <Divider />
          </div>
          <div>El pago debe ser realizado en efectivo o por transferencia</div>
          <div className="text-sm text-brown-dark-2 py-3">
            <Divider />
          </div>
          <div>Retirar el pedido por Alvarez Rodríguez 133 a una fecha y hora acordada </div>
          <div className="text-sm text-brown-dark-2 py-3">
            <Divider />
          </div>
          <div className="flex justify-center items-center gap-2">
          <BiCookie /> Y por ultimo disfrutar de nuestros deliciosos productos! <BiCookie />
          </div>
          <div className="text-sm text-brown-dark-2 py-3">
            <Divider />
          </div>
          <p>
            Cualquier consulta no dudes en comunicarte con nosotros!
          </p>
          <div className="text-2xl text-brown-dark-2">
            <Divider>
              <BiCookie />
            </Divider>
          </div>
        </div>
        <img src={logoCookta} alt="logo-cookta" className="h-96 mt-2 mb-5 rounded-md object-contain" />
      </div>
    </div>
  );
};

export default ComoComprar;
