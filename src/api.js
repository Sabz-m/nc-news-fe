import axios from "axios";

const NewsApi = axios.create({
  baseURL: "https://nc-news-h1dt.onrender.com/api",
});

export const getArticles = (sortBy, orderBy, topic) => {
  console.log(topic);
  return NewsApi.get("/articles", {
    params: {
      sortBy: sortBy,
      order: orderBy,
      topic: topic,
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
      return data;
    }
  );
};

export const addComment = (article_id, username, comment) => {
  return NewsApi.post(`/articles/${article_id}/comments`, {
    username: username,
    body: comment,
  }).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const deleteComment = (comment_id) => {
  return NewsApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const getTopics = () => {
  return NewsApi.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const getUser = () => {
  return NewsApi.get("/users").then(({ data: { users } }) => {
    console.log(users);
    return users;
  });
};
