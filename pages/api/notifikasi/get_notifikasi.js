import apiClient from "../client";

const getNotifikasi = async () => {
  try {
    const response = await apiClient.get("/notifikasi-pasien");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getNotifikasi };
