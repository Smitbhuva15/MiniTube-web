import React, { useEffect, useState } from 'react'
// import { useForm } from "react-hook-form";
import { useRef } from 'react';
import { postNewData } from '../../../api/PostFeching';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const navigate=  useNavigate()

    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
  
    const [newPost, setNewPost] = useState({
      title: "",
      author: "",
      link: "",
      thumbnail: "",
      duration: "",
      views: "",
      category: "",
      date: formattedDate,
      description: "",
      randomImg: "",
    });
  
    const reftitle = useRef();
    const refauthor = useRef();
    const reflink = useRef();
    const refthumbnail = useRef();
    const refduration = useRef();
    const refviews = useRef();
    const refcategory = useRef();
    const refdescription = useRef();
    const refrandomImg = useRef();
  
    const postDataAddServer = async (newPost) => {
      try {
        // Assuming postNewData is defined elsewhere to handle the API call
        const addedData = await postNewData(newPost);
        // console.log("Data added:", addedData);
      } catch (error) {
        console.log("Error:", error);
      }
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Access the current values of the refs inside the handler
      const inputtitle = reftitle.current.value;
      const inputauthor = refauthor.current.value;
      const inputlink = reflink.current.value;
      const inputthumbnail = refthumbnail.current.value;
      const inputduration = refduration.current.value;
      const inputviews = refviews.current.value;
      const inputcategory = refcategory.current.value;
      const inputdescription = refdescription.current.value;
      const inputrandomImg = refrandomImg.current.value;
  
      // Update the state with the new post data
      setNewPost({
        title: inputtitle,
        author: inputauthor,
        link: inputlink,
        duration: inputduration,
        views: inputviews,
        thumbnail: inputthumbnail,
        category: inputcategory,
        date: formattedDate, // use the current date formatted
        description: inputdescription,
        randomImg: inputrandomImg,
      });

    //   console.log(newPost);
  
      // Clear the form fields
      reftitle.current.value = "";
      refauthor.current.value = "";
      reflink.current.value = "";
      refthumbnail.current.value = "";
      refduration.current.value = "";
      refviews.current.value = "";
      refcategory.current.value = "";
      refdescription.current.value = "";
      refrandomImg.current.value = "";
    };

    let condition=newPost.title && newPost.link && newPost.author && newPost.duration  && newPost.views  && newPost.thumbnail  && newPost.category && newPost.date && newPost.description && newPost.randomImg
  
    // Trigger postDataAddServer when newPost is updated
    useEffect(() => {
      if ( condition ) { // Only call the API if title exists to avoid empty posts
        postDataAddServer(newPost);
        navigate("/");

      }
    }, [newPost]); 

   
    
    // console.log(formattedDate); 



     
     

    return (
        <form className='w-full max-w-lg' onSubmit={handleSubmit}>

            {/* title and author */}
            <div className='flex flex-wrap -mx-3 mb-6'>

                {/* title */}
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>VIDEO TITLE</label>
                    <input type="text" name='title' id='title' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder='Video Title' 
                    ref={reftitle} />
                </div>

                {/* author */}
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Author Name</label>
                    <input type="text" name='title' id='title' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder='Author Name' 
                    ref={refauthor}/>
                </div>
            </div>

            {/* video link and thumbnail */}
            <div className='flex flex-wrap -mx-3 mb-6'>

                {/* video link*/}
                <div className='w-full  px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>YOUTUBE Link</label>
                    <input type="url" name='link' id='link' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder='Video url' 
                    ref={reflink}/>
                </div>

                {/* thumbnail link*/}
                <div className='w-full px-3 mb-6 mt-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>YOUTUBE thumbnail</label>
                    <input type="url" name='thumbnail' id='thumbnail' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder='Thumbnail' 
                    ref={refthumbnail}/>
                </div>
                    
                    {/* randomimg */}
                <div className='w-full px-3 mb-6 mt-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Your Photo</label>
                    <input type="url" name='Photo' id='Photo' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder='Your Photo' 
                    ref={refrandomImg}/>
                </div>nodejs


            </div>


            {/* duration and viwes category */}
            <div className='flex flex-wrap -mx-3 mb-6'>

                {/* duration */}
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>VIDEO duration</label>
                    <input type="text" name='duration' id='duration' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder='1:23:46 hr' 
                    ref={refduration}/>
                </div>

                {/* views */}
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>video no of views</label>
                    <input type="text" name='views' id='views' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder='12k views' 
                    ref={refviews}/>
                </div>
                {/* category */}
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>video category</label>
                    <div className='relative '>
                        <select name="category" id="category" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
                        ref={refcategory}>
                            <option value="">Choose Category</option>
                            <option value="react">React Js</option>
                            <option value="mern">Mern Stack</option>
                            <option value="nodejs">Node Js</option>
                            <option value="tailwind">TailWind CSS</option>


                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-0.5 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>

                </div>

            </div>

            {/* description */}
            <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full  px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Video description</label>
                    <textarea name="description" id="description" rows="4"
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none' placeholder='Video Description'
                        ref={ refdescription}></textarea>

                </div>


            </div>


            {/* button? */}
            <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button className='inline-flex justify-between py-2 px-6 border border-transparent  shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800  focus:outline-none'>Add Button</button>
            </div>


        </form>
    )
}
{/* <select name="category" id="category"  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>
                            <option value="">Choose Category</option>

                        </select> */}
export default Form