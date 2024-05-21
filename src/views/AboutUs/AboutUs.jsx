import React from "react";
import { CardAtropos } from "./Card-atropos";
import "atropos/css";


const AboutUs = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-start bg-brown pt-32 pb-48">
      <h1 className="text-brown-dark-2 mb-14 title-style z-10">Nosotros</h1>
      <CardAtropos />
    </section>
  );
};

export default AboutUs;
