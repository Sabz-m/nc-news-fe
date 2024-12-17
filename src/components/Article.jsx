import { useEffect, useState } from "react";
import { getArticle } from "../api";
import { Link, useParams } from "react-router";

export default function Article() {
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
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching article data: {error.message}</p>;
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
      <Link>
        <button>Add comment</button>
      </Link>
    </div>
  );
}
