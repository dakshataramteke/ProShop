const express = require("express");
const registerController  = require("../Controllers/authController");
const loginController = require("../Controllers/loginController");

const router = express.Router();

// REGISTER 
router.post("/register", registerController);

// Login 
router.post("/login", loginController);

module.exports = router;