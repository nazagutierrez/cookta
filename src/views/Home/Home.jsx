import React from "react";
import { Budines, Cookies } from "../../components/Products";
import ProductsList from "./components/ProductsList";
import InitAnimation from "./components/InitAnimation";
import { ScrollToTop } from "./components/Scroll-to-top";

const Home = () => {
  return (
    <>
      <InitAnimation />
      <div className="home-bg h-full w-full fixed blur-sm scale-105 -z-10"></div>
      <div className="pb-28 pt-28 relative">
        <div id="Home"></div>
        <ProductsList products={Cookies} title="Cookies" textColor="text-brown-dark" bgColor="bg-brown-cookie"/>
        <ProductsList products={Budines} title="Budines" textColor="text-gray-800" bgColor="bg-brown-budin" />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Home;
