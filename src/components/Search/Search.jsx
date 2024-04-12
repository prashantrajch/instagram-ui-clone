import React from "react";

function Search() {
  return (
    <div>
      <header>
        <h3 className=" mt-2 pt-3 pr-[14px] pb-9 pl-6 text-2xl font-semibold">Search</h3>
      </header>
      <form action="" className="w-full mx-4">
        <div className=" mb-6 w-full">
        <input type="text" placeholder="Search" name="search" className="w-[90%] py-2 px-4 outline-none bg-gray-200 rounded-md" />
        </div>
      </form>
      <hr className="" />
      <div>
        <h3 className="text-lg font-medium pt-1 mx-6 mt-[6px]">Recent</h3>
      </div>
    </div>
  );
}

export default Search;
