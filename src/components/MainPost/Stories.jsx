import React from 'react'

function Stories({item}) {
    const {imageSrc,userName} = item;

  return (
          <div className="slider max-w-[60px] text-center">
            <div className="slider-img w-[60px] h-[60px] rounded-full inline-block overflow-hidden p-[4px]  borderColor">
              <img src={imageSrc} alt="" className="block w-full h-full object-cover rounded-full" />
            </div>
            <div className="slider-name">
              <p className='text-xs line-clamp-1'>{userName}</p>
            </div>
          </div>
  )
}

export default Stories
