import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { data, useParams } from 'react-router-dom';
import { IoChevronBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
const ShowBook = () => {
  const[item,setItem]=useState([]);
  const[loading,setLoading]=useState(true)
  const {id}=useParams();
  useEffect(() => {
   axios.get(`http://localhost:5555/getOne/${id}`).then((result)=>{
    console.log("result",result.data)
    setItem(result.data)
   })
  }, [])
  
  return (
    <div className='w-[50%] relative rounded-lg flex justify-start flex-col gap-3 h-full p-5 ml-5 mt-48 border '>
       <Link to={'/'} className='absolute left-5 top-5'><IoChevronBackCircle /></Link>
      <h1 className='text-center font-bold'>BOOK Details</h1>
      <h2>Author : <span className='font-bold ml-3'>{item.author}</span>
      </h2>
      <h2>Title : <span className='font-bold ml-3'>{item.title}</span></h2>
      <h2>PublishedYear :<span className='font-bold ml-3'>{item.publishYear}</span></h2>
    </div>
  )
}

export default ShowBook
