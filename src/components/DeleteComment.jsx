import { useState } from "react";
import { deleteComment } from "../api";
import { useNavigate } from "react-router-dom";

export default function DeleteComment({ comment_id, setComments }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigation = useNavigate();

  const handleButtonClick = (e) => {
    setIsDeleting(true);
    e.preventDefault();
    deleteComment(comment_id)
      .then(() => {
        navigation(0);
      })
      .then(() => {
        setIsDeleting(false);
      });
  };

  if (isDeleting) {
    return <p>One moment, your comment is being deleted...</p>;
  }

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        Delete Comment
      </button>
    </div>
  );
}
