const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

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