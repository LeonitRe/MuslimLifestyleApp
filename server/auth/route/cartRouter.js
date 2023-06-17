const express = require("express");
const cartController = require("../controller/cartController");

const router = express.Router();

// Add to cart route
router.post("/cart", cartController.addToCart);

// Add other routes for retrieving, updating, and deleting cart items

module.exports = router;
