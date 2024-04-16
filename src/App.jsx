import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Explore from "./page/Explore/Explore";
import Message from "./page/Message/Message";
import Profile from "./page/Profile/Profile";
import Reels from "./page/Reels/Reels";
import Navbar from "./components/Navbar/Navbar";
import MobileNav from "./components/MobileNavbar/MobileNav";

function App() {
  return (
    <div className="flex">
      <div>
        <div className="xl:w-[240px] md:w-[76px] max-md:hidden border-r-2">
          <Navbar />
        </div>
        <div className="max-md:block hidden">
          <MobileNav />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/message" element={<Message />} />
        <Route path="/prashant_raj_ch" element={<Profile />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </div>
  );
}

export default App;
