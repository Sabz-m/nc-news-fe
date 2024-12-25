import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";

export default function ArticlesList() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  const topic = searchParams.get("topic");

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(sortBy, order, topic)
      .then((articles) => {
        console.log(articles);
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      });
  }, [sortBy, order, topic]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching articles data: {error.message}</p>;
  }

  return (
    <div className="articlesList">
      <p>Articles List</p>
      <ul>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}
