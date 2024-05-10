import React from "react";
import { Budines, Cookies } from "../../components/Products";
import ProductsList from "./components/ProductsList";
import HeroHome from "./components/HeroHome";
import InitAnimation from "./components/InitAnimation";

const Home = () => {
  return (
    <div className="bg-brown">
      <InitAnimation />
      <div
      >
        <div className="pb-28 pt-28"> {/* h-screen w-screen*/}
          {/* <HeroHome /> */}
          {/* <hr className="border mb-14 mt-24 border-brown rounded-full"/> */}
          <ProductsList products={Cookies} title="Cookies" textColor="text-brown-dark" bgColor="bg-brown-cookie"/>
          <hr className="border mb-14 mt-24 border-brown rounded-full"/>
          <ProductsList products={Budines} title="Budines" textColor="text-gray-800" bgColor="bg-brown-budin" />
        </div>
      </div>
    </div>
  );
};

export default Home;
