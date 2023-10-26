import styles from "./MasonryGridPost.module.css";
import propTypes from "prop-types";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

const BASE_URL = "https://tan-wild-raven.cyclic.app/";

export default function MasonryGridPost({ post: explorePost }) {
  const [modalType, setModalType] = useState(null);
  const [post, setPost] = useState(explorePost);

  function closeModalContainer() {
    setModalType(null);
  }

  function updateMasonryGridPost(data) {
    setPost(data);
  }

  return (
    <>
      <div className={styles.post} onClick={() => setModalType("viewPost")}>
        <img src={`${BASE_URL}/posts/${post.imageUrl}`} alt="" />
        <div className={styles.overlay}>
          <span>
            <i className="fa-solid fa-heart"></i>
            {post.likes.length}
          </span>

          <span>
            <i className="fa-solid fa-comment"></i>
            {post.comments.length}
          </span>
        </div>
      </div>
      {modalType ? (
        <ModalContainer
          type={modalType}
          closeModalContainer={closeModalContainer}
          post={post}
          updateMasonryGridPost={updateMasonryGridPost}
          setType={setModalType}
        />
      ) : null}
    </>
  );
}

MasonryGridPost.propTypes = {
  post: propTypes.object,
};
