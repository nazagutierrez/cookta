import { Divider } from "@mui/material";
import React from "react";

export const CustomDivider = ({ children, customClass }) => {
  return (
    <div
      className={`${customClass ? customClass : "w-3/4 py-3 text-lg opacity-60 text-brown-dark-2"}`}
    >
      <Divider
        sx={{
          borderColor: "#915f44",
          ":before": { borderColor: "#915f44" },
          ":after": { borderColor: "#915f44" },
        }}
      >
        {children}
      </Divider>
    </div>
  );
};
