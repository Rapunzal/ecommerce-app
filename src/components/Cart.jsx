import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cartItems, addToCart, removeItem, resetCart, cartTotal } =
    useContext(CartContext);
  return <div>cart</div>;
};
