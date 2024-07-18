import apiClient from "./client";

const getArticle = async (id) => {
  try {
    const response = await apiClient.get(`/article/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getArticle };
