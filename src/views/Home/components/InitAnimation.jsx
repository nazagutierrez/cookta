import React from "react";
import { motion } from "framer-motion";

const InitAnimation = () => {
  const animationStyle = "z-40 pointer-events-none fixed text-9xl initial-transition-bg border-brown-dark content-center bg-brown h-full w-full text-brown-dark font-light"
  return (
    <>
      <motion.div
        className={`left-0 border-r-2 text-end ${animationStyle}`}
        initial={{ x: "-49.6vw", opacity: 1 }}
        animate={{ x: "-70vw", opacity: 0 }}
        transition={{ duration: 1.8, ease: [0.65, 0, 0.55, 0] }}
      >
        <h1 className="bg-brown blur-l-box float-right w-72 h-52 content-center">
          Coo
        </h1>
      </motion.div>
      <motion.div
        className={`right-0 border-l-2 ${animationStyle}`}
        initial={{ x: "49.6vw", opacity: 1 }}
        animate={{ x: "70vw", opacity: 0 }}
        transition={{ duration: 1.8, ease: [0.65, 0, 0.55, 0] }}
      >
        <h1 className="bg-brown blur-r-box w-52 h-52 content-center">
          kta
        </h1>
      </motion.div>
    </>
  );
};

export default InitAnimation;
