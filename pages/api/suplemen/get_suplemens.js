import apiClient from "../client";

const getSuplemens = async () => {
  try {
    const response = await apiClient.get("/suplemen");
    return response;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getSuplemens };
