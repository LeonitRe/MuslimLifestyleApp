const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

// Register route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

// Protected route: Get user information

module.exports = router;
