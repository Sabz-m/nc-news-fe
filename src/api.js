import axios from "axios";

const NewsApi = axios.create({
  baseURL: "https://nc-news-h1dt.onrender.com/api",
});

export const getArticles = (sortBy, order, topic) => {
  return NewsApi.get("/articles", {
    params: {
      type: sortBy,
      type: order,
      type: topic,
    },
  })
    .then(({ data: { articles } }) => {
      console.log(articles);
      return articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      throw error;
    });
};
