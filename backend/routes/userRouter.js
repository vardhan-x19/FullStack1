import express from "express";
const router=express.Router();
import { user } from "../config/schema.js";
import { ObjectId } from 'mongodb';
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
 router.get('/getOne/:id',async (req,res)=>{
   const {id}=req.params;
   console.log('the id of the data item',id)
   const oneData=await user.findOne({_id: new ObjectId(id)});
   console.log(oneData)
  //  const findData=await user.findOne({_id:new ObjectId(oneData._id)})
   res.json(oneData)
   
 })
 router.post('/delete/:id', (req,res)=>{
  const id=req.params;
  user.deleteOne({_id: new ObjectId(id)}).then((result)=>{
    res.redirect('/')
  }).catch((err)=>{
    console.log('the error while deleting the data',err)
    res.send('not deleted ')
  })
  
 })
 router.post('/updateById',(req,res)=>{
  const data =req.body;
  console.log(data);
  const {author,title,publishYear}=data;
  user.updateOne(
    { _id: data._id },       // Filter criteria
    { $set: {author:author,title:title,publishYear:publishYear} }    // Update operation: only updating 'title'
  ).then((result)=>{
    console.log('then',result)
    res.redirect('/');
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