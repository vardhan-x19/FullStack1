import express from "express";
const router=express.Router();
import { user } from "../config/schema.js";

router.get('/post',async (req,res)=>{
  const userData =await user.create({
     title:'let me tell you something',
     author:'harsha',
     publishYear:2023
   })
   res.json(userData)
 })
 router.get('/addOne',async (req,res)=>{
  const userData =await user.create({
     title:'do it now',
     author:'vardhan',
     publishYear:2023
   })
   res.send(userData)
 })
 router.get('/getOne',async (req,res)=>{
   const oneData=await user.findOne({author:'harsha'});
   console.log(oneData)
   const findData=await user.findOne({_id:new ObjectId(oneData._id)})
   res.json(findData)
   
 })
 router.get('/delete', (req,res)=>{
  user.deleteOne({author:'harsha'}).then((result)=>{
    res.send('deleted')
  }).catch((err)=>{
    console.log('the error while deleting the data',err)
    res.send('not deleted ')
  })
  
 })
 router.get('/updateById',(req,res)=>{

  user.updateOne(
    { author: 'harsha' },       // Filter criteria
    { $set: { title: "title" } }    // Update operation: only updating 'title'
  ).then((result)=>{
    console.log('then',result)
    res.json({
      message:"update one"
    })
  }).catch((err)=>{
    res.json({
      message:"not updated"
    })
  })
 
 })
 router.get('/allBooks',async (req,res)=>{
   const allData=await user.find();
   res.json(allData)
 })


 export default router;