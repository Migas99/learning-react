import axios from "axios";

const customRequests = {};

const axiosConfig = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

customRequests.getPosts = async () => {
  try {
    return await axiosConfig.get("/posts");
  } catch (err) {
    console.log(err);
    return err;
  }
};

customRequests.getUser = async (id) => {
  try {
    return await axiosConfig.get(`/users/${id}`);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default customRequests;
