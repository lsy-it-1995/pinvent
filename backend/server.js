const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const userRoute = require("./routes/userRoute");
// const productRoute = require("./routes/productRoute");
// const contactRoute = require("./routes/contactRoute");
// const errorHandler = require("./middleWare/errorMiddleware");
// const cookieParser = require("cookie-parser");
// const path = require("path");

const app = express()
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () =>{
            console.log(`Server Running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))