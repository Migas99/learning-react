import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

const SongList = ({ selectSong, songs }) => {
  return (
    <div className="ui divided list">
      {songs.map((song) => {
        return (
          <div key={song.title} className="item">
            <div className="left floated content">{song.title}</div>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => selectSong(song)}
              >
                Select
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ selectedSong, songs }) => {
  return {
    selectedSong: selectedSong,
    songs: songs,
  };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
