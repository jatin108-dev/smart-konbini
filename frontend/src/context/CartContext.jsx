import { createContext, useContext, useState } from "react";

// CREATE CONTEXT
const CartContext = createContext();

// PROVIDER
export const CartProvider = ({ children }) => {

  // STORE ALL CART ITEMS
  const [cartItems, setCartItems] = useState([]);

  // ADD PRODUCT TO CART
  const addToCart = (product) => {

    setCartItems((prevItems) => {

      // CHECK IF PRODUCT ALREADY EXISTS
      const existingProduct = prevItems.find(
        (item) => item._id === product._id
      );

      // IF EXISTS INCREASE QUANTITY
      if (existingProduct) {

        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      }

      // ELSE ADD NEW PRODUCT
      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };

  // REMOVE PRODUCT
  const removeFromCart = (_id) => {

    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== _id)
    );

  };

  // INCREASE PRODUCT QUANTITY
const increaseQuantity = (_id) => {

  setCartItems((prevItems) =>

    prevItems.map((item) =>

      item._id === _id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item

    )

  );

};

// DECREASE PRODUCT QUANTITY
const decreaseQuantity = (_id) => {

  setCartItems((prevItems) =>

    prevItems.flatMap((item) => {

      // MATCH PRODUCT
      if (item._id === _id) {

        // REMOVE IF QUANTITY IS 1
        if (item.quantity === 1) {

          return [];

        }

        // OTHERWISE DECREASE
        return {
          ...item,
          quantity: item.quantity - 1,
        };

      }

      return item;

    })

  );

};

  // CLEAR CART
  const clearCart = () => {

    setCartItems([]);

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >

      {children}

    </CartContext.Provider>

  );

};

// CUSTOM HOOK
export const useCart = () => useContext(CartContext);