import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:3333/",
});

export default axiosApi;
