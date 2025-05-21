import axios from "axios";
let baseURL;

if (window.location.hostname === "localhost") {
  baseURL = "http://localhost:7777";
} else {
  baseURL = "/api/";
}

const api = axios.create({
  baseURL,
});

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default axiosInstance;
