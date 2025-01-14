"use client";
import { productContext } from "../context/ProductProvider";
import React, { useState, useContext, useEffect } from "react";

export const ProductLocalStorageName = "product";
export const useCart = () => {
  const { cartItem, setCartItem } = useContext(productContext);
  const [cartCount, setCartCount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setCartCount(cartItem.length);
    findTotalPrice();
    populateProduct();
  }, [cartItem])

  
  // find Price
  const findTotalPrice = () => {
    let amount = 0 ;
    cartItem.forEach(element => {
     amount += (element.price/100) * element.quantity;
    });
    setPrice(amount);
    
  }
  // product set in satat when page is loaded
  const populateProduct = () => {
    if(cartItem.length === 0) {
        const productFromStorage = JSON.parse(localStorage.getItem(ProductLocalStorageName));
        if (productFromStorage) {
          setCartItem(productFromStorage);
        }
  
    }
  }
//   Add to cart fuction
  const addToCart = (product) => {
    const existingProduct = cartItem.findIndex(
      (item) => item.id === product.id
    );
    const updateProduct = [...cartItem];
    if (existingProduct != -1) {
      updateProduct[existingProduct].quantity += 1;
    } else {
      updateProduct.push({ ...product, quantity: 1 });
    }
    localStorage.setItem(
      ProductLocalStorageName,
      JSON.stringify(updateProduct)
    );
    setCartItem(updateProduct);
  };

//    Delete a product BY Id
  const deleteProductById = (productId) => {
    const deleteProduct = cartItem.filter((item) => item.id !== productId);
    setCartItem(deleteProduct);

    if (deleteProduct.length === 0) {
      localStorage.removeItem(ProductLocalStorageName);
    } else {
      localStorage.removeItem(
        ProductLocalStorageName,
        JSON.stringify(deleteProduct)
      );
    }
  };

//    Delete All Products
  const deleteProduct =  (product)  => {
    setCartItem([]);
    localStorage.removeItem(ProductLocalStorageName);
  };

//   Increment
const IncrementProduct = (productId) => {
    
 const newProduct = cartItem.map(items => {
    
            if(items.id === productId){
               
                return {
                    ...items,
                    quantity: items.quantity + 1,
                }
            }
            else{
                return items
            }
           
            
        }
       
        );
        localStorage.setItem(
            ProductLocalStorageName,
            JSON.stringify(newProduct)
            
          );
         
          setCartItem(newProduct);
         

}

const dececrementProduct = (productId) => {
    const newProduct = cartItem.map(items => {
        if(items.id === productId && items.quantity > 1){
            return {
                ...items,
                quantity: items.quantity - 1,
            }
        }
        else{
            return items
        }
    });
    localStorage.removeItem(ProductLocalStorageName);
    setCartItem(newProduct);
}

  return {cartCount, price, cartItem, addToCart, deleteProductById, deleteProduct, IncrementProduct, dececrementProduct };
};
