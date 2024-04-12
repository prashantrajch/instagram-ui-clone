import React from "react";
import Suggestions from "../../components/Suggestions/Suggestions";
import MainPost from "../../components/MainPost/MainPost";


function home() {
  return (
    <div className="flex justify-center gap-6 lg:gap-12 md:w-[75%] w-[99%] mx-auto">
      <MainPost />
      <Suggestions />
    </div>
  );
}

export default home;
