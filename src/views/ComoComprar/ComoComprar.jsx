import React from "react";
import Divider from "@mui/material/Divider";
import logoCookta from "../../assets/logo-cookta-grande.png";
import { BiCookie } from "react-icons/bi";
import { CustomDivider } from "./CustomDivider";

const ComoComprar = () => {
  return (
    <div className="bg-brown h-screen w-full pt-28">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-brown-dark-2 title-style mb-9">Como comprar</h1>
        <div className="flex flex-col justify-center items-center w-2/3 h-full text-center text-xl">
          <div>
            Observa la lista de productos y elige el/los que quiera/s comprar
          </div>
          <CustomDivider />
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
          <div>El pago puede ser realizado en efectivo o por transferencia</div>
          <div className="text-brown-dark-2 py-3">
            <Divider />
          </div>
          <div>Retirar el pedido por Alvarez Rodríguez 133 a una fecha y hora acordada </div>
          <CustomDivider />
          <div className="flex justify-center items-center gap-2">
            <BiCookie /> 
              Y por ultimo disfrutar de nuestros deliciosos productos! 
            <BiCookie />
          </div>
          <CustomDivider />
          <p>
            Cualquier consulta no dudes en comunicarte con nosotros!
          </p>
          <CustomDivider> 
            <i className="text-2xl">
              <BiCookie />
            </i>
          </CustomDivider>
        </div>
      </div>
    </div>
  );
};

export default ComoComprar;
