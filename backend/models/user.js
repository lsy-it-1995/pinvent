const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [
            true, 
            "Please add a name"
        ]
    },
    email: {
        type: String,
        required: [
            true, 
            "Please add an email"
        ],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    password:{
        type: String,
        required: [
            true, 
            "Please add a password"
        ],
        minLength: [8, "the password requires at least 8 characters"],
        maxLength: [24, "the password requires at most 24 characters"]
    },
    phoneNumber:{
        type: String,
        default: "+1",
        required: [
            true, 
            "Please add a phone number"
        ]
    }
}, {
    timestamps: true,
})

const User =  mongoose.model("User", userSchema);
module.exports = User;