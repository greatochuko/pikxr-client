import { useSelector } from "react-redux";
import styles from "./CommentForm.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { postComment } from "../services/commentServices";

export default function CommentForm({ className, postId, setComments = null }) {
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  async function handlePostComment(e) {
    e.preventDefault();
    setComment("");
    const data = await postComment(comment, user._id, postId);

    setComments && setComments(data);
  }
  return (
    <form
      className={styles.commentForm + " " + className}
      onSubmit={handlePostComment}
    >
      <img src={user.imgUrl} alt="" />
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment"
      />
      <button type="submit">Post</button>
    </form>
  );
}

CommentForm.propTypes = {
  className: PropTypes.string,
  postId: PropTypes.string,
  setComments: PropTypes.func,
};
