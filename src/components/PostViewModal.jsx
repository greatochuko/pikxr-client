import styles from "./PostViewModal.module.css";
import CommentForm from "./CommentForm";
import Comment from "./Comment.jsx";
import Creator from "./Creator";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchComments } from "../services/commentServices";
import { logoutUser } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function PostViewModal({
  post,
  updateMasonryGridPost,
  setType,
  setCurrentPost,
}) {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  useEffect(() => {
    async function getComments() {
      const data = await fetchComments(post._id);
      if (data.error === "jwt expired") {
        dispatch(logoutUser());
        navigate("/login");
      }
      setComments(data);
    }
    getComments();
  }, [post._id, dispatch, navigate]);

  return (
    <div className={styles.postViewModal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.imgContainer}>
        <img src={post.imageUrl} alt="" />
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
