import axios from "axios";
import { store } from "../redux/Store.js"; // Import Redux store

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Attach token to each request
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") { // Ensure this runs only on the client side
      const token = store.getState().auth.token; // Get token from Redux
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
