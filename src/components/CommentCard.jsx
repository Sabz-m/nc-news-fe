import DeleteComment from "./DeleteComment";

export default function CommentCard({ comment, setComments }) {
  return (
    <div className="commentCard">
      <DeleteComment
        comment_id={comment.comment_id}
        setComments={setComments}
      />
      <p>
        {comment.author} commented: {comment.body}
      </p>
      <p>Commented on: {comment.created_at}</p>
    </div>
  );
}
