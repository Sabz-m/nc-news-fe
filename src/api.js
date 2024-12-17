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
      return articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      throw error;
    });
};

export const getArticle = (article_id) => {
  return NewsApi.get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      console.log(article);
      return article;
    })
    .catch((error) => {
      console.error("Error fetching article:", error);
      throw error;
    });
};
