import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
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
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching articles data: {error.message}</p>;
  }

  return (
    <div class="articlesList">
      <p>Articles List</p>
      <ul>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </ul>
    </div>
  );
}
