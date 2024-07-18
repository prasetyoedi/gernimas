import apiClient from "./client";

const login = async (email, password) => {
  try {
    const response = await apiClient.post("/login", { email, password });
    localStorage.setItem("token", response.data.data.token);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    return error;
  }
};

export { login };
