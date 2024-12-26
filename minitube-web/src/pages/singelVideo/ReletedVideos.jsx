import React from 'react'
import RelatedVideo from './RelatedVideo'

const ReletedVideos = ({data}) => {
  return (
    <div className='col-span-full lg:col-auto max-h=[570px] overflow-y-auto'>
      {
        data.map((item ,index)=>(
          <RelatedVideo item={item} key={index}/>
        ))
      }
        
    </div>
  )
}

export default ReletedVideos