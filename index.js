import express from "express";
import router from "./Routers/userRouters.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());
app.use("/api",router)

mongoose.connect("mongodb://localhost:27017/crud",{}).then((res)=>console.log("mongodb connected successfully")).catch((err)=>{
    console.log("mongodb not connected");
    
})

app.listen(port,()=>{
    console.log(`Server listen on http://localhost:${port}`);
    
})