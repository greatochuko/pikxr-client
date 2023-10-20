import { useDispatch, useSelector } from "react-redux";
import styles from "./CommentForm.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { postComment } from "../services/commentServices";
import { setModalPost } from "../slice/postSlice";

export default function CommentForm({ className, postId }) {
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  async function handlePostComment(e) {
    e.preventDefault();
    setComment("");
    const data = await postComment(comment, user._id, postId);

    dispatch(setModalPost(data));
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
        autoFocus
      />
      <button type="submit">Post</button>
    </form>
  );
}

CommentForm.propTypes = {
  className: PropTypes.string,
  postId: PropTypes.string,
};
