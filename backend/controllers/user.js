const registerUser = async(req, res) => {
    if(!req.body.email){
        res.status(400);
        throw new Error("email required");
    }
    res.send("Register User");
};


module.exports = {
    registerUser,
}