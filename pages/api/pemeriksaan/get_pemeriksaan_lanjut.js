import apiClient from "../client";

const getPemeriksaanLanjut = async () => {
  try {
    const response = await apiClient.get("/pemeriksaan-lanjut");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getPemeriksaanLanjut };
