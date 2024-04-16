import React from "react";

function MessageProfileCard({ind,item}) {
    const {userName,message,isRead,hour} = item
  return (
    <div className="profile-card px-6 py-2 flex gap-4 items-center cursor-pointer">
      <img
        src={`https://picsum.photos/500/?random=${ind}`}
        alt=""
        className="w-[60px] h-[60px] rounded-full "
      />
      <div className="user-details">
        <p className="text-md font-semibold">{userName}</p>
        <p className={`message text-sm font-semibold ${isRead && 'text-gray-400'} `}>
          {message} {' '} <span>. {hour}</span>
        </p>
      </div>
    </div>
  );
}

export default MessageProfileCard;
