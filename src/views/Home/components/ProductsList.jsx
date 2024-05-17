import React, { useState } from "react";
import CooktaModal from "./CooktaModal";
import styles from "./product-shadow.module.css"

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
    <section className="flex flex-col items-center justify-center gap-5 mb-16 h-full mx-5">
      <h1 style={{ boxShadow: "0px 0 25px 25px #C29A6A"}} className="title-style bg-[#C29A6A] mt-5 mb-10">{title}</h1>
      <div className="flex justify-center items-center gap-5 flex-wrap ">
        {product.map((product) => {
          const { id, img, title, description, price, imgArray} = product;
          return (
          <div
            key={id}
            className={`${bgColor} ${styles.box} w-[300px] h-[400px] lg:w-[400px] lg:h-[460px] rounded-md hover:scale-105 hover:rotate-2 transition cursor-pointer`}
          >
            <CooktaModal img={img} title={title} description={description} price={price} imgArray={imgArray} textColor={textColor} bgColor={bgColor}>
              <img src={img} alt="cookie-img" className="w-52 h-44 lg:h-64 lg:w-72 my-3 object-cover" />
              <h1 className={`${textColor} text-3xl`}>{title}</h1>
              <p className={`${textColor} text-xl text-center min-h-[50px] mb-1 px-4`}>{descriptionShorter(description)}</p>
              <p className={`${textColor} text-xl mb-1`}>{price}</p>
            </CooktaModal>
          </div>
          )
        })}
      </div>
    </section>
  );
};

export default ProductsList;