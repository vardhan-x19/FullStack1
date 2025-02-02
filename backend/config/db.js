import mongoose from "mongoose";
export const dbConnect=()=>{
  mongoose.connect(process.env.MONGO_URL).then((db)=>{
    console.log('connected to db');
  }).catch(err=>{
      console.log('the err while connecting to DB');
  })
  }
