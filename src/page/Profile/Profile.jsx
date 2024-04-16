import React from "react";
import { RiLinkM } from "react-icons/ri";
import Carousel from "@itseasy21/react-elastic-carousel";
import Stories from "../../components/MainPost/Stories";
import { IoMdGrid } from "react-icons/io";

function Profile() {
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
      itemsToShow: 5,
      itemsToScroll: 5,
    },
    {
      width: 550,
      itemsToShow: 6,
      itemsToScroll: 6,
    },
    {
      width: 850,
      itemsToShow: 7,
      itemsToScroll: 7,
    },
    {
      width: 1150,
      itemsToShow: 7,
      itemsToScroll: 7,
    },
    {
      width: 1450,
      itemsToScroll: 7,
      itemsToShow: 7,
    },
  ];

  return (
    <div className="flex w-full">
      <div className="mx-auto max-w-[935px] w-full pt-[30px] px-5 mb-[30px]">
        <div className="profile-header flex max-md:flex-wrap md:items-center mb-[30px]">
          <div className="mr-[30px] md:grow basis-0 ">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="md:w-[150px] md:h-[150px] w-[70px] h-[70px] mx-auto rounded-full overflow-hidden"
            />
          </div>
          <div className="flex flex-col  gap-[20px] flex-grow-[2] basis-[30px]">
            <header className="flex md:items-center max-md: gap-2 max-md:flex-col">
              <p className="text-xl mr-4">prashant_raj_ch</p>
              <div className="flex gap-3">
                <button className=" px-4 bg-gray-200 rounded-lg h-8 font-semibold text-sm">
                  Edit Profile
                </button>
                <button className="px-4 bg-gray-200 rounded-lg h-8 font-semibold text-sm">
                  View archive
                </button>
              </div>
              <span className="max-md:hidden">
                <svg
                  aria-label="Options"
                  className="x1lliihq x1n2onr6 x5n08af"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Options</title>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
            </header>
            <div className="flex gap-10 max-md:hidden">
              <p>
                {" "}
                <span className="font-semibold">75</span> posts
              </p>
              <p>
                {" "}
                <span className="font-semibold">229</span> followers
              </p>
              <p>
                {" "}
                <span className="font-semibold">172</span> following
              </p>
            </div>
            <div className="text-sm max-md:-ml-[100px] max-md:mt-4">
              <p className="font-semibold">{`<Prash_Nobi /> && <prashant_raj_ch /> `}</p>
              <div className="leading-none gap-1 flex flex-col">
                <span>👉CoDing mY ♥️</span>
                <span>👉Self Taught(Frontend Developer)</span>
                <span>
                  👉UnpLugged MuSic LoVer, My 😍👨‍🎤{" "}
                  <a
                    href="https://www.instagram.com/falakshabir1/"
                    className="text-sky-900"
                  >
                    @falakshabir1
                  </a>
                  ,{" "}
                  <a
                    href="https://www.instagram.com/mitrazmusic/"
                    className="text-sky-900"
                  >
                    @mitrazmusic
                  </a>
                </span>
                <span>👉I ❤ ➡ TrAveLinG nEw CiTy 🌇🚶</span>
              </div>
              <a
                href="https://prashantrajch.github.io/portfolio/"
                target="_blank"
                className="flex items-center text-sky-900"
              >
                <RiLinkM />
                <span className="ml-2 hover:underline font-semibold">
                  prashantrajch.github.io/portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="highligts-stories flex justify-center mb-[35px]">
          <div className="stories py-2 w-full">
            <Carousel
              breakPoints={breakPoints}
              className="slider-stories relative"
            >
              {storiesData.map((item, id) => (
                <Stories
                  key={id}
                  item={item}
                  width="100px"
                  height="80px"
                  customStyleName=""
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="flex justify-center items-center border-t gap-[60px]">
          <div className="border h-[51px] border-l-0 border-r-0 border-b-0 -mt-[1px] borter-t border-t-black  flex items-center justify-center text-xs font-semibold uppercase cursor-pointer">
            <IoMdGrid />
            <span className="ml-2">
            Posts
            </span>
            </div>
          <div className="h-[51px] borter-t -m-[1px] flex items-center justify-center text-xs font-semibold uppercase cursor-pointer">Reels</div>
          <div className="h-[51px] borter-t -m-[1px] flex items-center justify-center text-xs font-semibold uppercase cursor-pointer">Saved</div>
          <div className="h-[51px] borter-t -m-[1px] flex items-center justify-center text-xs font-semibold uppercase cursor-pointer">Tagged</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <img src="https://picsum.photos/400/?random=1" alt="" className="w-[292px] h-[285px]"/>
          <img src="https://picsum.photos/400/?random=2" alt="" className="w-[292px] h-[285px]"/>
          <img src="https://picsum.photos/400/?random=3" alt="" className="w-[292px] h-[285px]"/>
          <img src="https://picsum.photos/400/?random=4" alt="" className="w-[292px] h-[285px]"/>
          <img src="https://picsum.photos/400/?random=5" alt="" className="w-[292px] h-[285px]"/>
          <img src="https://picsum.photos/400/?random=6" alt="" className="w-[292px] h-[285px]"/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
