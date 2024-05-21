import React from "react";
import { BiCookie } from "react-icons/bi";
import styles from "./animated-bg.module.css"

const AnimatedBg = () => {
  return (
    <div className={` ${styles.animatedBg} absolute text-brown-dark flex text-3xl w-full h-screen justify-around inset-0 pointer-events-none`}>
      <span className="w-[30px] h-[30px] hidden sm:block">
        <div className="pb-52"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px] hidden sm:block">
        <div className="pb-48"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px] hidden sm:block">
        <div className="pb-44"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px] hidden sm:block">
        <div className="pb-40"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px]">
        <div className="pb-52"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px]">
        <div className="pb-44"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px]">
        <div className="pb-40"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px]">
        <div className="pb-48"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px]">
        <div className="pb-44"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
      <span className="w-[30px] h-[30px]">
        <div className="pb-52"><BiCookie /></div> 
        <div><BiCookie /></div> 
      </span>
    </div>
  );
};

export default AnimatedBg;
