const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (name,email,password) =>{
    const hashed = await bcrypt.hash(password,10);
    return await User.create({name, email, password: hashed})
}

const login = async (email,password) =>{
    const user = await User.findOne({email});
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (! isMatch) throw new Error("Wrong password")
    
    const acessToken = jwt.sign(
        {userId : user._id},
        process.env.JWT_SECRET,
        {expiresIn: "2m"}
    );
    const refreshToken = jwt.sign(
        {userId : user.id},
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: "7d"}
    )
    return token
}
module.exports = {register,login}