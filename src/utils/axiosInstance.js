import axios from "axios";
// import { BASE_URL } from "../config_global";
 

const axiosInstance = axios.create({
  baseURL:"/api",
  withCredentials: true,
});

export default axiosInstance;