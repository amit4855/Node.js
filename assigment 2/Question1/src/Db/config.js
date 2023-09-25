const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>{
    console.log("data base connected sucesfully");
})
.catch((err)=>{
    console.log(err);
})

