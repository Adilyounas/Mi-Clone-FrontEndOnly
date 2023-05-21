import React from "react";
import "../Style/VideoCard.css";

const playButton = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z" />
  </svg>
);

const VideoCard = ({ index, key, image, name }) => {
  return (
    <div className="videoCard">
      <img src={image} alt={`img ${image}`} />
      <div>
        <a href="#/">{playButton}</a>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default VideoCard;
