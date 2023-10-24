import styles from "./PostViewModal.module.css";
import CommentForm from "./CommentForm";
import { useState } from "react";
import Comment from "./Comment.jsx";
import Creator from "./Creator";
import propTypes from "prop-types";

export default function PostViewModal({
  post,
  updateMasonryGridPost,
  setType,
  setCurrentPost,
}) {
  const comments = post.comments;

  return (
    <div className={styles.postViewModal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.imgContainer}>
        <img src={`http://localhost:5000/posts/${post.imageUrl}`} alt="" />
        <p className={styles.caption}>{post.caption}</p>
      </div>
      <div className={styles.details}>
        <Creator post={post} className={styles.creator} setType={setType} />

        <div className={styles.comments}>
          <ul>
            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </ul>
        </div>
        <CommentForm
          className={styles.commentForm}
          postId={post._id}
          setCurrentPost={updateMasonryGridPost || setCurrentPost}
          creatorId={post.creator._id}
        />
      </div>
    </div>
  );
}

PostViewModal.propTypes = {
  post: propTypes.object,
  updateMasonryGridPost: propTypes.func,
  setType: propTypes.func,
};
