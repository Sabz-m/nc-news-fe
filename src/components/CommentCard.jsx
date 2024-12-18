export default function CommentCard({ comment }) {
  return (
    <div className="commentCard">
      <p>{comment.author} commented: </p>
      <p>Comment: {comment.body}</p>
      <p>Commented on: {comment.created_at}</p>
    </div>
  );
}
