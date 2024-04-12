import React from "react";
import Avatar from "@mui/material/Avatar";
import Stories from "./Stories";

let storiesData = [
    {
        imageSrc: '',
        userName: 'prashantrajch'
    },
    {
        imageSrc: '',
        userName: 'kavay_jads'
    },
    {
        imageSrc: '',
        userName: 'subharm'
    },
    {
        imageSrc: '',
        userName: 'kajdfasdf'
    },
    {
        imageSrc: '',
        userName: 'ajhdfdsa'
    },
    {
        imageSrc: '',
        userName: 'jhadsf'
    },
    {
        imageSrc: '',
        userName: 'jahdfj'
    },
    {
        imageSrc: '',
        userName: 'hpoijlk'
    },
    {
        imageSrc: '',
        userName: 'hpoijlk'
    },
    {
        imageSrc: '',
        userName: 'hpoijlk'
    },
]

function MainPost() {
  return (
    <div className="h-[1000px] xl:flex-1 lg:w-[82%] w-[98%] mx-auto mt-4 overflow-hidden">
      <div className="stories py-2">
        <div className="slider-stories overflow-x-auto flex lg:gap-7 md:gap-4 gap-4 scrollBar">
            {
                storiesData.map((item) => <Stories item={item}/>)
            }
        </div>
      </div>
    </div>
  );
}

export default MainPost;
