import { useSelector } from "react-redux";
import styles from "./CommentForm.module.css";
import propTypes from "prop-types";
import { useState } from "react";
import { postComment } from "../services/commentServices";

export default function CommentForm({ className, postId, setCurrentPost }) {
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  async function handlePostComment(e) {
    e.preventDefault();
    setComment("");
    const data = await postComment(comment, user._id, postId);
    setCurrentPost(data);
  }
  return (
    <form
      className={styles.commentForm + " " + className}
      onSubmit={handlePostComment}
    >
      <img src={"http://localhost:5000/users/" + user.imageUrl} alt="" />
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
  className: propTypes.string,
  postId: propTypes.string,
  setCurrentPost: propTypes.func,
};
