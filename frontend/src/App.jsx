import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import TouristMode from "./pages/TouristMode";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";  

function App() {

  return (
    <CartProvider>
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        {/* TOURIST MODE */}
        <Route
          path="/tourist-mode"
          element={<TouristMode />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* CART */ }
        <Route
        path="/cart"
        element={<Cart />}
        />

      </Routes>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;