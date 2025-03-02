import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cartItems, addToCart, removeItem, resetCart, cartTotal } =
    useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log(cartItems);

  const calculateTotal = () => {
    setTotal(cartTotal);
  };

  const handleReset = () => {
    resetCart();
    setTotal(0);
  };

  return (
    <div className="py-36 flex justify-center">
      <div className="flex justify-center align-middle flex-wrap w-96 ">
        {cartItems.map((item) => (
          <div className="h-36 w-96 " key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <div className="flex">
              <button
                className="bg-orange-400 px-2"
                onClick={() => addToCart(item)}
              >
                +
              </button>
              <p>{Number(item.quantity)}</p>
              <button
                className="bg-orange-400 px-2"
                onClick={() => removeItem(item)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        <p>Cart Total : {total.toFixed(2)}</p>
        <button className="bg-orange-400 p-4" onClick={calculateTotal}>
          Total
        </button>
        <button className="bg-orange-400 p-4" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
