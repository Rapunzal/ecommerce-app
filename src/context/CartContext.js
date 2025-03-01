import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const cartItemExists = cartItems.find((c) => c.id === item.id);

    if (cartItemExists) {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: item.quantity + 1 } : cart
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  const removeItem = (item) => {
    const itemToBeRemoved = cartItems.find((cart) => cart.id === item.id);

    if (itemToBeRemoved.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity - 1 } : cart
        )
      );
    }
  };

  //clear cart
};
