import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonName = [
    "All",
    "Music",
    "Games",
    "Dance",
    "Live",
    "Cricket" ,
    "Scoocer",
    "News",
    "Social",
    "Mixes",
    "News",
    "Anime",
  ];
  return <div className="flex overflow ">{buttonName.map((btnName) => {
     return <Button key = {btnName} name = {btnName}/>
  })}</div>;
};

export default ButtonList;
