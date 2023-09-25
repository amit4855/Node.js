const router=require("express").Router()
const studentController=require("../controller/studentController")
const uploadfile=require("../middleware/upload")

router.get("/",(req,res)=>{
    res.render("index.hbs")
})
router.post("/Createstudent",uploadfile.upload,studentController.CreateStudent)  


module.exports=router
