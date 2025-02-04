import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoChevronBackCircle } from "react-icons/io5";
const DeleteBook = () => {
  const navigate=useNavigate();
  const location = useLocation(); 
  const {item} = location.state;
  const deletePost=()=>{
    axios.post(`http://localhost:5555/delete/${item._id}`).then((result)=>{
        console.log(result);
        navigate('/')
    }).catch((err)=>{
      console.log('err',err);
      navigate('/err')
    })
  }
  return (
    <div className='w-[60%] relative mt-8 ml-10 h-full border p-16 mb-8  flex flex-col gap-5'>
    <Link to={'/'} className='absolute left-5 top-5'><IoChevronBackCircle /></Link>
     <div>
     <label className='font-bold mr-3' for="author">Author:</label>
     <input className='border' name='author' type="text"  value={item.author}
      />
     </div>
    <div>
    <label className='font-bold mr-3' for="title">Title:</label>
     <input className='border' name='title' type="text"  value={item.title}
    
      />
    </div>
   <div>
   <label className='font-bold mr-3 mb-8' for="publishedYear">Year:</label>
     <input className='border' name='publishedYear' type="text"  value={item.publishYear}
    
      />
   </div>
    <button
    onClick={deletePost}
     className='p-2 mt-10 left-15 bottom-2 absolute border rounded-lg flex justify-center items-center bg-blue-600 w-24'
    >Deleted</button>
   </div>
  )
}

export default DeleteBook
