import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="ui segment">
        <label className="label">Select a song to see it's details!</label>
      </div>
    );
  }

  return (
    <div className="ui segment">
      <label className="label">{song.title}</label>
      <p>{song.duration}</p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return {
    song: selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
