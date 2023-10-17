import { togglemodal, setPost } from "../slice/postSlice";
import CommentForm from "./CommentForm";
import Creator from "./Creator";
import styles from "./Post.module.css";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

export default function Post({ post }) {
  const dispatch = useDispatch();

  function openPostViewModal() {
    dispatch(setPost(post));
    dispatch(togglemodal("viewPost"));
  }

  return (
    <div className={styles.post}>
      <Creator post={post} />
      <div className={styles.images} onClick={openPostViewModal}>
        <img src={`http://localhost:5000/${post.imageUrl}`} />
      </div>
      <div className={styles.actionButtons}>
        <button>{post.likes} likes</button>
        <button>{post.comments} comments</button>
        <button>{post.shares} shares</button>
        <button>{post.saves} saves</button>
      </div>
      <p className={styles.caption}>
        {post.caption.length > 20
          ? post.caption.slice(0, 20) + "..."
          : post.caption}
      </p>
      <CommentForm />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
