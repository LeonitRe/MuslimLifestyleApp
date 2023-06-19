// index.js
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use("/api/buttonClicks", require("./router/buttonClicks"));

// Start the server
const port = process.env.PORT || 5070;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
