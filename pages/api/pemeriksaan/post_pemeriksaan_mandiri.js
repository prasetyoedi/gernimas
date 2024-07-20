import apiClient from "../client";

const createPemeriksaanMandiri = async (payload) => {
  try {
    const response = await apiClient.post("/pemeriksaan-mandiri", payload);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { createPemeriksaanMandiri };
