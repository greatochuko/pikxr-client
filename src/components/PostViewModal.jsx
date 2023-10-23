import styles from "./PostViewModal.module.css";
import CommentForm from "./CommentForm";
import { useState } from "react";
import Comment from "./Comment.jsx";
import Creator from "./Creator";
import propTypes from "prop-types";

export default function PostViewModal({ post, updateMasonryGridPost }) {
  const [currentPost, setCurrentPost] = useState(post);
  const [caption, setCaption] = useState(
    currentPost.caption.length > 50
      ? currentPost.caption.slice(0, 50) + "..."
      : currentPost.caption
  );
  const comments = currentPost.comments;

  function toggleSeeMore() {
    caption.includes("...")
      ? setCaption(currentPost.caption)
      : setCaption(
          currentPost.caption.length > 50
            ? currentPost.caption.slice(0, 50) + "..."
            : currentPost.caption
        );
  }

  return (
    <div className={styles.postViewModal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.imgContainer}>
        <img
          src={`http://localhost:5000/posts/${currentPost.imageUrl}`}
          alt=""
        />
      </div>
      <div className={styles.details}>
        <Creator post={currentPost} className={styles.creator} />
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
        <CommentForm
          className={styles.commentForm}
          postId={currentPost._id}
          setCurrentPost={updateMasonryGridPost || setCurrentPost}
          creatorId={currentPost.creator._id}
        />
      </div>
    </div>
  );
}

PostViewModal.propTypes = {
  post: propTypes.object,
  updateMasonryGridPost: propTypes.func,
};
