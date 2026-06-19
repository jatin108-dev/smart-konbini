const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProductById,
} = require("../controllers/productController");


// GET ALL PRODUCTS
router.get("/", getProducts);


// GET SINGLE PRODUCT
router.get("/:id", getProductById);


module.exports = router;