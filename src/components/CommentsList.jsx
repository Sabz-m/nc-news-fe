import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { Link } from "react-router-dom";

export default function CommentsList({ article_id, username }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching Comments:", error);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching Comments data: {error.message}</p>;
  }

  return (
    <div className="commentsList">
      <p>Comments List</p>
      {comments.length === 0 ? (
        <p>This post has no comments. Be the first to comment!</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li>
              <CommentCard
                key={comment.comment_id}
                username={username}
                comment={comment}
                setComments={setComments}
              />
            </li>
          ))}
        </ul>
      )}
      {!username ? (
        <Link to="/users">
          <button>Sign in to comment</button>
        </Link>
      ) : (
        <AddComment
          article_id={article_id}
          username={username}
          setComments={setComments}
        />
      )}
    </div>
  );
}
