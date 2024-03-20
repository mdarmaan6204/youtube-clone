import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="shadow-lg px-4">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
        </ul>
        <h1 className="font-bold pt-4">Subscription</h1>
        <ul>
          <li>Eagletek</li>
          <li>RBR</li>
          <li>Phyics Wallah</li>
          <li>Groww</li>
        </ul>
        <h1 className="font-bold pt-4">You </h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Liked Videos</li>
        </ul>
        <h1 className="font-bold pt-4">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Liked Videos</li>
        </ul>
      </div>
    )
  );
};

export default SideBar;
