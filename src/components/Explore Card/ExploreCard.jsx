import React from "react";

function ExploreCard({num}) {
  return (
    <img src={`https://picsum.photos/500//900?random=${num}`} alt="" className="w-full lg:max-h-[300px] object-cover" />
  );
}

export default ExploreCard;
