const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addToCart,
  getCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController");


// ==============================
// CART ROUTES
// ==============================

// GET USER CART
router.get(
  "/",
  authMiddleware,
  getCart
);

// ADD PRODUCT
router.post(
  "/add",
  authMiddleware,
  addToCart
);

// INCREASE QUANTITY
router.put(
  "/increase/:productId",
  authMiddleware,
  increaseQuantity
);

// DECREASE QUANTITY
router.put(
  "/decrease/:productId",
  authMiddleware,
  decreaseQuantity
);

// REMOVE PRODUCT
router.delete(
  "/remove/:productId",
  authMiddleware,
  removeFromCart
);

// CLEAR CART
router.delete(
  "/clear",
  authMiddleware,
  clearCart
);

module.exports = router;