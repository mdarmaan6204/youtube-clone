import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utilis/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (videos.length === 0) return;
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
       <VideoCard info = {video}/>
      ))}
    </div>
  );
};

export default VideoContainer;
