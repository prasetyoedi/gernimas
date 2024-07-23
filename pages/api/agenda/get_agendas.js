import apiClient from "../client";

const getAgendas = async () => {
  try {
    const response = await apiClient.get("/agenda");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getAgendas };
