import apiClient from "../client";

const getPemeriksaanMandiri = async () => {
  try {
    const response = await apiClient.get("/pemeriksaan-mandiri");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getPemeriksaanMandiri };
