import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="articleCard">
      <img src={article.article_img_url} />
      <div className="articleCardBody">
        <Link to={`/articles/${article.article_id}`}>
          <p>Article name: {article.title}</p>
        </Link>
        <p>Author: {article.author}</p>
        <p>Created on: {article.created_at}</p>
        <Link
          to={`/articles/${article.article_id}`}
          className="articleCardFooter"
        >
          <button>view full article</button>
        </Link>
      </div>
    </div>
  );
}
