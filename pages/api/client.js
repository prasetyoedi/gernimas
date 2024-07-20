import { AuthContext } from "@/context/auth_context";
import axios from "axios";
import { useContext } from "react";

const apiClient = axios.create({
  baseURL: "https://app.gernimas.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { logout } = useContext(AuthContext);
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
      logout();
    }
    return Promise.reject(error);
  }
);

export default apiClient;
