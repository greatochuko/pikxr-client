import { useSelector } from "react-redux";
import styles from "./CommentForm.module.css";
import propTypes from "prop-types";
import { useState } from "react";
import { fetchComments, postComment } from "../services/commentServices";
import LoadingIndicator from "./LoadingIndicator";

const BASE_URL = "https://tan-wild-raven.cyclic.app/";

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

  async function handlePostComment(e) {
    e.preventDefault();
    setLoading(true);
    const data = await postComment(comment, creatorId, postId);
    if (data.error) return;
    setCurrentPost(data);
    setComments(await fetchComments(postId));
    setComment("");
    setLoading(false);
  }
  return (
    <form
      className={styles.commentForm + " " + className}
      onSubmit={handlePostComment}
    >
      <img src={BASE_URL + "/users/" + user.imageUrl} alt="" />
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
