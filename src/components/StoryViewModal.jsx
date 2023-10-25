import styles from "./StoryViewModal.module.css";
import Creator from "./Creator";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useSelector } from "react-redux";

export default function StoryViewModal({
  story,
  closeModalContainer,
  type,
  setType,
}) {
  const { stories } = useSelector((state) => state.story);

  const currentStoryIndex = story ? stories.indexOf(story) : 0;
  const [currentIndex, setCurrentIndex] = useState(currentStoryIndex);
  const currentStory = stories[currentIndex];
  useEffect(() => {
    const timeout = setInterval(() => {
      if (stories.length - 1 <= currentIndex) {
        closeModalContainer();
        return;
      }
      setCurrentIndex((curr) => curr + 1);
    }, 6000);
    return () => clearInterval(timeout);
  }, [currentIndex, stories, closeModalContainer]);
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <div className={styles.progressBar}>
          <span></span>
        </div>
        <Creator
          story={currentStory}
          className={styles.creator}
          type={type}
          setType={setType}
        />
      </div>
      <img
        className={styles.storyImage}
        src={`http://localhost:5000/stories/${currentStory.imageUrl}`}
        alt=""
      />
      <p className={styles.caption}>{currentStory.caption}</p>
      <div className={styles.overlay}></div>
    </div>
  );
}

StoryViewModal.propTypes = {
  story: propTypes.object,
  closeModalContainer: propTypes.func,
  type: propTypes.string,
  setType: propTypes.func,
  stories: propTypes.array,
};
