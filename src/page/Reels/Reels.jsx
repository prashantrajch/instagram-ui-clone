import React, { useEffect, useState } from "react";
import Video from "../../components/Reels/Video";
import LeftSection from "../../components/Reels/LeftSection";
const API_URL =
  "https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json";

function Reels() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  let albumImage = [
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1682125554685-2e52be3112db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1674875072587-e1caa5f934a8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex w-full">
      <div className="flex max-md:flex-col max-md:gap-2 justify-center items-center w-full overflow-hidden">
        <div className="reels-video-card ">
          <div className="h-[91vh] w-[58vh] overflow-y-scroll snap-mandatory snap-y scrollBar">
            {videos &&
              videos.map((videoITem, ind) => (
                <div key={ind} className="video-card mb-2 flex gap-2">
                  <Video ind={ind} item={videoITem} />
                  <LeftSection videoITem={videoITem} ind={ind} image={albumImage} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reels;
