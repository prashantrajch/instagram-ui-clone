import React from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill, GoHome } from "react-icons/go";
import { FaRegCompass, FaCompass } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import Avatar from "@mui/material/Avatar";

function MobileNav() {
  return (
    <nav className="fixed bottom-0 z-10 w-full border-t border-slate-200 bg-white">
      <ul className="flex justify-evenly">
        <NavLink to={"/"} title="Home">
          {({ isActive }) =>
            isActive ? (
              <div className=" p-3">
                <GoHomeFill size={"25px"} className=" hover:scale-110" />
              </div>
            ) : (
              <div className=" p-3">
                <GoHome size={"25px"} className=" hover:scale-110" />
              </div>
            )
          }
        </NavLink>
        <NavLink to={"/explore"} title="Explore">
          {({ isActive }) =>
            isActive ? (
              <div className="p-3">
                <FaCompass size={"25px"} className=" hover:scale-110" />
              </div>
            ) : (
              <div className="p-3">
                <FaRegCompass size={"25px"} className=" hover:scale-110" />
              </div>
            )
          }
        </NavLink>
        <NavLink to={"/reels"} title="Reels">
          {({ isActive }) =>
            isActive ? (
              <div className="p-3">
                <MdSlowMotionVideo
                  size={"25px"}
                  fill="white"
                  className="bg-black rounded-full hover:scale-110"
                />
              </div>
            ) : (
              <div className="p-3">
                <MdSlowMotionVideo size={"25px"} className=" hover:scale-110" />
              </div>
            )
          }
        </NavLink>
        <NavLink to={"?"} title="New Post">
          <div className="p-3">
            <CgAddR size={"25px"} className=" hover:scale-110" />
          </div>
        </NavLink>
        <NavLink to={"/message"} title="Messagenger">
          {({ isActive }) =>
            isActive ? (
              <div className="p-3">
                <FaFacebookMessenger
                  size={"25px"}
                  className=" hover:scale-110"
                />
              </div>
            ) : (
              <div className="p-3">
                <RiMessengerLine size={"25px"} className=" hover:scale-110" />
              </div>
            )
          }
        </NavLink>
        <NavLink to={"/profile"} title="Profile">
          {({ isActive }) =>
            isActive ? (
              <div className="p-3">
                <Avatar sx={{ width: "25px", height: "25px" }} />
              </div>
            ) : (
              <div className="p-3">
                <Avatar sx={{ width: "25px", height: "25px" }} />
              </div>
            )
          }
        </NavLink>
      </ul>
    </nav>
  );
}

export default MobileNav;
