import { updateArticleVotes } from "../api";

export default function VotesHandler({ article_id, setArticle }) {
  function handleUpVotes() {
    updateArticleVotes(article_id, +1).then((data) => {
      setArticle(data);
    });
  }

  function handleDownVotes() {
    updateArticleVotes(article_id, -1).then((data) => {
      setArticle(data);
    });
  }

  return (
    <div>
      <button onClick={handleUpVotes}>up vote</button>
      <button onClick={handleDownVotes}>down vote</button>
    </div>
  );
}
