import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function LeftSection({ videoITem, image,ind }) {
  const [likes, setLikes] = useState(false);

  function hadlelikeToggle() {
    setLikes(!likes);
  }
  console.log(image)

  return (
    <div className="text-black/80 self-end flex flex-col mt-5 gap-6">
      <div
        className="likes cursor-pointer flex flex-col items-center justify-center hover:text-gray-400"
        onClick={hadlelikeToggle}
      >
        <span>
          {likes ? (
            <AiFillHeart size={"28px"} color="red" />
          ) : (
            <AiOutlineHeart size={"28px"} />
          )}
        </span>
        <span>{likes ? videoITem.likes + 1 : videoITem.likes}</span>
      </div>
      <div className="comment cursor-pointer flex flex-col items-center justify-center hover:text-gray-400">
        <span>
          <svg
            aria-label="Comment"
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="25"
            role="img"
            viewBox="0 0 24 24"
            width="25"
          >
            <title>Comment</title>
            <path
              d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </span>
        <span>{videoITem.messages}</span>
      </div>
      <div className="send cursor-pointer flex flex-col items-center justify-center hover:text-gray-400">
        <span>
          <svg
            aria-label="Share Post"
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="25"
            role="img"
            viewBox="0 0 24 24"
            width="25"
          >
            <title>Share Post</title>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="22"
              x2="9.218"
              y1="3"
              y2="10.083"
            ></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
        </span>
        <span>{videoITem.shares}</span>
      </div>
      <div className="save cursor-pointer flex flex-col items-center justify-center hover:text-gray-400">
        <span>
          <svg
            aria-label="Save"
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="25"
            role="img"
            viewBox="0 0 24 24"
            width="25"
          >
            <title>Save</title>
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
        </span>
      </div>
      <div className="icon cursor-pointer flex items-center justify-center">
        <svg
          aria-label="More Options"
          className="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="25"
          role="img"
          viewBox="0 0 24 24"
          width="25"
        >
          <title>More Options</title>
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </div>
      <div className="w-[30px] h-[30px] ml-1">
        <img src={image[ind] ? image[ind].imageSrc : '' } alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default LeftSection;
