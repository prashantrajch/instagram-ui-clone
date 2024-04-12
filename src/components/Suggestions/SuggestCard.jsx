import React from 'react'
import Avatar from "@mui/material/Avatar";

function SuggestCard({item}) {
    const{name,detail,imageSrc} = item;
  return (
    <div className="suggest-card">
    <div className="py-2 px-4 flex items-center gap-3">
      <div className="profile-img">
        <Avatar alt="" src={imageSrc} sx={{width: '40px',height: '40px'}} />
      </div>
      <div className="profile-details flex-1">
        <p className="font-semibold text-sm leading-none">{name}</p>
        <span className="text-gray-400 text-xs line-clamp-1">{detail}</span>
      </div>
      <div className="follow text-xs font-bold text-cyan-500 cursor-pointer hover:text-cyan-800">
        <span>Follow</span>
      </div>
    </div>
  </div>
  )
}

export default SuggestCard
