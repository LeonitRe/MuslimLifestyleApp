const db = require("../config/db.config");

const Cart = function (cart) {
  this.userId = cart.userId;
  this.productId = cart.productId;
  this.quantity = cart.quantity;
};

Cart.create = (newCart, result) => {
  db.query("INSERT INTO cart SET ?", newCart, (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
      return;
    }

    result(null, res.insertId);
  });
};

// Add other methods for retrieving, updating, and deleting cart items

module.exports = Cart;
