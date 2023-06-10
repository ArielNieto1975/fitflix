import { useState } from "react";
import "./videoCard.css";

const VideoCards = (props) => {
  const { link, imagen } = props.datos;
  const [showImage, setShowImage] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowImage(false);
    setShowVideo(true);
  };

  const handleStop = () => {
    setShowImage(true);
    setShowVideo(false);
  };

  const handleVideoClick = () => {
    setShowImage(false);
  };

  return (
    <div className="video">
      <img
        className="imagen"
        src={imagen}
        alt="imagenes"
        style={{ display: showImage ? "block" : "none" }}
      />
      <iframe
        className="iframe"
        width="250"
        height="141"
        src={showVideo ? link : ""}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ display: showVideo ? "block" : "none" }}
        onClick={handleVideoClick}
      />
      <div
        className="overlay"
        style={{ display: showVideo ? "none" : "flex" }}
        onClick={handlePlay}
      >
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

export default VideoCards;