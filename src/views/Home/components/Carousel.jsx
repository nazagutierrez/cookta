import React, { useState } from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const theme = createTheme({
  palette: {
    darkBrown: {
      main: "#92674e",
    },
  },
});

const buttonStyle = {
  position: "absolute",
  backgroundColor: "#e0a37f65",
  top: "39%",
  zIndex: 50,
  height: "50px",
  minWidth: "50px",
  fontSize: "1.5rem",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: "#e0a37f99",
  },
};

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 500 : -700,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: "ease-in",
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1200,
      opacity: 0,
      transition: "ease-in",
    };
  },
};

const Carousel = ({ imgArray, handleClose }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep(images) {
    setDirection(1);
    if (imgIndex === images.length - 1) {
      setImgIndex(0);
      return;
    }
    setImgIndex(imgIndex + 1);
  }

  function prevStep(images) {
    setDirection(-1);
    if (imgIndex === 0) {
      setImgIndex(images.length - 1);
      return;
    }
    setImgIndex(imgIndex - 1);
  }
  return (
    <div className="flex items-center justify-center border-b pb-3 border-brown-dark-2">
      <button
        onClick={handleClose}
        className="absolute top-2 right-3 hover:opacity-60 text-brown-dark-2 text-3xl transition-all"
      >
        <AiOutlineClose />
      </button>
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => prevStep(imgArray)}
          color="darkBrown"
          sx={buttonStyle}
          className="left-1"
        >
          {"<"}
        </Button>
        <div className="relative h-96 w-96 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              src={imgArray[imgIndex]}
              className="object-contain object-center absolute w-full h-full"
              key={imgArray[imgIndex]}
              custom={direction}
            />
          </AnimatePresence>
        </div>
        <Button
          onClick={() => nextStep(imgArray)}
          color="darkBrown"
          sx={buttonStyle}
          className="right-1"
        >
          {">"}
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Carousel;
