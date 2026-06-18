const express = require("express");

const router = express.Router();

const {
  signupUser,
  loginUser,
  getCurrentUser,
  logoutUser
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

// LOGOUT CURRENT USER
router.post(
  "/logout",
  logoutUser
);


module.exports = router;