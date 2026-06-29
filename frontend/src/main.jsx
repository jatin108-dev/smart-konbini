import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { LanguageProvider } from "./context/LanguageContext";
// GLOBAL CART STATE
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { CurrencyProvider } from "./context/CurrencyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>

  <LanguageProvider>

    <CurrencyProvider>

      <CartProvider>

        <AuthProvider>

          <App />

        </AuthProvider>

      </CartProvider>

    </CurrencyProvider>

  </LanguageProvider>

</React.StrictMode>
);