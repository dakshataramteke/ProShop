const Jwt = require('jsonwebtoken');
const User = require('../models/User');
const JwtSecret = "shopdata";

// Protected Routes token based 
const requireSignIn = async (req, res, next) => {
    try {
        const decode = Jwt.verify(req.headers.authorization, JwtSecret);
        req.user = decode;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).send({ success: false, message: "Unauthorized" });
    }
}

// Admin access
const isAdmin = async (req, res, next) => {
   
    try {
        // get user from Login Controller
        console.log("user Data id is ", req.user._id);
        const adminuser = await User.findById(req.user._id);
        
        // Check if adminuser is null
        if (!adminuser) {
            return res.status(404).send({ success: false, message: "User  not found" });
        }

        // Check if the user has admin role
        if (adminuser.role !== 1) {
            return res.status(401).send({ success: false, message: "Unauthorized User" });
        }
        else{
            next(); // Proceed to the next middleware or route handler
        }

       
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            err,
            message: "Error in Admin Middleware"
        });
    }
}


module.exports = { requireSignIn, isAdmin };
