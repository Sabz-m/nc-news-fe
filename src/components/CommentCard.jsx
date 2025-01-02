import DeleteComment from "./DeleteComment";

export default function CommentCard({ comment, setComments, username }) {
  return (
    <div className="commentCard">
      {username !== comment.author ? (
        <p>Only the author can delete this comment</p>
      ) : (
        <DeleteComment
          comment_id={comment.comment_id}
          setComments={setComments}
        />
      )}
      <p>
        {comment.author} commented: {comment.body}
      </p>
      <p>Commented on: {comment.created_at}</p>
    </div>
  );
}
