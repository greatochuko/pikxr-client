import { useDispatch, useSelector } from "react-redux";
import styles from "./CommentForm.module.css";
import propTypes from "prop-types";
import { useState } from "react";
import { fetchComments, postComment } from "../services/commentServices";
import LoadingIndicator from "./LoadingIndicator";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../slice/userSlice";


export default function CommentForm({
  className,
  postId,
  setCurrentPost,
  creatorId,
  setComments,
}) {
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handlePostComment(e) {
    e.preventDefault();
    if (!comment) return;
    setLoading(true);
    const data = await postComment(comment, creatorId, postId);
    console.log(data);
    if (data.error) return setLoading(false);
    setCurrentPost(data);
    const commentsData = await fetchComments(postId);
    if (commentsData.error === "jwt expired") {
      dispatch(logoutUser());
      navigate("/login");
    }
    setComments(commentsData);
    setComment("");
    setLoading(false);
  }
  return (
    <form
      className={styles.commentForm + " " + className}
      onSubmit={handlePostComment}
    >
      <img src={user.imageUrl} alt="" />
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment"
      />
      <button type="submit">{loading ? <LoadingIndicator /> : "Send"}</button>
    </form>
  );
}

CommentForm.propTypes = {
  className: propTypes.string,
  postId: propTypes.string,
  setCurrentPost: propTypes.func,
  setComments: propTypes.func,
  updateMasonryGridPost: propTypes.func,
  creatorId: propTypes.string,
};
