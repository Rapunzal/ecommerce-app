import React from "react";

export const Product = ({ product }) => {
  return (
    <div
      key={product.id}
      className="w-80 h-96  border border-gray-300 rounded-md"
    >
      <div className="flex justify-center">
        <img src={product.images[0]} className="h-60 w-64 " />
      </div>
      <div className="mx-5">
        <h3 className="text-2xl font-bold text-gray-500">{product.title}</h3>
        {/* <p>{product.description}</p> */}
        <div className="flex justify-between">
          <div>
            <p>Ratings: {product.rating}</p>
            <p>Price: ${product.price}</p>
          </div>
          <button className="rounded-full px-4 bg-gray-400">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
