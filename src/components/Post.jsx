import { togglemodal, setPost } from "../slice/postSlice";
import CommentForm from "./CommentForm";
import Creator from "./Creator";
import styles from "./Post.module.css";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Post({ post }) {
  const dispatch = useDispatch();
  const [seeMore, setSeeMore] = useState(false);

  const postCaption = seeMore
    ? post.caption
    : `${post.caption.slice(0, 100)}...`;

  function toggleSeeMore() {
    setSeeMore((curr) => !curr);
  }

  function openPostViewModal() {
    dispatch(setPost(post));
    dispatch(togglemodal("viewPost"));
  }

  return (
    <div className={styles.post}>
      <Creator post={post} />
      <p className={styles.caption}>
        {postCaption}
        {post.caption.length > 100 ? (
          <button className={styles.seeMoreBtn} onClick={toggleSeeMore}>
            {seeMore ? "Less" : "More"}
          </button>
        ) : null}
      </p>
      <div className={styles.images} onClick={openPostViewModal}>
        <img src={`http://localhost:5000/${post.imageUrl}`} />
      </div>
      <div className={styles.actionButtons}>
        <button>{post.likes} likes</button>
        <button>{post.comments} comments</button>
        <button>{post.shares} shares</button>
        <button>{post.saves} saves</button>
      </div>
      <CommentForm postId={post._id} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
