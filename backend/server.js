const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

dotenv.config();

const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// PRODUCT ROUTES
app.use("/api/products", productRoutes);

// Cart Route
app.use("/api/cart", cartRoutes);


app.get("/", (req, res) => {
  res.send("Smart Konbini API Running");
});

const startServer = async () => {

  try {

       await mongoose.connect(process.env.MONGO_URI);
       console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server Running on Port 5000");
    });

  } catch (error) {
    console.log("Database Connection Error:", error);
  }

};

startServer();