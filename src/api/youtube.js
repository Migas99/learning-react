import axios from "axios";

const key = "AIzaSyAqL7N-uI9lNkgPumVqYsOQdP01Fv9tz_8";

const customRequests = {};

const axiosConfig = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: key,
  },
});

customRequests.searchVideos = async (query) => {
  try {
    return await axiosConfig.get("/search", {
      params: {
        q: query,
      },
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default customRequests;
