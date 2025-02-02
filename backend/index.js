import express from "express";
import dotenv from "dotenv"
import { dbConnect } from "./config/db.js";  // ✅ Add `.js` extension
import { user } from "./config/schema.js";
import { ObjectId } from "mongodb";
import cors from 'cors'
import router from "./routes/userRouter.js";
dotenv.config(); 
const app=express();
dbConnect();

app.use(cors())
// app.use(cors({
//   origin:'http://localhost:5555/',
//   methods:["GET","POST","DELETE","PUT"],
//   allowedHeaders:['Content-Type']
// }))

const PORT=5555;
app.use(express.json())
app.use(router);
app.get('/',(req,res)=>{
  res.send('hello ');
})

app.listen(PORT,()=>{
  console.log(PORT)
})
