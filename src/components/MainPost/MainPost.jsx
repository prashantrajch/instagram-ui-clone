import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stories from "./Stories";
import Carousel from "@itseasy21/react-elastic-carousel";
import PostCard from "./PostCard";
import PostMenu from "./PostMenu";
import InstagramContext from "../../context/ContextCreate";
import PostsData from "../../API Data/PostData";


function MainPost() {
  const { handlePostMenuClick, postMenuActive } = useContext(InstagramContext);

  let storiesData = [
    {
      imageSrc: "https://picsum.photos/400/?random=1",
      userName: "prashantrajchasdfjk",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=2",
      userName: "kavay_jads",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=3",
      userName: "subharm",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=4",
      userName: "kajdfasdf",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=5",
      userName: "ajhdfdsa",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=6",
      userName: "jhadsf",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=7",
      userName: "jahdfj",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=8",
      userName: "hpoijlk",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=1",
      userName: "hpoijlk",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=8",
      userName: "hpoijlk",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=1",
      userName: "hpoijlk",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=3",
      userName: "hpoijlk",
    },
    {
      imageSrc: "https://picsum.photos/400/?random=4",
      userName: "hpoijlk",
    },
  ];
  
  const breakPoints = [
    {
      width: 400,
      itemsToShow: 4,
      itemsToScroll: 4,
    },
    {
      width: 430,
      itemsToShow: 5,
      itemsToScroll: 5,
    },
    {
      width: 500,
      itemsToShow: 6, 
      itemsToScroll: 5,
    },
    {
      width: 550,
      itemsToShow: 7,
      itemsToScroll: 7,
    },
    {
      width: 850,
      itemsToShow: 8,
      itemsToScroll: 8,
    }
    ,{
      width: 1150,
      itemsToShow: 8,
      itemsToScroll: 8,
    }
    ,{
      width: 1450,
      itemsToScroll: 8,
      itemsToShow: 8,
    }
  ];
  

  return (
    <div className="max-md:self-center mt-4 max-w-[630px] w-full overflow-hidden">
      <div className="stories py-2 max-w-[630px] w-full">
        <Carousel 
          breakPoints={breakPoints}
          className="slider-stories relative"
        >
          {storiesData.map((item, id) => (
            <Stories key={id} item={item} />
          ))}
        </Carousel>
      </div>
      <div className="posts flex  flex-col w-full justify-center">
        {PostsData.map((item) => (
          <PostCard key={item.id} item={item} />
        ))}
      </div>
      {postMenuActive && <PostMenu />}
    </div>
  );
}

export default MainPost;
