import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utilis/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2  shadow-lg">
      <div className="flex col-span-2 m-2">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          onClick={handleMenuToggle}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png"
          />
        </a>
      </div>
      <div className="col-span-9 my-2">
        <input
          className="w-1/2 px-10 p-2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="p-2 border border-gray-400 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
        />
      </div>
    </div>
  );
};

export default Header;
