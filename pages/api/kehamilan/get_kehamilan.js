import apiClient from "../client";

const getKehamilan = async () => {
  try {
    const response = await apiClient.get("/kehamilan");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getKehamilan };
