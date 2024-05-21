import React from "react";
import { Budines, Cookies } from "../../components/Products";
import ProductsList from "./components/ProductsList";
import HeroHome from "./components/HeroHome";
import InitAnimation from "./components/InitAnimation";
import { ScrollToTop } from "./components/Scroll-to-top";

const Home = () => {
  return (
    <>
        <InitAnimation />
        <div className="home-bg h-full w-full fixed blur-sm scale-105 -z-10"></div>
        <div className="pb-28 pt-28 relative"> {/* h-screen w-screen*/}
          <div id="Home"></div>
          {/* <HeroHome /> */}
          <ProductsList products={Cookies} title="Cookies" textColor="text-brown-dark" bgColor="bg-brown-cookie"/>
          {/* <hr className="border mb-10 border-brown2 rounded-full"/> */}
          <ProductsList products={Budines} title="Budines" textColor="text-gray-800" bgColor="bg-brown-budin" />
          <ScrollToTop />
        </div>
    </>
  );
};

export default Home;
