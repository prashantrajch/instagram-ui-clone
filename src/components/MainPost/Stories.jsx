import React from 'react'

function Stories({item}) {
    const {imageSrc,userName} = item;

  return (
          <div className="slider max-w-[56px]">
            <div className="slider-img w-[56px] h-[56px] rounded-full inline-block overflow-hidden p-4 borderColor">
              <img src={imageSrc} alt="" className="block w-full h-full object-cover clip-path:circle(42%)" />
            </div>
            <div className="slider-name">
              <p className=' text-xs text-ellipsis line-clamp-1'>{userName}</p>
            </div>
          </div>
  )
}

export default Stories
