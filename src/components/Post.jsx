import Creator from "./Creator";
import styles from "./Post.module.css";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  likePost,
  savePost,
  unLikePost,
  unSavePost,
} from "../services/postServices";
import ModalContainer from "./ModalContainer";

export default function Post({ currentPost }) {
  const { user } = useSelector((state) => state.user);

  const [post, setPost] = useState(currentPost);
  const [isLiked, setIsLiked] = useState(user.likedPosts.includes(post._id));
  const [isSaved, setIsSaved] = useState(user.savedPosts.includes(post._id));
  const [modalType, setModalType] = useState(null);

  function closeModalContainer() {
    setModalType(null);
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

  async function toggleSave() {
    if (!isSaved) {
      const data = await savePost(post._id, user._id);
      if (data.error) {
        return;
      }
      setIsSaved(true);
      setPost(data);
    } else {
      const data = await unSavePost(post._id, user._id);
      if (data.error) {
        return;
      }
      setIsSaved(false);
      setPost(data);
    }
  }

  return (
    <>
      <div className={styles.post}>
        <div className={styles.images} onClick={() => setModalType("viewPost")}>
          <img src={`http://localhost:5000/posts/${post.imageUrl}`} />
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
          <button onClick={() => setModalType("viewPost")}>
            <i className="fa-regular fa-comment"></i>
            {post.comments?.length}
          </button>
          <button>
            <i className="fa-solid fa-share-nodes"></i>
            {post.shares}
          </button>
          <button onClick={toggleSave}>
            <i
              className={`fa-${
                isSaved ? "solid " + styles.saved : "regular"
              } fa-bookmark`}
            ></i>
            {post.saves}
          </button>
        </div>
        <Creator post={post} />
      </div>
      {modalType ? (
        <ModalContainer
          type={modalType}
          closeModalContainer={closeModalContainer}
          post={post}
        />
      ) : null}
    </>
  );
}

Post.propTypes = {
  currentPost: PropTypes.object,
};
