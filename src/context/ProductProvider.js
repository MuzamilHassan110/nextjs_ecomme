"use client";
import React, { createContext, useState } from "react";

export const productContext = createContext();
const ProductProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <productContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
