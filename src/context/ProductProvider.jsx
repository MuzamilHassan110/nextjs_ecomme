import React, { createContext, useState } from 'react'

export const productContext = createContext();
const ProductProvider = (children) => {
    const [cart, setCart] = useState([]);
  return (
    <productContext.Provider value={{ cart, setCart }}>
      {children}
    </productContext.Provider>
  )
}

export default ProductProvider