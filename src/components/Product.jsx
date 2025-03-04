import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishListContext } from "../context/WishListContext";

export const Product = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const { WishList, setWishList, addToWishList } = useContext(WishListContext);

  return (
    <div
      key={product.id}
      className="w-80 h-86  border border-gray-300 rounded-md"
    >
      <div className="flex justify-center">
        <img src={product.images[0]} className="h-60 w-80 bg-gray-100" />
      </div>
      <div className="mx-5 relative h-44">
        <p className="text-xl  text-gray-500">{product.title}</p>
        {/* <p>{product.description}</p> */}
        <div className="flex justify-between absolute bottom-14">
          <div className="text-sm m-2">
            <div className="flex">
              Rating:
              {/* <p>Ratings: {product.rating}</p> */}
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <AiFillStar
                    color={ratingValue > product.rating ? "grey" : "orange"}
                  />
                );
              })}{" "}
            </div>
            <p>Price: ${product.price}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4 absolute bottom-4 w-full">
          <button
            onClick={() => addToWishList(product)}
            className="rounded-full px-4 py-1 bg-orange-400 text-gray-800 hover:bg-orange-600 hover:text-white"
          >
            Wishlist
          </button>
          <button
            className="ml-6 rounded-full px-4 bg-orange-400  text-gray-800 hover:bg-orange-600 hover:text-white"
            onClick={() => addToCart(product)}
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};
