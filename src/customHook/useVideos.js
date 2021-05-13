import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //search(defaultSearchTerm);
  });

  const search = async (term) => {
    const response = await youtube.searchVideos(term);
    if (response.status === 200) setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
