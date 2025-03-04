import React, { useContext } from "react";
import { WishListContext } from "../context/WishListContext";
import { AiFillStar } from "react-icons/ai";

export const WishList = () => {
  const { wishList, setWishList, addToWishList, resetWishList } =
    useContext(WishListContext);
  console.log(wishList);
  return (
    <div className="py-24 text-center">
      <button
        onClick={resetWishList}
        className="bg-orange-400 p-2 rounded hover:bg-orange-600 hover:text-white"
      >
        {" Reset-WishList"}
      </button>

      <div className="py-20 flex justify-around gap-6 flex-wrap">
        {wishList.map((product) => (
          <div
            key={product.id}
            className="w-80 h-86  border border-gray-300 rounded-md"
          >
            <div className="flex justify-center">
              <img src={product.thumbnail} className="h-60 w-80 bg-gray-100" />
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
                          color={
                            ratingValue > product.rating ? "grey" : "orange"
                          }
                        />
                      );
                    })}{" "}
                  </div>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
