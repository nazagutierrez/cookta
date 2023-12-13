import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, NotFound, ComoComprar } from "./views";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="nosotros" element={<AboutUs />} />
      <Route path="como-comprar" element={<ComoComprar />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
