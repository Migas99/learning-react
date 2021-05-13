import axios from "axios";

const customRequests = {};

const defAxios = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XccJH4vAOSIOa9IT7kFBl6xHQ617qXQFcSYyWGw6OSA",
  },
});

customRequests.searchPhotos = async (term) => {
  const endpoint = "/search/photos";

  return await defAxios.get(endpoint, {
    params: { query: term },
  });
};

export default customRequests;
