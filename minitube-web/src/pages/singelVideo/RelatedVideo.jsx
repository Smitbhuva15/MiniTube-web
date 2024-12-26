import React from 'react'
import { Link } from 'react-router-dom'

const RelatedVideo = ({item}) => {
  return (
    <div className='w-full flex flex-row gap-2 mb-4'>
        <div className='relative w-[186px] h-[94px] flex-none duration-300 hover:scale-[1.03]' >
        <Link to={`/videos/${item.id}`}>
                <img src={item.thumbnail} alt={item.category} className='w-full h-auto' />
              </Link>
              <p className='absolute right-2 bottom-1 bg-gray-900 text-gray-100 text-sm px-1 py-1'>{item.duration} hr</p>
        </div>

          {/* description */}
                    <div className='flex flex-row mt-2 gap-2 '>
                      <img src={item.randomImg} alt="avatar" className='rounded-full h-6 w-6 shrink-0' />
        
                      <div className='flex flex-col '>
                        <Link className={`/videos/${item.id}`}>
                          <p className='text-slate-900 text-sm font-semibold'>{item.title}</p>
                        </Link>
                        <span className='text-gray-500 text-us hover:text-gray-600'>{item.author}</span>
                        <p className='text-gray-500 text-xs'>{item.views} views</p>
                      </div>
                    </div>
    </div>
  )
}

export default RelatedVideo