const User = require("../models/User");
const { hashedPassword } = require("../helpers/authHelper");
const { UserSchema } = require("../middlewares/Validations");

const validateUser  = async (req, res) => {
    try {
        const { error } = await UserSchema.validate(req.body);
        if (error) {
            const result = error.details.map(e => e.message);
            return res.status(400).send({
                success: false,
                message: "Validation error",
                errors: result
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error in validation",
            error: err.message
        });
    }
};

const registerController = async (req, res) => {
    // Validate user input
    const validationResponse = await validateUser (req, res);
    if (validationResponse) return validationResponse;

    try {
        const { name, email, password, phone, address } = req.body;

        // Check for existing user
        const existingUser  = await User.findOne({ email });
        if (existingUser ) {
            return res.status(200).send({
                success: true,
                message: "User  already exists",
            });
        }

        // Hash the password
        const hashedPwd = await hashedPassword(password);

        // Save new user
        const userData = new User({
            name,
            email,
            phone,
            address,
            password: hashedPwd
        });
        await userData.save();
        res.status(200).send({
            success: true,
            message: "User  registered successfully",
            userData
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error: err.message
        });
    }
};

//Test Controller 
const testController = (req,res)=>{
console.log("Protected Route");
res.send("Protrcted Routes")
}

module.exports =  {registerController ,testController};
