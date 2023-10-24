import propTypes from "prop-types";

import styles from "./ProfilePost.module.css";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

export default function ProfilePost({ post: currentPost }) {
  const [modalType, setModalType] = useState(null);
  const [post, setPost] = useState(currentPost);

  function closeModalContainer() {
    setModalType(null);
  }

  return (
    <>
      <div
        className={styles.post}
        key={post._id}
        onClick={() => setModalType("viewPost")}
      >
        <img src={"http://localhost:5000/posts/" + post.imageUrl} alt="" />
        <div className={styles.overlay}>
          <div className={styles.postStats}>
            <p>
              <i className="fa-solid fa-heart"></i>
              {post.likes.length}
            </p>
            <p>
              <i className="fa-solid fa-comment"></i>
              {post.comments.length}
            </p>
          </div>
        </div>
      </div>
      {modalType ? (
        <ModalContainer
          type={modalType}
          closeModalContainer={closeModalContainer}
          post={post}
          setCurrentPost={setPost}
          setType={setModalType}
        />
      ) : null}
    </>
  );
}

ProfilePost.propTypes = {
  post: propTypes.object,
};
