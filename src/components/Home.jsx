import React, { useState, useEffect } from "react";
import { ProductListPage } from "./ProductListPage.jsx";
import { ProductContext } from "../context/ProductContext.js";
import { Pagination } from "./Pagination.jsx";

export const Home = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProducttPerPage] = useState(9);

  useEffect(() => {
    async function getAllProductData() {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=0");
      // const response = await fetch("https://dummyjson.com/products?limit=9");
      const result = await response.json();
      console.log(result.products);
      // myData = result.products;
      setProductList(result.products);
      // setProductList(currentProduct);
      setLoading(false);
      console.log(productList, " hey");
      // console.log(myData, " mydata");
    }
    getAllProductData();
  }, []);

  //Get current page
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  return (
    <div className="py-20">
      <Pagination
        productPerPage={productPerPage}
        totalProducts={productList.length}
        paginate={paginate}
      />
      <ProductContext.Provider value={{ currentProduct, setProductList }}>
        <ProductListPage loading={loading} />
      </ProductContext.Provider>
    </div>
  );
};
