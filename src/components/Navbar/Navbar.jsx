import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoHomeFill, GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaRegCompass, FaCompass } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { HiMenuAlt2 } from "react-icons/hi";
import Avatar from "@mui/material/Avatar";
import Search from "../Search/Search";
import Notification from "../Notifications/Notification";
import Create from "../Create/Create";

function Navbar() {
  const [linkActive, setLinkActive] = useState(false);
  const [component, setComponent] = useState({
    search: false,
    notification: false,
    create: false,
  });
  const [activeIcon, setActiveIcon] = useState(false);
  const [customWidth, setCustomWidth] = useState(false);

  function handleNavLinkCliced(ev) {
    linkActive && (ev.isActive = false);
  }

  function handleCustomNavLinkClicked(value) {
    setCustomWidth(!customWidth);
    if (value == "search") {
      setActiveIcon(false);
      setComponent({
        create: false,
        search: true,
        notification: false,
      });
      setLinkActive(!linkActive);
    }
    if (value == "notifications") {
      setActiveIcon(!activeIcon);
      setComponent({
        create: false,
        search: false,
        notification: true,
      });
      setLinkActive(!linkActive);
    }
    if (value == "create") {
      setComponent({
        create: true,
        search: false,
        notification: false,
      });
      setActiveIcon(false);
      setLinkActive(false);
    }
  }

  function handleToggleActive(ev, name) {
    setLinkActive(false);
    setCustomWidth(false);
    if (name) {
    }
  }

  return (
    <nav className="h-screen bg-white relative w-full">
      <div
        className={`bigMenu pt-2 pb-5 px-3 fixed z-20 flex-col ${
          customWidth ? "xl:w-[76px]" : " xl:w-[238px]"
        } flex h-full bg-white overflow-hidden`}
      >
        <div className="xl:block hidden">
          <div
            className={
              linkActive
                ? "pt-[14px] mb-[19px]"
                : "pt-[25px] px-3 pb-4 mb-[19px]"
            }
          >
            <Link to={"/"}>
              {linkActive ? (
                <div
                  className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4"
                  style={linkActive && { display: "inline-block" }}
                >
                  <FaInstagram
                    size={"25px"}
                    className="group-hover:scale-110"
                  />
                </div>
              ) : (
                <div>
                  <h1 className="font-logo text-3xl">Prashugram</h1>
                </div>
              )}
            </Link>
          </div>
        </div>
        <div className={"xl:hidden pt-[14px] mb-[19px]"}>
          <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
            <FaInstagram size={"25px"} className="group-hover:scale-110" />
          </div>
        </div>
        <ul className="">
          <li>
            <NavLink
              to={"/"}
              title="Home"
              className={handleNavLinkCliced}
              onClick={handleToggleActive}
            >
              {({ isActive }) =>
                isActive ? (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <GoHomeFill
                      size={"25px"}
                      className=" group-hover:scale-110"
                    />
                    {!linkActive && <p className="xl:block hidden">Home</p>}
                  </div>
                ) : (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <GoHome size={"25px"} className=" group-hover:scale-110" />
                    {!linkActive && <p className="xl:block hidden">Home</p>}
                  </div>
                )
              }
            </NavLink>
          </li>
          <li>
            <Link>
              <div
                className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4"
                onClick={() => handleCustomNavLinkClicked("search")}
              >
                <FiSearch size={"25px"} className=" group-hover:scale-110" />
                {!linkActive && <p className="xl:block hidden">Search</p>}
              </div>
            </Link>
          </li>
          <li>
            <NavLink
              to={"/explore"}
              className={handleNavLinkCliced}
              onClick={handleToggleActive}
            >
              {({ isActive }) =>
                isActive ? (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <FaCompass
                      size={"25px"}
                      className=" group-hover:scale-110"
                    />
                    {!linkActive && <p className="xl:block hidden">Explore</p>}
                  </div>
                ) : (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <FaRegCompass
                      size={"25px"}
                      className=" group-hover:scale-110"
                    />
                    {!linkActive && <p className="xl:block hidden">Explore</p>}
                  </div>
                )
              }
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/reels"}
              className={handleNavLinkCliced}
              onClick={handleToggleActive}
            >
              {({ isActive }) =>
                isActive ? (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <MdSlowMotionVideo
                      size={"25px"}
                      fill="white"
                      className=" bg-black rounded-full group-hover:scale-110"
                    />
                    {!linkActive && <p className="xl:block hidden">Reels</p>}
                  </div>
                ) : (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <MdSlowMotionVideo
                      size={"25px"}
                      className="group-hover:scale-110"
                    />
                    {!linkActive && <p className="xl:block hidden">Reels</p>}
                  </div>
                )
              }
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/message"}
              className={handleNavLinkCliced}
              onClick={() => handleToggleActive("", "message")}
              id="message"
            >
              {({ isActive }) =>
                isActive ? (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <FaFacebookMessenger
                      size={"25px"}
                      className="group-hover:scale-110"
                    />
                    {!linkActive && <p className="xl:block hidden">Messages</p>}
                  </div>
                ) : (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <RiMessengerLine
                      size={"25px"}
                      className="group-hover:scale-110"
                    />
                    {!linkActive && <p className="xl:block hidden">Messages</p>}
                  </div>
                )
              }
            </NavLink>
          </li>
          <li>
            <Link>
              <div
                className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4"
                onClick={() => handleCustomNavLinkClicked("notifications")}
              >
                {activeIcon ? (
                  <AiFillHeart
                    size={"25px"}
                    className=" group-hover:scale-110"
                  />
                ) : (
                  <AiOutlineHeart
                    size={"25px"}
                    className=" group-hover:scale-110"
                  />
                )}
                {!linkActive && (
                  <p className="xl:block hidden">Notifications</p>
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div
                className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4"
                onClick={() => handleCustomNavLinkClicked("create")}
              >
                <CgAddR size={"25px"} className=" group-hover:scale-110" />
                {!linkActive && <p className="xl:block hidden">Create</p>}
              </div>
            </Link>
          </li>
          <li>
            <NavLink
              to={"/prashant_raj_ch"}
              className={handleNavLinkCliced}
              onClick={handleToggleActive}
            >
              {({ isActive }) =>
                isActive ? (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <Avatar sx={{ width: "25px", height: "25px" }} />
                    {!linkActive && <p className="xl:block hidden">Profile</p>}
                  </div>
                ) : (
                  <div className="my-1 p-3 rounded-lg hover:bg-slate-100 group flex items-center gap-4">
                    <Avatar sx={{ width: "25px", height: "25px" }} />
                    {!linkActive && <p className="xl:block hidden">Profile</p>}
                  </div>
                )
              }
            </NavLink>
          </li>
        </ul>
        <div>
          <div
            className={`my-1 p-3 rounded-lg hover:bg-slate-100 group items-center gap-4 cursor-pointer ${
              linkActive ? "inline-block" : "flex"
            }`}
          >
            <HiMenuAlt2 size={"25px"} className=" group-hover:scale-110" />
            {!linkActive && <p className="xl:block hidden">Menu</p>}
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 z-10 bg-white h-full left-0 transition-all duration-1000 ${
          linkActive ? "w-[392px] translate-x-[76px]" : "-translate-x-[100%]"
        }`}
      >
        {component.search && <Search />}
        {component.notification && <Notification />}
      </div>
      {component.create && <Create setComponent={setComponent} />}
    </nav>
  );
}

export default Navbar;
