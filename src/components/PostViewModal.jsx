import styles from "./PostViewModal.module.css";
import CommentForm from "./CommentForm";
import Comment from "./Comment.jsx";
import Creator from "./Creator";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchComments } from "../services/commentServices";

const BASE_URL = "http://192.168.0.101:5000";

export default function PostViewModal({
  post,
  updateMasonryGridPost,
  setType,
  setCurrentPost,
}) {
  const [comments, setComments] = useState([]);

  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  useEffect(() => {
    async function getComments() {
      const data = await fetchComments(post._id);
      setComments(data);
    }
    getComments();
  }, [post._id]);

  return (
    <div className={styles.postViewModal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.imgContainer}>
        <img src={`${BASE_URL}/posts/${post.imageUrl}`} alt="" />
        <p className={styles.caption}>{post.caption}</p>
      </div>
      <div className={styles.details}>
        <Creator post={post} className={styles.creator} setType={setType} />

        <div className={styles.comments}>
          <ul>
            {sortedComments.map((comment) => (
              <Comment
                key={comment._id}
                comment={comment}
                setType={setType}
                setComments={setComments}
              />
            ))}
          </ul>
        </div>
        <CommentForm
          className={styles.commentForm}
          postId={post._id}
          setCurrentPost={updateMasonryGridPost || setCurrentPost}
          creatorId={post.creator._id}
          setComments={setComments}
        />
      </div>
    </div>
  );
}

PostViewModal.propTypes = {
  post: propTypes.object,
  updateMasonryGridPost: propTypes.func,
  setType: propTypes.func,
  setCurrentPost: propTypes.func,
};
