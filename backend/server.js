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

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://smart-konbini.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});

  } catch (error) {
    console.log("Database Connection Error:", error);
  }

};

startServer();