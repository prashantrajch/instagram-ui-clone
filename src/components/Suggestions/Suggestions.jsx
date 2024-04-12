import React from 'react'
import Avatar from "@mui/material/Avatar";
import SuggestCard from './SuggestCard';

function Suggestions() {

    let suggestData = [
        {
            name: 'sidraj103',
            detail: 'Followed by __harshit_kumar__',
            imageSrc: ''
        },
        {
            name: 'shivani.kumari4321',
            detail: 'New to Instagram',
            imageSrc: ''
        },
        {
            name: 'sahebjai7761',
            detail: 'Suggested for you',
            imageSrc: ''
        },
        {
            name: '24_shiro_3',
            detail: 'Followed by __ad1tya.__ +1 mutual jasdfh',
            imageSrc: ''
        },{
            name: 'sahilpatel20105',
            detail: 'Followed by __ad1tyaa.__',
            imageSrc: ''
        }
    ]

  return (
    <div className="xl:w-[319px] max-xl:hidden">
    <div className=" mt-9 flex flex-col">
      <div className="profile-show px-4">
        <div className="profile-card flex gap-4 items-center">
          <div className="profile-avatar">
          <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{width: '40px',height: '40px'}} />
          </div>
          <div className="profile-details flex-1">
            <p className="username font-semibold text-sm leading-none">prashant_raj_ch</p>
            <p className="title leading-5 text-gray-500 text-sm leading-1">{'<Prash_Nobi /> && <prashant_raj_ch />'}</p>
          </div>
          <div className="switch text-xs font-bold text-cyan-500 cursor-pointer hover:text-cyan-800">
            <span>Switch</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <div className="title flex justify-between text-sm font-semibold text-gray-500 py-1 px-4">
        <span className="">Suggested for you</span>
        <span className="text-xs text-gray-600 cursor-pointer hover:text-gray-400">See All</span>
      </div>
      <div className="suggest-body py-2">{
        suggestData.map((item,ind) => <SuggestCard key={ind} item={item}/>)
      }
      </div>
    </div>
  </div>
  )
}

export default Suggestions
