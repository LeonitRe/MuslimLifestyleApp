// controllers/buttonClicksController.js
const ButtonClick = require("../model/ButtonClick");

// Increment button click count
const incrementClickCount = async (req, res) => {
  try {
    const buttonName = req.params.buttonName;

    // Find the button click document by button name
    const buttonClick = await ButtonClick.findOne({ buttonName });

    if (!buttonClick) {
      // If the button click document doesn't exist, create a new one
      await ButtonClick.create({ buttonName, clickCount: 1 });
    } else {
      // Increment the click count
      buttonClick.clickCount++;
      await buttonClick.save();
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error incrementing button click count:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get button click count
const getClickCount = async (req, res) => {
  try {
    const buttonName = req.params.buttonName;

    // Find the button click document by button name
    const buttonClick = await ButtonClick.findOne({ buttonName });

    if (!buttonClick) {
      res.status(200).json({ clickCount: 0 });
    } else {
      res.status(200).json({ clickCount: buttonClick.clickCount });
    }
  } catch (err) {
    console.error("Error getting button click count:", err);
    res.status(500).json({ error: "Server error" });
  }
};

const getAllButtonClicks = async (req, res) => {
  try {
    const buttonClicks = await ButtonClick.find({});
    res.status(200).json({ buttonClicks });
  } catch (err) {
    console.error("Error getting button clicks:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  incrementClickCount,
  getClickCount,
  getAllButtonClicks,
};
