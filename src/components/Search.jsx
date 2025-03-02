import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import { useParams } from "react-router-dom";

export const Search = () => {
  const [products, setProducts] = useState([]);
  const { input } = useParams();
  async function getSearchData() {
    console.log(input, " use params value");
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${input}`
    );
    const result = await response.json();
    setProducts(result.products);
    console.log(result);
  }

  useEffect(() => {
    getSearchData();
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-12  py-44 ml-32 mr-28">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};
