import styles from "./Story.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setModalStory, togglemodal } from "../slice/postSlice";

export default function Story({ story, type }) {
  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.story);
  const { user } = useSelector((state) => state.user);

  function openStoriesModal() {
    dispatch(togglemodal("createStory"));
  }

  function openStoryViewModal() {
    dispatch(setModalStory(story || stories[0]));
    dispatch(togglemodal("viewStory"));
  }

  if (type === "watch") {
    return (
      <div
        className={styles.story + " " + styles.watch}
        onClick={openStoryViewModal}
      >
        <i className="fa-solid fa-play"></i>
        <h4 className={styles.username}>Watch all</h4>
      </div>
    );
  }
  if (story) {
    return (
      <div className={`${styles.story}`} onClick={openStoryViewModal}>
        <img
          src={`http://localhost:5000/stories/${story.imageUrl} `}
          alt={story.imageUrl}
        />
        <h4 className={styles.username}>@{story.creator.username}</h4>
      </div>
    );
  }
  return (
    <div
      className={styles.story + " " + styles.addStory}
      onClick={openStoriesModal}
    >
      <img
        src={`http://localhost:5000/${user.imageUrl} `}
        alt={user.imageUrl}
      />
      <button>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
      <h4 className={styles.username}>Your Story</h4>
    </div>
  );
}

Story.propTypes = {
  story: PropTypes.object,
  type: PropTypes.string,
};
