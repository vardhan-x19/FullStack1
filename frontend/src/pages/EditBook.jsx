import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../Components/BackButton';
import { IoChevronBackCircle } from "react-icons/io5";
const EditBook = () => {
  const navigate=useNavigate();
  const location = useLocation(); 
  const {item} = location.state;
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  useEffect(() => {
    setAuthor(item.author)
    setTitle(item.title)
    setYear(item.publishYear)
    // console.log('useEfeect',item)
  }, [])
  const editOPtion=()=>{
    const data={
      _id: item._id, 
      author:author,
      title:title,
      publishYear:year
    }
    console.log('data in frontend',data)
    axios.post(`http://localhost:5555/updateById`,data).then((result)=>{
      // console.log(result)
      navigate('/');
    }).catch((err)=>{
      console.log(err);
      navigate('/err')
    })
  }
  return (
    <div className='w-[60%] relative mt-8 ml-10 h-full border p-16 mb-8  flex flex-col gap-5'>
     <Link to={'/'} className='absolute left-5 top-5'><IoChevronBackCircle /></Link>
      <div>
      <label className='font-bold mr-3' for="author">Author:</label>
      <input className='border' name='author' type="text" contentEditable={true} value={author}
      onChange={(e)=>{
          setAuthor(e.target.value);
          // console.log(e.target.value)
      }}
       />
      </div>
     <div>
     <label className='font-bold mr-3' for="title">Title:</label>
      <input className='border' name='title' type="text" contentEditable={true} value={title}
      onChange={(e)=>{
          setTitle(e.target.value);
          // console.log(e.target.value)
      }}
       />
     </div>
    <div>
    <label className='font-bold mr-3 mb-8' for="publishedYear">Year:</label>
      <input className='border' name='publishedYear' type="text" contentEditable={true} value={year}
      onChange={(e)=>{
          setYear(e.target.value);
          // console.log(e.target.value)
      }}
       />
    </div>
     <button
     onClick={editOPtion}
      className='p-2 mt-10 left-15 bottom-2 absolute border rounded-lg flex justify-center items-center bg-blue-600 w-24'
     >save</button>
    </div>
  )
}

export default EditBook
