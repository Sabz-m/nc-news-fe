import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

export default function CommentsList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((comments) => {
        console.log(comments, "<----- comments");
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching Comments:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching Comments data: {error.message}</p>;
  }

  return (
    <div className="commentsList">
      <p>Comments List</p>
      <ul>
        {comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </ul>
    </div>
  );
}
