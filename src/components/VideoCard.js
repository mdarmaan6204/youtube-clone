import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  function convertNumberToK(number) {
    if (number < 1000) {
      return number;
    } else if (number < 1000000) {
      return Math.floor(number / 1000) + "K";
    } else {
      return Math.floor(number / 1000000) + "M";
    }
  }
  return (
    <div className="p-2 m-4 w-[26rem]">
      <img
        className="rounded-lg shadow-xxl"
        alt="thumbnail"
        src={thumbnails.standard.url}
      />
      <ul className="mx-2">
        <li className="font-bold py-2">{title}</li>
        <li className="font-serif text-slate-700">{channelTitle}</li>
        <li>{convertNumberToK(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
