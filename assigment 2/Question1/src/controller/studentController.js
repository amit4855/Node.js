const async = require("hbs/lib/async")
const student=require("../model/student.model")
exports.CreateStudent = async(req,res)=>{
    try{
        if(!req.files || req.files.length===0){
            return res.status(400).json({message:"no file are uploaded"})
        }
      const {name,email,dob,course,mob}=req.body
      const images=req.files.map(file=>{
        return {
            imageurl:file.filename
        }
      })
      const newstudent=new student({
        mob, name,email,dob,course,Image:images
      })
      const data = await newstudent.save()
      return  res.status(201).json({message:"new student inserted",
    data:data})
    }
    catch(error){
        console.log(error)
    }
}