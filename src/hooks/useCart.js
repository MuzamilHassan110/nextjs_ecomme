"use client"
import { productContext } from "../context/ProductProvider"
import React, { useState, useContext } from 'react'

export const useCart = () => {
    const { cartItem, setCartItem } = useContext(productContext);
    const [count, setCount] = useState(0);

    const addToCart = (product) => {
        console.log("type", typeof cartItem);
        const existingProduct = cartItem.findIndex(item => item.id === product.id);
        const updateProduct = [...cartItem];
        if(existingProduct != -1){
            updateProduct[existingProduct].quantity += 1;
        }
        else{
            updateProduct.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cartItem', JSON.stringify(updateProduct));
        setCartItem(updateProduct);
    }
   return {addToCart}
}

