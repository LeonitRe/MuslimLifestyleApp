// models/ButtonClick.js
const mongoose = require("mongoose");

const buttonClickSchema = new mongoose.Schema({
  buttonName: {
    type: String,
    required: true,
    unique: true,
  },
  clickCount: {
    type: Number,
    default: 0,
  },
});

const ButtonClick = mongoose.model("ButtonClick", buttonClickSchema);

module.exports = ButtonClick;
