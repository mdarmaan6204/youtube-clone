import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilis/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utilis/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(10),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  });
  return (
    <>
      <div>
        <div className="flex flex-col-reverse border border-black bg-slate-100 h-[500px] ml-2 p-2 overflow-y-scroll">
          {chatMessages.map((m, i) => (
            <ChatMessage key={i} name={m.name} message={m.message} />
          ))}
        </div>
      </div>
      <form
        className="border border-black w-full m-1 p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="w-80 mx-2 px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button
          className="bg-green-200 px-1"
          onClick={() => {
            dispatch(
              addMessage({
                name: "Malik",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
