import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton'
import { MdTipsAndUpdates } from "react-icons/md";
import { MdOutlineAutoDelete } from "react-icons/md";
import axios from 'axios'
import { FcViewDetails } from "react-icons/fc";
import {Link} from 'react-router-dom'
const Home = () => {
  const[data,setData]= useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(() => {
   axios.get('http://localhost:5555/allBooks').then((result)=>{
    console.log( 'ther result',result.data);
    setData(result.data);
   }).catch((err)=>{
    console.log('there is an err while getting data',err);
   })
  }, [])
  
  return (
    <div className='w-full flex flex-col '>
      <div className='p-4' >
        <h1 className='p-4 bg-red-500 flex justify-center rounded-lg font-bold text-white items-center '>Book Items</h1>
      </div>
      {!loading ? <Spinner /> :
      <div className='p-4 w-full flexf flex-row justify-center items-center '>
      <table className='w-full text-center border rounded-lg border-black'>
       <thead className='w-full text-center border border-black'>
         <tr className=' w-full'>
         <th  className='border w-[10%] border-black '>No</th>
         <th className='border w-[20%] border-black'>Author</th>
         <th className='border w-[20%] border-black'>Operations</th>
         <th className='border w-[20%] border-black'>Title</th>
         <th className='border w-[10%] border-black'>Publish Year</th>
         </tr>
       </thead>
       <tbody>
         {data.map((item,index)=>(
           <tr key={item._id}  className=' w-full'>
           <td  className='border w-[10%] border-black '>{index}</td>
           <td className='border w-[20%] border-black'>{item.author}</td>
           <td className='border w-[20%] border-black'>
            <div className='w-full flex justify-center gap-3'>
              <Link to={`/show/${item._id}`}>
              <FcViewDetails  />
              </Link>
            <Link state={{item}}  to={`/update/${item._id}`}><MdTipsAndUpdates /></Link>
            
            <MdOutlineAutoDelete />
            </div>
           </td>
           <td className='border w-[20%] border-black'>{item.title}</td>
           <td className='border w-[10%] border-black'>{item.publishYear}</td>
           </tr>
         ))}
       </tbody>
      </table>
   </div>
      }
      
    </div>
  )
}

export default Home
