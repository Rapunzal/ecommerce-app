import React, { useContext } from "react";
import { Product } from "./Product";
import { ProductContext } from "../ProductContext";
import App from "../App";

export const ProductListPage = () => {
  const { productList, setProductList } = useContext(ProductContext);
  console.log(productList, " list of product");
  return (
    <div className="flex justify-center flex-wrap gap-12 m-16">
      {productList.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};
