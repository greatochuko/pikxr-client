import { useSelector } from "react-redux";
import styles from "./PostViewModal.module.css";
import CommentForm from "./CommentForm";
import { useState } from "react";
import Comment from "./Comment.jsx";
import Creator from "./Creator";

export default function PostViewModal() {
  const { post } = useSelector((state) => state.post);
  const [caption, setCaption] = useState(
    post.caption.length > 50 ? post.caption.slice(0, 50) + "..." : post.caption
  );
  const comments = post.comments;

  function toggleSeeMore() {
    caption.includes("...")
      ? setCaption(post.caption)
      : setCaption(
          post.caption.length > 50
            ? post.caption.slice(0, 50) + "..."
            : post.caption
        );
  }

  return (
    <div className={styles.postViewModal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.imgContainer}>
        <img src={`http://localhost:5000/posts/${post.imageUrl}`} alt="" />
      </div>
      <div className={styles.details}>
        <Creator post={post} className={styles.creator} />
        <p className={styles.caption}>
          {caption}
          {caption.includes("...") ? (
            <a onClick={toggleSeeMore}>See more</a>
          ) : (
            <a onClick={toggleSeeMore}>See less</a>
          )}
        </p>
        <div className={styles.comments}>
          <ul>
            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </ul>
        </div>
        <CommentForm className={styles.commentForm} postId={post._id} />
      </div>
    </div>
  );
}
