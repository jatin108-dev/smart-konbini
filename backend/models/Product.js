const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  japaneseName: {
    type: String,
  },

  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  vegetarian: {
    type: Boolean,
    default: false,
  },

  vegan: {
  type: Boolean,
  default: false,
},

  mustTry: {
    type: Boolean,
    default: false,
  },

  // PRICE STORED IN JPY
currency: {
  type: String,
  default: "JPY",

  stock: {
  type: Number,
  default: 10,
}
},

}, { timestamps: true });

module.exports = mongoose.model(
  "Product",
  productSchema
);