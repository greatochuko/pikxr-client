import styles from "./Story.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { togglemodal } from "../slice/postSlice";

export default function Story({ story }) {
  const dispatch = useDispatch();

  function openStoriesModal() {
    dispatch(togglemodal("createStory"));
  }

  if (story) {
    return (
      <div className={`${styles.story}`}>
        <img
          src={`http://localhost:5000/${story.imgUrl} `}
          alt={story.imgUrl}
        />
        <div className={styles.creatorDetails}>
          <img src={story.user.imgUrl} alt={story.user.username} />
          <h4>@{story.user.username}</h4>
        </div>
        <div className={styles.overlay}></div>
      </div>
    );
  }
  return (
    <div className={`${styles.story} ${styles.add}`}>
      <button className={styles.addStory} onClick={openStoriesModal}>
        <span>+</span>
        <p>Add Story</p>
      </button>
      <div className={styles.overlay}></div>
    </div>
  );
}

Story.propTypes = {
  story: PropTypes.object,
};
