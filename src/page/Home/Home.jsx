import React from "react";
import Suggestions from "../../components/Suggestions/Suggestions";
import MainPost from "../../components/MainPost/MainPost";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function home() {
  return (
    <div className="flex  w-full">
      <div className="flex max-md:flex-col max-md:gap-2 justify-center max-sm:items-center w-full">
        <header className="max-md:block sticky bg-white z-40 top-0 hidden w-full">
          <nav className="px-4 h-[60px] items-center flex justify-between">
            <div className="log">
              <h1 className="font-logo text-3xl">Prashugram</h1>
            </div>
            <div className="search max-w-[312px] gap-4 flex items-center">
              <div className="input max-w-[236px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[236px] py-1 px-4 outline-none rounde-md bg-slate-200"
                />
              </div>
              <div className="icon">
                <AiOutlineHeart size={"26px"} />
              </div>
            </div>
          </nav>
        </header>
        <MainPost />
        <Suggestions />
      </div>
    </div>
  );
}

export default home;
