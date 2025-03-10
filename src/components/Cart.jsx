import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cartItems, addToCart, removeItem, resetCart, cartTotal } =
    useContext(CartContext);
  return (
    <div className="flex-col flex items-center gap-8 px-10 text-black text-sm h-full py-40">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div className="flex justify-between items-center" key={item.id}>
            <div className="flex gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-md h-24"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  removeItem(item);
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${cartTotal().toFixed(2)}</h1>
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              resetCart();
            }}
          >
            Clear cart
          </button>
        </div>
      ) : (
        <h1 className="text-lg font-bold">Your cart is empty</h1>
      )}
    </div>
  );
};
