const mongoose =require("mongoose")
const studentSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    mob:{
        type:Number,
        unique:true
    },
    course:{
        type:String
    },
    Image:[{
        imageurl:{
            type:String
        }
    }]
})

module.exports= mongoose.model("Stud",studentSchema)