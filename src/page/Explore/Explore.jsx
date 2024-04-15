import React from "react";
import ExploreCard from "../../components/Explore Card/ExploreCard";

function Explore() {
  return (
    <div className="flex  w-full">
      <div className="flex max-md:flex-col max-md:gap-2 justify-center max-sm:items-center w-full">
        <div className="flex w-[85%] gap-2 mt-6">
          <div className="img flex flex-col gap-2 w-1/3 ">
            <ExploreCard num={1} />
            <ExploreCard num={2} />
            <ExploreCard num={3} />
          </div>
          <div className="img w-1/3 flex flex-col gap-2 max-h-[250px]">
            <ExploreCard num={4} />
            <ExploreCard num={6} />
            <ExploreCard num={7} />
          </div>
          <div className="img w-1/3 flex flex-col gap-2 max-h-[250px]">
            <ExploreCard num={5} />
            <ExploreCard num={8} />
            <ExploreCard num={9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
