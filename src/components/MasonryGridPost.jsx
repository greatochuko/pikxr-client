import { useDispatch } from "react-redux";
import styles from "./MasonryGridPost.module.css";
import { setModalPost, togglemodal } from "../slice/postSlice";
import propTypes from "prop-types";

export default function MasonryGridPost({ post }) {
  const dispatch = useDispatch();

  function openPostViewModal() {
    dispatch(setModalPost(post));
    dispatch(togglemodal("viewPost"));
  }

  return (
    <div className={styles.post} onClick={openPostViewModal}>
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
  );
}

MasonryGridPost.propTypes = {
  post: propTypes.object,
};
