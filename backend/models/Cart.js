const mongoose = require("mongoose");

// CART ITEM SCHEMA
const cartItemSchema = new mongoose.Schema({

  // PRODUCT REFERENCE
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  // PRODUCT QUANTITY
  quantity: {
    type: Number,
    default: 1,
  },

});

// MAIN CART SCHEMA
const cartSchema = new mongoose.Schema({

  // OWNER OF CART
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  // ALL PRODUCTS
  items: [cartItemSchema],

}, {
  timestamps: true,
});

module.exports = mongoose.model("Cart", cartSchema);