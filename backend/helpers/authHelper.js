const bcrypt = require('bcrypt');

const hashedPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        return hashPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        throw new Error("Hashing failed");
    }
};

const ComparePassword = (password, hashPassword) => {
    return bcrypt.compare(password, hashPassword);
};

module.exports = { hashedPassword, ComparePassword };