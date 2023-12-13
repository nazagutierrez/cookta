import React, { useState } from "react";
import CooktaModal from "./CooktaModal";
import { motion } from "framer-motion";

function descriptionShorter(desc) {
  if (desc.length > 70) {
    return desc.substring(0, 70) + "..."
  } else {
    return desc
  }
}

const ProductsList = ({ products, title, textColor, bgColor }) => {
  const [product] = useState(products);
  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-16 h-full">
      <h1 className="text-brown-dark-2 mb-5 title-style">{title}</h1>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {product.map((product) => {
          const { id, img, title, description, price, imgArray} = product;
          return (
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{
              scale: 0.95,
              rotate: 0,
            }}
            key={id}
            className={`${bgColor} flex flex-col justify-center items-center border border-brown shadow-brown shadow-lg rounded-md w-80 sm:w-1/2 max-w-xl cursor-pointer`}
          >
            <CooktaModal img={img} title={title} description={description} price={price} imgArray={imgArray} textColor={textColor} bgColor={bgColor}>
              <img src={img} alt="cookie-img" className="h-96 w-80 my-3 object-cover" />
              <h1 className={`${textColor} text-3xl`}>{title}</h1>
              <p className={`${textColor} text-xl text-center mb-1 w-80 md:w-96 px-2 h-20 md:h-14`}>{descriptionShorter(description)}</p>
              <p className={`${textColor} text-xl mb-1`}>{price}</p>
            </CooktaModal>
          </motion.div>
          )
        })}
      </div>
    </div>
  );
};

export default ProductsList;