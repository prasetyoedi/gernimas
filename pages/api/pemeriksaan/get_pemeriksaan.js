import apiClient from "../client";

const getPemeriksaan = async () => {
  try {
    const response = await apiClient.get("/pemeriksaan");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getPemeriksaan };
