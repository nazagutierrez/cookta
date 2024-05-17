import * as React from "react";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Carousel from "./Carousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#",
  border: "2px solid #503221",
  boxShadow: 24,
  p: 4,
};

export default function CookieModal({
  children,
  title,
  description,
  price,
  imgArray,
  textColor,
  bgColor,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        onClick={handleOpen}
        className="w-full h-full flex flex-col gap-2 items-center justify-around"
      >
        {children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 400,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            className={`${bgColor} bg-opacity-100 w-[300px] sm:w-[450px] focus-visible:outline-none`}
          >
            <Carousel handleClose={handleClose} imgArray={imgArray} />
            <div className={`${textColor} text-xl mt-4 font-medium`}>
              {title}
            </div>
            <div className={`${textColor} font-medium`}>{description}</div>
            <div className={`${textColor} font-medium`}>{price}</div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
