import apiClient from "../client";

const getAsupans = async () => {
  try {
    const response = await apiClient.get("/asupan");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getAsupans };
