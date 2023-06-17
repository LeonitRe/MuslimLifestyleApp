const Cart = require("../model/Cart");

exports.addToCart = (req, res) => {
  const { userId, productId, quantity } = req.body;

  // Create a new cart item
  const newCartItem = new Cart({
    userId,
    productId,
    quantity,
  });

  // Save the cart item to the database
  Cart.create(newCartItem, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }

    res.status(201).json({ message: "Item added to cart successfully" });
  });
};

// Add other methods for retrieving, updating, and deleting cart items
