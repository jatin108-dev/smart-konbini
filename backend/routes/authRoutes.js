const express = require("express");

const router = express.Router();

const {
  signupUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");


// SIGNUP ROUTE
router.post("/signup", signupUser);


// LOGIN ROUTE
router.post("/login", loginUser);

// GET CURRENT LOGGED-IN USER
router.get(
  "/me",
  authMiddleware,
  getCurrentUser
);


module.exports = router;