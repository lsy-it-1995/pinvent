const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, phoneNumber} = req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error("require fields are missing");
    }

    if(password.length < 8){
        res.status(400);
        throw new Error("password requires at least 8 characters");
    }else if(password.length > 24){
        res.status(400);
        throw new Error("password requires at most 24 characters");
    }

    const isUserExist = await User.findOne({email});
    if(isUserExist){
        res.status(400);
        throw new Error("user's email already used");
    }
    const user = await User.create({
        name, email, password, phoneNumber
    });

    if(user){
        const{_id, name, email, phoneNumber} = user
        res.status(201).json({
            _id, name, email, phoneNumber
        });
    }else{
        res.status(400);
        throw new Error("user failed to create");
    }
});


module.exports = {
    registerUser,
}