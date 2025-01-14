"use client"
import React, { createContext, useState } from 'react'

export const productContext = createContext();
const ProductProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([]);
   
    console.log("context Type", typeof cartItem);
  return (
    <productContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </productContext.Provider>
  )
}

export default ProductProvider