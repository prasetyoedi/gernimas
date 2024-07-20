import axios from "axios";

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
    if (error.response && error.response.status === 401) {
      localStorage.setItem("isLogin", false);
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
