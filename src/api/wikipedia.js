import axios from "axios";

const apiURL = "https://en.wikipedia.org";

const axiosConfig = axios.create({
  baseURL: apiURL,
});

const customRequests = {};

customRequests.baseURL = apiURL;

customRequests.search = async (query) => {
  return await axiosConfig.get("/w/api.php", {
    params: {
      action: "query",
      list: "search",
      origin: "*",
      format: "json",
      srsearch: query,
    },
  });
};

export default customRequests;
