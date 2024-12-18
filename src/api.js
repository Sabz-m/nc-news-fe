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
  }).then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticle = (article_id) => {
  return NewsApi.get(`/articles/${article_id}`).then(
    ({ data: { article } }) => {
      return article;
    }
  );
};

export const getComments = (article_id) => {
  return NewsApi.get(`/articles/${article_id}/comments`).then(
    ({ data: { comments } }) => {
      return comments;
    }
  );
};

export const updateArticleVotes = (article_id, num) => {
  return NewsApi.patch(`/articles/${article_id}`, { inc_votes: num }).then(
    ({ data }) => {
      console.log(data);
      return data;
    }
  );
};
