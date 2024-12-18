import { useState } from "react";
import { addComment } from "../api";

export default function AddComment({ article_id, setComments }) {
  const [isPosting, setIsPosting] = useState(false);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    setIsPosting(true);
    e.preventDefault();
    addComment(article_id, username, comment)
      .then(({ comment }) => {
        setComments((previousComments) => [comment, ...previousComments]);
      })
      .then(() => {
        setUsername("");
        setComment("");
        setIsPosting(false);
      });
  };

  if (isPosting) {
    return <p>One momment your comments Posting</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          placeholder="enter your username here"
          type="text"
          onChange={handleChangeUsername}
          value={username}
          required
        />
      </label>
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
