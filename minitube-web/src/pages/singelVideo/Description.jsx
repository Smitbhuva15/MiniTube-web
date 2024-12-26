import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaEdit, FaTrash } from "react-icons/fa";
import { deletePost } from '../../../api/PostFeching';

const Description = ({ data }) => {
    const { videoId } = useParams();
    // console.log(videoId);
    const navigate = useNavigate();
   const[isSuccess,setIsSuccess]  =useState("false");

    const handelDelete = async () => {
        if (videoId) {
            let deleted = await deletePost(videoId);
            setIsSuccess("true");

        }
    }
 useEffect(() => {
    
   if(isSuccess ==="true"){
    alert("video delete sucessFull....")
   }
 }, [isSuccess]);
    

    return (
        <div>
            <h1 className='text-lg font-semibold tracking-tight text-slate-800'>
                {data.title}
            </h1>

            <div className='pb-4 flex items-center justify-between border-b gap-4'>
                <p className='text-sm leading-[1.72]'>
                    uploaded on {data.date}
                </p>
                <div className='flex gap-6 w-full justify-end'>
                    {/* edit */}

                    <Link to={`/videos/edit/${videoId}`} className='flex gap-1 items-center hover:text-blue-500 '>
                        <div>
                            <FaEdit className='w-4 cursor-pointer' />
                        </div>

                        <div>
                            <span className='text-sm leading-[1.72] text-slate-600 cursor-pointer'>Edit</span>
                        </div>
                    </Link>

                    {/* delete */}

                    <Link to="/">
                        <div className='flex gap-1 items-center hover:text-red-500  ' onClick={handelDelete}>
                            <div >
                                <FaTrash className='w-4 cursor-pointer' />
                            </div>
                            <div>
                                <span className='text-sm leading-[1.72] text-slate-600 cursor-pointer '>Delete</span>
                            </div>
                        </div>

                    </Link>
                </div>


            </div>

            <div className='mt-4 text-sm text-[#334155]'>
                {data.description}
            </div>
        </div>
    )
}

export default Description