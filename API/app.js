import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload'; 


const app=express();

//import api routers
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
import subcategoryRouter from './routes/subcategory.router.js'
//import propertyRouter from './routes/property.router.js'

//import cors to resolve cross origin problem
app.use(cors());

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to extract file data from request
app.use(fileUpload());

//route level middleware to load api router
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",subcategoryRouter)
//app.use("/property",propertyRouter);

app.listen(3002);
console.log("server invoked at link http://localhost:3002");
