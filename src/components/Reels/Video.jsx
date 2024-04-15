import React from 'react'

function Video({item}) {

    const {url} = item
    
  return (
    <div className='video'>
        <video className='player h-full' src={url}>
        </video>
    </div>
  )
}

export default Video
