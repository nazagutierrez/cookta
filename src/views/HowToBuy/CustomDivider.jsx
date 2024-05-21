import { Divider } from "@mui/material";
import React from "react";

export const CustomDivider = ({ children, customClass }) => {
  return (
    <div
      className={`${customClass ? customClass : "w-full md:w-3/4 py-3 text-lg text-brown-dark-2"}`}
    >
      <Divider
        sx={{
          borderColor: "#915f448c",
          ":before": { borderColor: "#915f448c"},
          ":after": { borderColor: "#915f448c"},
        }}
      >
        {children}
      </Divider>
    </div>
  );
};
