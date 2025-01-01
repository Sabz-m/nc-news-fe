import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

export default function ArticlesList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const topic = searchParams.get("topic");

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");

  useEffect(() => {
    setIsLoading(true);
    getArticles(sortBy, orderBy, topic)
      .then((articles) => {
        console.log(articles);
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      });
  }, [sortBy, orderBy, topic]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching articles data: {error.message}</p>;
  }

  return (
    <div className="articlesList">
      <p>Articles List</p>
      <div>
        <SortBy
          sortBy={sortBy}
          orderBy={orderBy}
          setSortBy={setSortBy}
          setOrderBy={setOrderBy}
        />
      </div>
      <ul>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}
