import express, { urlencoded } from 'express';
import path from 'path';
import multer from 'multer';
import uploadRouter from './routes/uploadRoute.js'
const app = express();
const port = 8000;
app.set('view engine','ejs');
app.set('views',path.resolve("./views"))
// app.use(urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render('homePage')
})
app.use('/upload',uploadRouter)
app.listen(port,()=>{
    console.log("server started at port "+port);
})