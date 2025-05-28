const { hashedPassword, ComparePassword } = require("../helpers/authHelper");
const User = require("../models/User");
const Jwt = require('jsonwebtoken');
const JwtSecret = "shopdata";

const loginController = async(req,res)=>{
try{
const {email, password} = req.body;
if(!email || !password){
    return res.status(404).send({
        success:false,
        message: "Invalid Email and Password"
    })
}
// Check User
const checkuser = await User.findOne({email});
if(!checkuser){
    return res.status(400).send({success:false, message: "Email is not registered"});
}
const match = await ComparePassword(password,checkuser.password)
if(!match){
    return res.status(200).send({
        success:false,
        message:"Invalid Password"
    })}

    //Token 
    const token = await Jwt.sign({_id:User._id}, JwtSecret,{expiresIn:'7d'});
    
    res.status(200).send({success:true, message:"Login SUccessfully", user:{
        name:checkuser.name, email:checkuser.email,phone:checkuser.phone, address: checkuser.address
    }, token})
}catch(err){
    console.log(err);
    res.status(500).send({success:false, message: "Error in Login"})
}
}
module.exports = loginController