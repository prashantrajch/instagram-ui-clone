import React, { useContext} from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import InstagramContext from "../../context/ContextCreate";



function PostCard({item}) {
  const {id,userName,profilePhoto,likes,comment,postPhoto,postHour,caption} = item
  const { handlePostMenuClick } = useContext(InstagramContext);

  return (
    <div className="post-card self-center max-w-[470px] pb-4 mb-5 border-b flex flex-col gap-3 select-none">
      <div className="post-card-header flex items-center justify-between">
        <div className="post-profile flex items-center gap-3">
          <div className="profile-img w-[30px] h-[30px]">
            <img
              src={profilePhoto}
              alt="backbencher"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="profile-details text-sm">
            <span className="font-semibold">{userName}</span>
            <span className="text-gray-400">{postHour}</span>{" "}
          </div>
        </div>
        <div className="icon cursor-pointer" onClick={handlePostMenuClick}>
          <span>
            <svg
              aria-label="More Options"
              className="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>More Options</title>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </span>
        </div>
      </div>
      <div className="post-image max-w-[468px] max-h-[100vh] overflow-hidden">
        <img
          src={postPhoto}
          alt=""
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
      <div className="post-footer flex gap-2 flex-col">
        <div className="icons-section flex justify-between items-center">
          <div className="left flex gap-4">
            <div className="likes cursor-pointer hover:text-gray-400">
              <svg
                aria-label="Like"
                className="x1lliihq x1n2onr6 xyb1xck"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Like</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
            </div>
            <div className="comment cursor-pointer hover:text-gray-400">
              <svg
                aria-label="Comment"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
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
            </div>
            <div className="send cursor-pointer hover:text-gray-400">
              <svg
                aria-label="Share Post"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
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
            </div>
          </div>
          <div className="right">
            <div className="save cursor-pointer hover:text-gray-400">
              <svg
                aria-label="Save"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
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
            </div>
          </div>
        </div>
        <p className="font-semibold text-sm cursor-pointer">{likes} likes</p>
        <div className="text-sm flex items-center leading-none">
          <span className="font-semibold cursor-pointer">{userName}</span>
          <span className="ml-2 w-[60%] line-clamp-1">
            {caption}
          </span>
          <span className="cursor-pointer">more</span>
        </div>
        <span className="text-xs font-semibold cursor-pointer">
          See Translation
        </span>
        <p className="text-sm text-gray-500 cursor-pointer">
          View all {comment} comments
        </p>
        <div className="text-sm flex items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full outline-none"
          />
          <span className=" cursor-pointer hover:text-gray-400">
            <HiOutlineEmojiHappy color="gray" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
