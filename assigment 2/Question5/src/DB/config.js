const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/StudentDBAagin").then(() => {
    console.log("connection successfully");
}).catch((err) => {
    console.log("connectio failed ");
})