import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fullstack-chat-app-76jx.onrender.com/api",
  withCredentials: true,
});
