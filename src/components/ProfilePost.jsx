import { setModalPost, togglemodal } from "../slice/postSlice";
import { useDispatch } from "react-redux";
import propTypes from "prop-types";

import styles from "./ProfilePost.module.css";

export default function ProfilePost({ post }) {
  const dispatch = useDispatch();

  function openPostViewModal() {
    dispatch(setModalPost(post));
    dispatch(togglemodal("viewPost"));
  }

  return (
    <div className={styles.post} key={post._id} onClick={openPostViewModal}>
      <img src={"http://localhost:5000/posts/" + post.imageUrl} alt="" />
      <div className={styles.overlay}>
        <div className={styles.postStats}>
          <p>
            <i className="fa-solid fa-heart"></i>
            {post.likes}
          </p>
          <p>
            <i className="fa-solid fa-comment"></i>
            {post.comments.length}
          </p>
        </div>
      </div>
    </div>
  );
}

ProfilePost.propTypes = {
  post: propTypes.object,
};
