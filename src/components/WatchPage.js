import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utilis/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoSuggestion from "./VideoSuggestion";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SUGGESTON_BY_VID_ID,
} from "../utilis/constants";
import WatchVideoInfo from "./WatchVideoInfo";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [details , setDetails] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoInfo();
  }, []);

  let info;
  const getVideoInfo = async () => {
    const data = await fetch(
      YOUTUBE_SUGGESTON_BY_VID_ID +
        searchParams.get("v") +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    info = await json.items[0]?.snippet;
    setDetails(info);
    // console.log(info);
  };

  return (
    <div className="w-full">
      <div className="m-2 flex ">
        <div >
          <iframe
          className="rounded-xl"
            width="1100"
            height="500"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <WatchVideoInfo info = {details} />
        </div>
        <div className="w-full">
          {/* <LiveChat /> */}
          <VideoSuggestion />
        </div>
      </div>
      {/* <CommentsContainer /> */}
    </div>
  );
};

export default WatchPage;
