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
        <img src={`http://localhost:5000/${post.imageUrl}`} alt="" />
      </div>
      <div className={styles.details}>
        <Creator post={post} className={styles.creator} />
        <p className={styles.caption}>
          {post.caption.length > 20
            ? post.caption.slice(0, 20) + "..."
            : post.caption}
        </p>
        <div className={styles.comments}>
          <ul>
            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </ul>
        </div>
        <CommentForm postId={post._id} setComments={setComments} />
      </div>
    </div>
  );
}
