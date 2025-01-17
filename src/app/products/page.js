import React from "react";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../services/ProductServices";

const Product = async () => {
  const Products = await getProducts();
  return (
    <div className="my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Products.data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Product;
