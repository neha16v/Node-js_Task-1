import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import hallbookingRouter from "./Routers/hallbooking.router.js";

const app=express();
const PORT=4000;

app.use(cors());
app.use(bodyParser.json())
app.use('/api/hallbooking',hallbookingRouter)
app.listen(PORT,()=>{
    console.log(PORT)
})