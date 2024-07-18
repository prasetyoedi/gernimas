import apiClient from "../client";

const logout = async () => {
  try {
    const response = await apiClient.post("/logout");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { logout };
