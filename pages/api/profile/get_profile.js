import apiClient from "../client";

const getProfile = async () => {
  try {
    const response = await apiClient.get("/profile");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getProfile };
