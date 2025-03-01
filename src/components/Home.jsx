import React, { useState, useEffect } from "react";
import { ProductListPage } from "./ProductListPage.jsx";
import { ProductContext } from "../context/ProductContext.js";

export const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    async function getAllProductData() {
      const response = await fetch("https://dummyjson.com/products?limit=9");
      const result = await response.json();
      console.log(result.products);
      // myData = result.products;
      setProductList(result.products);
      console.log(productList, " hey");
      // console.log(myData, " mydata");
    }
    getAllProductData();
  }, []);
  return (
    <div className="py-20">
      <ProductContext.Provider value={{ productList, setProductList }}>
        <ProductListPage />
      </ProductContext.Provider>
    </div>
  );
};
