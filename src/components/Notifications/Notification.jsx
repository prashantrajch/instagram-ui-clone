import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function Notification() {
  return (
    <div>
      <h2 className=" p-6 pt-4 text-2xl font-bold">
        <span className="leading-none">
             Notifications
        </span>
        </h2>
      <div className="-mt-5">
        <p className="px-6 text-md font-bold mt-2 pb-2">Today</p>
        <div className="notification-detail flex items-center gap-6 w-full px-6 py-2">
          <div className="avatar -mt-3">
            <AvatarGroup sx={{position:'relative'}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width: '30px',height: '30px'}}  />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{width: '30px',height: '30px',position:'absolute', top: '12px',left:'18px',zIndex: '1'}}/>
            </AvatarGroup>
          </div>
          <p className="notification-text-user text-sm leading-none">
            <span className="font-medium">___amit_raj___ </span>,
            <span className="font-medium">rajaBoss82277</span>
            <span> and 37 others liked your photo. 4h</span>
          </p>
          <div className="notification-image">
            <img src="" alt="" width={'100%'} height={'100%'} className=" h-[50px] align-middle w-[50px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
