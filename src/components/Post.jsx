import { togglemodal, setModalPost } from "../slice/postSlice";
import Creator from "./Creator";
import styles from "./Post.module.css";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { likePost, unLikePost } from "../services/postServices";

export default function Post({ currentPost }) {
  const { user } = useSelector((state) => state.user);

  const [seeMore, setSeeMore] = useState(false);
  const [post, setPost] = useState(currentPost);
  const [isLiked, setIsLiked] = useState(user.likedPosts.includes(post._id));

  const dispatch = useDispatch();

  const postCaption = seeMore
    ? post.caption
    : `${post.caption.slice(0, 100)}...`;

  function toggleSeeMore() {
    setSeeMore((curr) => !curr);
  }

  function openPostViewModal() {
    dispatch(setModalPost(post));
    dispatch(togglemodal("viewPost"));
  }

  async function toggleLike() {
    if (!isLiked) {
      const data = await likePost(post._id, user._id);
      if (data.error) {
        return;
      }
      setIsLiked(true);
      setPost(data);
    } else {
      const data = await unLikePost(post._id, user._id);
      if (data.error) {
        return;
      }
      setIsLiked(false);
      setPost(data);
    }
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
        <button onClick={toggleLike}>
          <i
            className={`fa-${
              isLiked ? "solid " + styles.liked : "regular"
            } fa-heart `}
          ></i>
          {post.likes}
        </button>
        <button onClick={openPostViewModal}>
          <i className="fa-regular fa-comment"></i>
          {post.comments}
        </button>
        <button>
          <i className="fa-solid fa-share-nodes"></i>
          {post.shares}
        </button>
        <button>
          <i className="fa-regular fa-bookmark"></i>
          {post.saves}
        </button>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
