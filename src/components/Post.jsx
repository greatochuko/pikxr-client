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

export default function Post({ currentPost, setPosts }) {
  const { user } = useSelector((state) => state.user);

  const [post, setPost] = useState(currentPost);
  const [isLiked, setIsLiked] = useState(post.likes.includes(user._id));
  const [isSaved, setIsSaved] = useState(post.saves.includes(user._id));
  const [modalType, setModalType] = useState(null);

  function closeModalContainer() {
    setModalType(null);
  }

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
    setIsLiked((curr) => !curr);
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
    setIsSaved((curr) => !curr);
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
            {post.likes.length}
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
            {post.saves.length}
          </button>
        </div>
        <Creator post={post} type={modalType} setType={setModalType} />
      </div>
      {modalType ? (
        <ModalContainer
          setCurrentPost={setPost}
          type={modalType}
          closeModalContainer={closeModalContainer}
          post={post}
          setType={setModalType}
          setPosts={setPosts}
        />
      ) : null}
    </>
  );
}

Post.propTypes = {
  currentPost: PropTypes.object,
};
