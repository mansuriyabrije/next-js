import axios from "axios";
import { config } from "../config";

const axiosInstance = axios.create({
  baseURL: config.backend.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// You can add interceptors here if needed in the future
// axiosInstance.interceptors.request.use(...)
// axiosInstance.interceptors.response.use(...)

export default axiosInstance;
