import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton'
const Home = () => {
  const[data,setData]= useState();
  useEffect(() => {
    return () => {
      second
    }
  }, [])
  
  
  const[loading,setLoading]=useState(false);
  return (
    <div className='w-full flex flex-col '>
      <div className='p-4' >
        <h1 className='p-4 bg-red-500 flex justify-center rounded-lg font-bold text-white items-center '>Book Items</h1>
      </div>
      <div className='p-4 w-full flexf flex-row justify-center items-center '>
         <table className='w-full text-center border border-black'>
          <thead className='w-full text-center border border-black'>
            <tr className=' w-full'>
            <th  className='border w-[20%] border-brown'>no</th>
            <th className='border w-[20%] border-black'>author</th>
            <th className='border w-[20%] border-black'>title</th>
            <th className='border w-[20%] border-black'>publish Year</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
         </table>
      </div>
    </div>
  )
}

export default Home
