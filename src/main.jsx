import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./Components/Cart.jsx";
import { CartProvider } from "./Providers/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Cart />
    </CartProvider>
  </React.StrictMode>
);
