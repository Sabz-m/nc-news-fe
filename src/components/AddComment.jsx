import { useState } from "react";
import { addComment } from "../api";

export default function AddComment({ article_id, setComments, username }) {
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState("");

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };
  console.log(username);

  const handleSubmit = (e) => {
    setIsPosting(true);
    setError(false);
    e.preventDefault();
    addComment(article_id, username, comment)
      .then(({ comment }) => {
        setComments((previousComments) => [comment, ...previousComments]);
      })
      .then(() => {
        setComment("");
        setIsPosting(false);
      })
      .catch((error) => {
        setError(true);
        console.error("Error Posting Comment:", error);
        setIsPosting(false);
      });
  };

  if (isPosting) {
    return <p>One momment your comments Posting</p>;
  }

  if (error) {
    return <p>Error Posting Comment</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <input
          placeholder="add your comment here"
          type="text"
          onChange={handleChangeComment}
          value={comment}
          required
        />
      </label>
      <button type="submit">Submit Comment</button>
    </form>
  );
}
