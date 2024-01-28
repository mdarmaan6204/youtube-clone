import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  items-center shadow-sm">
      <img
        className="h-8"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
      />
      <span className="font-bold p-2">{name} </span>
      <span className="font-serif">{message} </span>
    </div>
  );
};

export default ChatMessage;
