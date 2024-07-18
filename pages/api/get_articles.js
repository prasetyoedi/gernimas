import apiClient from "./client";

const getArticles = async () => {
  try {
    const response = await apiClient.get("/articles");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export { getArticles };
