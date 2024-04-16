import React, { useRef } from "react";

function Video({ item, ind }) {
  const { url, song, channel, description } = item;
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video relative snap-start sm:w-[52vh] w-[48vh] rounded-md overflow-hidden">
      <video className="player" loop ref={videoRef} src={url} onClick={onVideoPress}></video>
      <footer className="absolute bottom-4 px-3 text-white">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <img
              src={`https://picsum.photos/200/300?random=${ind}`}
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <h3>{channel} .</h3>
            <button className="px-2 font-bold rounded-sm border">Follow</button>
          </div>
          <p>{description}</p>
          <div className="ticker w-[200px] md:w-[180px] ">
            <marquee direction="left" scrollamout="2">
              {song}
            </marquee>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Video;
