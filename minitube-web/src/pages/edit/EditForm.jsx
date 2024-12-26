import React, { useEffect, useRef, useState } from 'react';
import { deletePost, postNewData, updateNewData } from '../../../api/PostFeching';
import { useNavigate } from 'react-router-dom';

const EditForm = ({ item, videoId }) => {

    const reftitle = useRef();
    const refauthor = useRef();
    const reflink = useRef();
    const refthumbnail = useRef();
    const refduration = useRef();
    const refviews = useRef();
    const refcategory = useRef();
    const refdescription = useRef();
    const refrandomImg = useRef();

    
    // Format the current date for the post
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;

    const[isSuccess,setIsSuccess]=useState("false");
    const navigate=  useNavigate()

    // Initialize state for the new post data
    const [newPost, setNewPost] = useState({
        title: item.title || "",
        author: item.author || "",
        link: item.link || "",
        thumbnail: item.thumbnail || "",
        duration: item.duration || "",
        views: item.views || "",
        category: item.category || "",
        date: formattedDate,
        description: item.description || "",
        randomImg: item.randomImg || "",
    });

    // Post update function
    const postDataUpdateServer = async (newPost) => {
        try {
            // First, delete the old post (if videoId exists)
            if (videoId) {
                await deletePost(videoId); // Assuming `deletePost` handles the API call to delete
            }

            // After deleting, post the new data
            
            const postData = await postNewData(newPost);  // Assuming `postNewData` sends the new data to API
            setIsSuccess("true");
        } catch (error) {
            console.log("Error updating post:", error);
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Set the form data into the state
        setNewPost({
            title: reftitle.current.value,
            author: refauthor.current.value,
            link: reflink.current.value,
            thumbnail: refthumbnail.current.value,
            duration: refduration.current.value,
            views: refviews.current.value,
            category: refcategory.current.value,
            date: formattedDate,
            description: refdescription.current.value,
            randomImg: refrandomImg.current.value,
        });
        console.log(newPost);

        // Clear form inputs
        clearFormInputs();
    };

    // Function to clear form inputs
    const clearFormInputs = () => {
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

    // Condition to check if all required fields are filled
    const condition = newPost.title && newPost.category ;

    // Using useEffect to call the API to update data when the newPost changes
    useEffect(() => {
        if (condition) {
            postDataUpdateServer(newPost);
            navigate("/")
            isSuccess="true";
        }
       
    }, [newPost,isSuccess]);
  
    useEffect(() => {
        if( isSuccess==="true"){
            alert("Edit The Data Is SuccessFully!!!!");
        }
        
        
    }, [isSuccess]);
  



    return (
        <form className='w-full max-w-lg' onSubmit={handleSubmit}>

            {/* title and author */}
            <div className='flex flex-wrap -mx-3 mb-6'>
                {/* title */}
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>VIDEO TITLE</label>
                    <input
                        type="text"
                        name='title'
                        id='title'
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='Video Title'
                        defaultValue={item.title}
                        ref={reftitle}
                    />
                </div>

                {/* author */}
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Author Name</label>
                    <input
                        type="text"
                        name='author'
                        id='author'
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='Author Name'
                        defaultValue={item.author}
                        ref={refauthor}
                    />
                </div>
            </div>

            {/* video link and thumbnail */}
            <div className='flex flex-wrap -mx-3 mb-6'>
                {/* video link */}
                <div className='w-full px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>YOUTUBE Link</label>
                    <input
                        type="url"
                        name='link'
                        id='link'
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='Video url'
                        defaultValue={item.link}
                        ref={reflink}
                    />
                </div>

                {/* thumbnail link */}
                <div className='w-full px-3 mb-6 mt-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>YOUTUBE thumbnail</label>
                    <input
                        type="url"
                        name='thumbnail'
                        id='thumbnail'
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='Thumbnail'
                        defaultValue={item.thumbnail}
                        ref={refthumbnail}
                    />
                </div>

                {/* random image */}
                <div className='w-full px-3 mb-6 mt-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Your Photo</label>
                    <input
                        type="url"
                        name='Photo'
                        id='Photo'
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='Your Photo'
                        defaultValue={item.randomImg}
                        ref={refrandomImg}
                    />
                </div>
            </div>

            {/* duration and views category */}
            <div className='flex flex-wrap -mx-3 mb-6'>
                {/* duration */}
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>VIDEO duration</label>
                    <input
                        type="text"
                        name='duration'
                        id='duration'
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='1:23:46 hr'
                        defaultValue={item.duration}
                        ref={refduration}
                    />
                </div>

                {/* views */}
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>video no of views</label>
                    <input
                        type="text"
                        name='views'
                        id='views'
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='12k views'
                        defaultValue={item.views}
                        ref={refviews}
                    />
                </div>

                {/* category */}
                <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>video category</label>
                    <div className='relative'>
                        <select
                            name="category"
                            id="category"
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                            defaultValue={item.category}
                            ref={refcategory}
                        >
                            <option value="">Choose Category</option>
                            <option value="react">React Js</option>
                            <option value="mern">Mern Stack</option>
                            <option value="nodejs">Node Js</option>
                            <option value="tailwind">TailWind CSS</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* description */}
            <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Video description</label>
                    <textarea
                        name="description"
                        id="description"
                        rows="4"
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none'
                        placeholder='Video Description'
                        defaultValue={item.description}
                        ref={refdescription}
                    ></textarea>
                </div>
            </div>

            {/* submit button */}
            <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button className='inline-flex justify-between py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none'>
                    Edit Button
                </button>
            </div>
        </form>
    );
};

export default EditForm;
