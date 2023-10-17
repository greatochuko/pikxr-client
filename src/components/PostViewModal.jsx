import { useSelector } from "react-redux";
import styles from "./PostViewModal.module.css";
import CommentForm from "./CommentForm.jsx";
import { useEffect, useState } from "react";
import { fetchComments } from "../services/commentServices";
import Comment from "./Comment.jsx";
import Creator from "./Creator";

export default function PostViewModal() {
  const { post } = useSelector((state) => state.post);
  const [comments, setComments] = useState([]);
  const [caption, setCaption] = useState(
    post.caption.length > 50 ? post.caption.slice(0, 50) + "..." : post.caption
  );

  useEffect(() => {
    async function getComments() {
      const data = await fetchComments(post._id);
      setComments(data);
    }
    getComments();
  }, [post._id]);

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
        <img src={`http://localhost:5000/${post.imageUrl}`} alt="" />
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
        <CommentForm
          className={styles.commentForm}
          postId={post._id}
          setComments={setComments}
        />
      </div>
    </div>
  );
}
