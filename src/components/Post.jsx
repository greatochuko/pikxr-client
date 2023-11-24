import Creator from "./Creator";
import styles from "./Post.module.css";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  likePost,
  savePost,
  unLikePost,
  unSavePost,
} from "../services/postServices";
import { Link, useNavigate } from "react-router-dom";

export default function Post({ currentPost }) {
  const { user } = useSelector((state) => state.user);

  const [post, setPost] = useState(currentPost);
  const isLiked = post?.likes?.includes(user._id);
  const isSaved = post?.saves?.includes(user._id);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function toggleLike() {
    let data;
    if (!isLiked) {
      data = await likePost(post._id, post.creator._id);
      if (data.error) {
        return;
      }
    } else {
      data = await unLikePost(post._id, post.creator._id);
      if (data.error) {
        return;
      }
    }
    setPost(data);
  }

  async function toggleSave() {
    let data;
    if (!isSaved) {
      data = await savePost(post._id);
      if (data.error) {
        return;
      }
    } else {
      data = await unSavePost(post._id);
      if (data.error) {
        return;
      }
    }
    setPost(data);
  }

  return (
    <div onClick={() => navigate(`/post/${post._id}`)} className={styles.post}>
      <Creator post={post} />
      <p className={styles.caption}>
        {post.caption.length > 100 ? (
          <>
            {post.caption.slice(0, 99)}...<Link to={"/"}>View More</Link>
          </>
        ) : (
          post.caption
        )}
      </p>
      <div className={styles.images}>
        <img src={post.imageUrl} alt="" />
      </div>
      <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
        <button className={isLiked ? styles.active : ""} onClick={toggleLike}>
          <i className="fa-solid fa-heart"></i> Like
        </button>
        <button>
          <i className="fa-solid fa-retweet"></i> Repost
        </button>
        <button onClick={() => dispatch({ type: "viewPost" })}>
          <i className="fa-solid fa-comment-dots"></i> Comment
        </button>
        <button className={isSaved ? styles.active : ""} onClick={toggleSave}>
          <i className="fa-solid fa-bookmark"></i>
        </button>
      </div>
    </div>
  );
}

Post.propTypes = {
  currentPost: PropTypes.object,
  setPosts: PropTypes.func,
};
