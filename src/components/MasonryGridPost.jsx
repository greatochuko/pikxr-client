import styles from "./MasonryGridPost.module.css";
import propTypes from "prop-types";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

export default function MasonryGridPost({ post }) {
  const [modalType, setModalType] = useState(null);

  function closeModalContainer() {
    setModalType(null);
  }

  return (
    <>
      <div className={styles.post} onClick={() => setModalType("viewPost")}>
        <img src={`http://localhost:5000/posts/${post.imageUrl}`} alt="" />
        <div className={styles.overlay}>
          <span>
            <i className="fa-solid fa-heart"></i>
            {post.likes}
          </span>

          <span>
            <i className="fa-solid fa-comment"></i>
            {post.comments?.length}
          </span>
        </div>
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

MasonryGridPost.propTypes = {
  post: propTypes.object,
};
