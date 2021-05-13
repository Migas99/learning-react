import React, { useState, useEffect } from "react";
import useVideos from "../customHook/useVideos";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [query, setQuery] = useState("");
  const [videos, search] = useVideos("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(null);
  }, [videos]);

  const onSubmit = async (term) => {
    setQuery(term);
    search(term);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const renderHelper = () => {
    if (selectedVideo === null) {
      return <VideoList videos={videos} onVideoSelect={onVideoSelect} />;
    }

    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ui container">
      <div className="ui segment">
        <div className="ui container">
          <SearchBar onSubmit={onSubmit} />
          <div className="ui segment">
            <p>
              {query === "" || query === null
                ? `No results`
                : `Found ${videos.length} videos for '${query}'!`}
            </p>
            {renderHelper()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
