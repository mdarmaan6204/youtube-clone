import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilis/appSlice";
import { SEARCH_SUGGESTION_API } from "../utilis/constants";
import store from "../utilis/store";
import { cacheResults } from "../utilis/seachSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) setShowSuggestion(searchCache[searchQuery]);
      else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
   dispatch( cacheResults({
    [searchQuery] : json[1]
  }))
  };
  return (
    <div className="grid grid-flow-col p-2  shadow-lg ">
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
        <div>
          <input
            className="w-1/2 px-10 p-2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="p-2 border border-gray-400 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        <div className="fixed p-2 bg-white w-[35rem] shadow-lg border border-gray-100">
          <ul>
            {showSuggestion &&
              suggestion.map((s) => (
                <li key={s} className=" p-1 m-1 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
          </ul>
        </div>
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
