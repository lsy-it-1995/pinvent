const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const errorHandler = require("./middleWare/generalError");
const cors = require("cors");

// const productRoute = require("./routes/productRoute");
// const contactRoute = require("./routes/contactRoute");
// const cookieParser = require("cookie-parser");
// const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
    res.send("Home page");
})

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () =>{
            console.log(`Server Running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))