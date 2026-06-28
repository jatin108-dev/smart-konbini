const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ADD PRODUCT TO CART

exports.addToCart = async (req, res) => {

  try {

    const userId = req.user._id;
    const { productId } = req.body;

    // CHECK PRODUCT EXISTS
    const product = await Product.findById(productId);

    if (!product) {

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    }

    // FIND USER CART
    let cart = await Cart.findOne({ user: userId });

    // CREATE NEW CART
    if (!cart) {

      cart = await Cart.create({

        user: userId,

        items: [
          {
            product: productId,
            quantity: 1,
          },
        ],

      });

      return res.status(201).json({
        success: true,
        cart,
      });

    }

    // CHECK PRODUCT ALREADY EXISTS
    const existingItem = cart.items.find(

      (item) => item.product.toString() === productId

    );

    if (existingItem) {

      existingItem.quantity += 1;

    } else {

      cart.items.push({

        product: productId,

        quantity: 1,

      });

    }

    await cart.save();

    res.status(200).json({

      success: true,

      cart,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};

// GET USER CART
exports.getCart = async (req, res) => {

  try {

    const userId = req.user._id;

    const cart = await Cart.findOne({
      user: userId,
    }).populate("items.product");

    if (!cart) {

      return res.status(200).json({
        success: true,
        cart: {
          items: [],
        },
      });

    }

    res.status(200).json({

      success: true,

      cart,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};


// INCREASE QUANTITY
exports.increaseQuantity = async (req, res) => {

  try {

    const userId = req.user._id;
    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: userId,
    });

    const item = cart.items.find(

      (item) => item.product.toString() === productId

    );

    if (!item) {

      return res.status(404).json({

        success: false,
        message: "Product not found in cart",

      });

    }

    item.quantity++;

    await cart.save();

    res.status(200).json({

      success: true,

      cart,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};


// DECREASE QUANTITY
exports.decreaseQuantity = async (req, res) => {

  try {

    const userId = req.user._id;
    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: userId,
    });

    const item = cart.items.find(

      (item) => item.product.toString() === productId

    );

    if (!item) {

      return res.status(404).json({

        success: false,

      });

    }

    if (item.quantity > 1) {

      item.quantity--;

    } else {

      cart.items = cart.items.filter(

        (item) => item.product.toString() !== productId

      );

    }

    await cart.save();

    res.status(200).json({

      success: true,

      cart,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};


// REMOVE PRODUCT
exports.removeFromCart = async (req, res) => {

  try {

    const userId = req.user._id;
    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: userId,
    });

    cart.items = cart.items.filter(

      (item) => item.product.toString() !== productId

    );

    await cart.save();

    res.status(200).json({

      success: true,

      cart,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

// CLEAR CART
exports.clearCart = async (req, res) => {

  try {

    const userId = req.user._id;

    const cart = await Cart.findOne({
      user: userId,
    });

    cart.items = [];

    await cart.save();

    res.status(200).json({

      success: true,

      cart,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};