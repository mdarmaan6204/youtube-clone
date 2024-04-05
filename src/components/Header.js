import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilis/appSlice";
import { SEARCH_SUGGESTION_API, YOUTUBE_LOGO } from "../utilis/constants";
import { cacheResults } from "../utilis/searchSlice";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(searchQuery);
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
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg sticky top-0 z-50 bg-white">
      <div className="flex col-span-2 m-2 ">
        <div className=" hover:bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
          <MenuIcon onClick={handleMenuToggle} />
        </div>
        <div>
          <Link to="/">
            <img className="h-5 mx-8 mt-0.5" alt="YouTube Home" src={YOUTUBE_LOGO} />
          </Link>
        </div>
      </div>
      <div className="col-span-9 my-2 ml-20">
        <input
          className="w-1/2 px-10 p-2 border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="p-2 border border-gray-400 rounded-r-full bg-gray-100">
          Search
        </button>
        {showSuggestion && (
          <div className="fixed p-2 bg-white w-[35rem] shadow-lg border border-gray-100">
            <ul>
              {showSuggestion &&
                suggestion.map((s) => (
                  <Link to="">
                    <li
                      key={s}
                      className=" p-1 m-1 shadow-sm hover:bg-gray-100"
                    >
                      <SearchIcon /> {s}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <PersonIcon fontSize="large" className="h-20" />
      </div>
    </div>
  );
};

export default Header;
