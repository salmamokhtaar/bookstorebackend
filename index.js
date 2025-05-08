const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookRouter = require("./routes/bookRouter");
const userRouter = require("./routes/userRouter");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection string
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use(bookRouter);
app.use(userRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
