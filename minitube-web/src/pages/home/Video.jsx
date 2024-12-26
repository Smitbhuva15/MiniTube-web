import React from 'react'
import { Link } from 'react-router-dom'


const Video = ({ data }) => {

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 px-5 lg:px-0 min-h-[300px]'>
      {
       data.length>0 
       ?
       (data.map((item, index) => (
          <div key={index}>

            {/* thumbnail */}
            <div className='relative'>
              <Link to={`/videos/${item.id}`}>
                <img src={item.thumbnail} alt="not " className='w-full h-auto' />
              </Link>
              <p className='absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-sm px-1 py-1'>{item.duration} hr</p>

            </div>

            {/* description */}
            <div className='flex flex-row mt-2 gap-2 '>
              <img src={item.randomImg} alt="https://randomuser.me/api/portraits/men/22.jpg" className='rounded-full h-6 w-6 shrink-0' />

              <div className='flex flex-col '>
                <Link className={`/videos/${item.id}`}>
                  <p className='text-slate-900 text-sm font-semibold'>{item.title}</p>
                </Link>
                <span className='text-gray-500 text-us hover:text-gray-600'>{item.author}</span>
                <p className='text-gray-500 text-xs'>{item.views} views . {item.date}</p>
              </div>
            </div>

          </div>

        )) ) 
        :
        (<div></div>)
      }

    </div>
  )
}

export default Video