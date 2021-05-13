/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const onClickItem = () => {
    onVideoSelect(video);
  };

  return (
    <div
      className="item"
      onClick={onClickItem}
      style={{ cursor: "pointer", display: "flex" }}
    >
      <img
        className="ui tiny image"
        
        src={video.snippet.thumbnails.high.url}
      />
      <div
        className="content"
        style={{
          textAlign: "justify",
          whiteSpace: "initial",
          overflowY: "auto",
          overflowX: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
          maxHeight: "75%",
          height: "auto",
          width: "auto",
        }}
      >
        <p className="header">{video.snippet.title}</p>
        <p className="description">{video.snippet.description} </p>
      </div>
    </div>
  );
};

export default VideoItem;
