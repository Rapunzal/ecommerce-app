import React, { useContext } from "react";
import { Product } from "./Product";
import { ProductContext } from "../context/ProductContext";
import App from "../App";

export const ProductListPage = ({ loading }) => {
  const { currentProduct, setProductList } = useContext(ProductContext);
  console.log(currentProduct, " list of product");
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="flex justify-center flex-wrap gap-12 m-16">
      {currentProduct.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};
