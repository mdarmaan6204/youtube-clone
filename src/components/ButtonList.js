import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonName = [
    "All",
    "Music",
    "Games",
    "Dance",
    "Live",
    "Carry Minati",
    "BB Ki Vines",
    "Criket" ,
    "Scoocer",
    "News",
    "Social"
  ];
  return <div className="flex">{buttonName.map((btnName) => {
     return <Button key = {btnName} name = {btnName}/>
  })}</div>;
};

export default ButtonList;
