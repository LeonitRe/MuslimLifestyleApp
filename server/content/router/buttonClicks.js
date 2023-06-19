// routes/buttonClicks.js
const express = require("express");
const router = express.Router();
const buttonClicksController = require("../controller/buttonClicksController");

// Increment button click count
router.put("/:buttonName", buttonClicksController.incrementClickCount);

// Get button click count
router.get("/id/:buttonId", buttonClicksController.getClickCount);
router.get("/", buttonClicksController.getAllButtonClicks);

module.exports = router;
