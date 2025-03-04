import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishListProvider } from "./context/WishListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishListProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishListProvider>
  </StrictMode>
);
