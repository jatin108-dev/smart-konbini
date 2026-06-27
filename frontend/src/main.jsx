import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { LanguageProvider } from "./context/LanguageContext";
// GLOBAL CART STATE
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>

  {/* AUTH CONTEXT */}
  <AuthProvider>

    {/* LANGUAGE CONTEXT */}
    <LanguageProvider>

      {/* CART CONTEXT */}
      <CartProvider>

        <App />

      </CartProvider>

    </LanguageProvider>

  </AuthProvider>

</React.StrictMode>
);