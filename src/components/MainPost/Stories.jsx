import React from 'react'

function Stories({item,width='60px',height='60px',customStyleName='borderColor'}) {
    const {imageSrc,userName} = item;

  return (
          <div className={`slider max-w-[${width}] text-center`}>
            <div className={`slider-img w-[${width}] h-[${height}] rounded-full inline-block overflow-hidden p-[4px] ${customStyleName}`}>
              <img src={imageSrc} alt="" className="block w-full object-cover rounded-full" />
            </div>
            <div className="slider-name">
              <p className='text-xs line-clamp-1'>{userName}</p>
            </div>
          </div>
  )
}

export default Stories
