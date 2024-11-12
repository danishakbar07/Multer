import { Router } from "express";
import multer from "multer";
const router = Router();
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        console.log(file);
        
         cb(null,'./uploads')  
    },
    filename:function(req,file,cb){
        let fileName = `${Date.now()}-${file.originalname}`
         cb(null,fileName)
    }
})
const upload = multer({storage:storage})
router.post('/',upload.single("image"),(req,res)=>{
    try {
        res.json("Uploaded successfully") 
    } catch (error) {
        console.log(error);    
    }

})
export default router