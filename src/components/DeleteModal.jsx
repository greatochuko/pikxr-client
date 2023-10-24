import { useDispatch } from "react-redux";
import { fetchDeletePost, fetchDeleteStory } from "../services/postServices";
import { fetchStories } from "../services/storyServices";
import styles from "./LogoutModal.module.css";
import propTypes from "prop-types";
import { setStories } from "../slice/storySlice";

export default function DeleteModal({
  type,
  closeModalContainer,
  postId,
  storyId,
  setPosts,
}) {
  const dispatch = useDispatch();
  async function deletePost() {
    const data = await fetchDeletePost(postId);
    setPosts((curr) => curr.filter((p) => p._id !== data._id));
  }

  async function deleteStory() {
    await fetchDeleteStory(storyId);
    const data = await fetchStories();
    dispatch(setStories(data));
  }

  if (type === "deletePost") {
    return (
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Delete Post?</h3>
          <p>Are you sure you want to delete this post?</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={closeModalContainer}>Cancel</button>
          <button onClick={deletePost} className={styles.logout}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  if (type === "deleteStory") {
    return (
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Delete Story?</h3>
          <p>Are you sure you want to delete this story?</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={closeModalContainer}>Cancel</button>
          <button onClick={deleteStory} className={styles.logout}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

DeleteModal.propTypes = {
  type: propTypes.string,
  closeModalContainer: propTypes.func,
  postId: propTypes.string,
  storyId: propTypes.string,
  setPosts: propTypes.func,
  setStories: propTypes.func,
};
