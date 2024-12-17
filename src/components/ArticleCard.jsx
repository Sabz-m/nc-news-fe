export default function ArticleCard({ article }) {
  return (
    <div class="articleCard">
      <p>Article name: {article.title}</p>
      <img src={article.article_img_url} />
    </div>
  );
}
