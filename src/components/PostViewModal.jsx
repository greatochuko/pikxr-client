import { useSelector } from "react-redux";
import styles from "./PostViewModal.module.css";
import CommentForm from "./CommentForm";
import { useEffect, useState } from "react";
import { fetchComments } from "../services/commentServices";
import Comment from "./Comment";

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
      <div className={styles.postImgContainer}>
        <img src={`http://localhost:5000/${post.imageUrl}`} alt="" />
      </div>
      <div className={styles.details}>
        <div className={styles.creator}>
          <img src={post.creator.imgUrl} alt={post.creator.username} />
          <h4>@{post.creator.username}</h4>
          <div className={styles.options}></div>
        </div>
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
