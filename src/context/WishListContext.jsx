import { createContext, useEffect, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );

  const addToWishList = (product) => {
    const productExists = wishList.find((p) => p.id === product.id);

    if (productExists) {
      setWishList(
        wishList.map((p) => {
          if (p.id === product.id) return { ...p };
        })
      );
    } else {
      setWishList([...wishList, { ...product }]);
    }
  };

  const resetWishList = () => {
    setWishList([]);
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    const wishList = localStorage.getItem("wishlist");
    if (wishList) {
      setWishList(JSON.parse(wishList));
    }
  }, []);

  return (
    <WishListContext.Provider
      value={{ wishList, setWishList, addToWishList, resetWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
