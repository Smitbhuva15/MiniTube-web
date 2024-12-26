import React from 'react'

const Player = ({data}) => {
  return (
   
    <iframe 
    width="100%"
    src={data.link }
    frameBorder=""
    className='aspect-video'
    title='video-title'
    allow='accelerometer; autoplay; clipboard-write;
    encryped-media; picture-in -picture '
    allowFullScreen
    >


    </iframe>
  )
}

export default Player