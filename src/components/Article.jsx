import { useEffect, useState } from "react";
import { getArticle } from "../api";
import { useParams } from "react-router-dom";
import CommentsList from "./commentsList";
import VotesHandler from "./VotesHandler";

export default function Article({ username }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id)
      .then((article) => {
        console.log(article);

        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.error("Article does not exist");
        setIsLoading(false);
      });
  }, [article_id, setArticle]);

  if (isLoading) {
    return <p>Loading... Article</p>;
  }

  if (error) {
    return <p>Article does not exist</p>;
  }

  return (
    <div className="article">
      <p>Article</p>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Article: {article.body}</p>
      <img src={article.article_img_url}></img>
      <p>Created at: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <VotesHandler article_id={article.article_id} setArticle={setArticle} />
      <CommentsList
        article_id={article_id}
        username={username}
        setArticle={setArticle}
      />
    </div>
  );
}
