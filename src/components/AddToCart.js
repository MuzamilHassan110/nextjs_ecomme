"use client";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../hooks/useCart.js";

const AddToCart = ({ product }) => {
  const { addToCart } = useCart();

  const handleCartAdd = () => {
    addToCart(product);
    toast.success(`${product.name} Item added to cart`);
  };
  return (
    <>
      <button
        onClick={handleCartAdd}
        className="w-full mt-4 py-2 px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md"
      >
        Add To Cart
      </button>
      <Toaster />
    </>
  );
};

export default AddToCart;
