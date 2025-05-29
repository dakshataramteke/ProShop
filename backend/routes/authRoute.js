const express = require("express");
const {registerController, testController}  = require("../Controllers/authController");
const loginController = require("../Controllers/loginController");
const {requireSignIn,isAdmin} = require("../middlewares/authMiddleware");

const router = express.Router();

// REGISTER 
router.post("/register", registerController);

// Login 
router.post("/login", loginController);

//text Routes 
router.get("/test", requireSignIn,isAdmin,testController);

module.exports = router;