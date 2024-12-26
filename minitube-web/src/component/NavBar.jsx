import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcHome } from "react-icons/fc";

const NavBar = () => {
  const navigate=useNavigate();
  const handelRefresh=(e)=>{
    // e.preventDefault();
    navigate(0); 
  }
  return (
    <nav className='bg-slate-100 shadow-md'>
        <div className='max-w-7xl mx-auto px-5 lg:px-0 flex justify-between items-center py-3'>
            <Link to="/"><img src="logo.png" alt="" className='w-24' /></Link>
            {/* <img src="logo.png" alt="" className='w-24' onClick={abc} /> */}
            <div className='flex '>
              
            <FcHome className='h-10 w-12 mr-6' onClick={handelRefresh}/>
            
            <Link to="/videos/add" className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-0'>+ Add Video</Link>
            </div>
        </div>

    </nav>
  )
}

export default NavBar