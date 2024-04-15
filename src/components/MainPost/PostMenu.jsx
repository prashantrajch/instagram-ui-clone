import React, { useContext } from 'react'
import InstagramContext from '../../context/ContextCreate'

function PostMenu() {

    const {handlePostMenuClick} = useContext(InstagramContext);

  return (
    <div className='fixed top-0 z-20 left-0 right-0 bg-black/50 h-full flex items-center justify-center'>
        <div className="menu-card max-w-[400px] bg-white rounded-lg shadow-lg w-full">
            <div className="menu-btns flex flex-col w-full">
                <button className='text-sm px-2 py-1 h-[48px] text-[red] font-bold'>Report</button>
                <button className='text-sm border-t px-2 py-1 min-h-[48px] text-[red] font-bold'>Unfollow</button>
                <button className='text-sm border-t px-2 py-1 min-h-[48px]'>Add to favourites</button>
                <button className='text-sm border-t px-2 py-1 min-h-[48px]'>Go to post</button>
                <button className='text-sm border-t px-2 py-1 min-h-[48px]'>Share to</button>
                <button className='text-sm border-t px-2 py-1 min-h-[48px]'>Copy link</button>
                <button className='text-sm border-t px-2 py-1 min-h-[48px]'>Embed</button>
                <button className='text-sm border-t px-2 py-1 min-h-[48px]'>About this account</button>
                <button className='text-sm border-t px-2 py-1 min-h-[48px]' onClick={handlePostMenuClick}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default PostMenu
