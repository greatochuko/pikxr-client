import styles from "./Story.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

const BASE_URL = "http://localhost:5000";

export default function Story({ story, type, setStories }) {
  const { user } = useSelector((state) => state.user);

  const [modalType, setModalType] = useState(null);

  function closeModalContainer() {
    setModalType(null);
  }
  return (
    <>
      {type === "watch" ? (
        <div
          className={styles.story + " " + styles.watch}
          onClick={() => setModalType("viewStory")}
        >
          <i className="fa-solid fa-play"></i>
          <h4 className={styles.username}>Watch all</h4>
        </div>
      ) : story ? (
        <div
          className={`${styles.story}`}
          onClick={() => setModalType("viewStory")}
        >
          <img
            src={`${BASE_URL}/stories/${story.imageUrl} `}
            alt={story.imageUrl}
          />
          <h4 className={styles.username}>@{story.creator.username}</h4>
        </div>
      ) : (
        <div
          className={styles.story + " " + styles.addStory}
          onClick={() => setModalType("createStory")}
        >
          <img src={`${BASE_URL}/users/${user.imageUrl} `} alt={"user image"} />
          <button>
            <i className="fa-solid fa-circle-plus"></i>
          </button>
          <h4 className={styles.username}>Your Story</h4>
        </div>
      )}
      {modalType ? (
        <ModalContainer
          type={modalType}
          setType={setModalType}
          closeModalContainer={closeModalContainer}
          story={story}
          setStories={setStories}
        />
      ) : null}
    </>
  );
}

Story.propTypes = {
  story: PropTypes.object,
  type: PropTypes.string,
  stories: PropTypes.array,
  setStories: PropTypes.func,
};
