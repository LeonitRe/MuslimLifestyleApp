// config/db.js
const mongoose = require("mongoose");
const connectionString = "mongodb://127.0.0.1:27017/content";

const connectDB = async () => {
  try {
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
