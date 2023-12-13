import React from "react";
import { motion } from "framer-motion";
import { Budines, Cookies } from "../../components/Products";
import ProductsList from "./components/ProductsList";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-brown-light">
      <motion.div
        className="text-8xl text-brown-dark font-light fixed top-[40%] sm:top-[25.5rem] -z-0"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        Cookta
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeIn" }}
        className="z-20"
      >
        <div className="mb-28 mt-28">
          <ProductsList products={Cookies} title="Cookies" textColor="text-brown-dark" bgColor="bg-brown-cookie"/>
          <hr className="border mb-14 mt-24 border-brown rounded-full"/>
          <ProductsList products={Budines} title="Budines" textColor="text-gray-800" bgColor="bg-brown-budin" />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
