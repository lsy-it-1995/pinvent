const registerUser = (req, res) => {
    if(!req.body.email){
        res.status(400);    
        throw new Error("email is required");
    }
    res.send("Register User");
};


module.exports = {
    registerUser,
}