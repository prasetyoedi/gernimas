import apiClient from "../client";

const updateProfile = async (data) => {
  try {
    console.log(data);
    const response = await apiClient.put("/profile", data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { updateProfile };
