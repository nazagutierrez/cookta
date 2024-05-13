import { Divider } from "@mui/material";
import React from "react";

export const CustomDivider = ({children, customClass}) => {
  return (
    <div className={`${customClass ? customClass : "w-3/5 py-3 text-lg text-brown-dark-2"}`}>
      <Divider>{children}</Divider>
    </div>
  );
};
