import { useDispatch, useSelector } from "react-redux";
import styles from "./StoryViewModal.module.css";
import Creator from "./Creator";
import { useEffect, useState } from "react";
import { togglemodal } from "../slice/postSlice";

export default function StoryViewModal() {
  const { story } = useSelector((state) => state.post);
  const { stories } = useSelector((state) => state.story);
  const [currentIndex, setCurrentIndex] = useState(stories.indexOf(story));
  const currentStory = stories[currentIndex];

  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setInterval(() => {
      if (stories.length - 1 <= currentIndex) {
        dispatch(togglemodal());
        return;
      }
      setCurrentIndex((curr) => curr + 1);
    }, 6000);
    return () => clearInterval(timeout);
  }, [currentIndex, stories, dispatch]);

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.header}>
        <div className={styles.progressBar}>
          <span></span>
        </div>
        <Creator story={currentStory} className={styles.creator} />
      </div>
      <img
        className={styles.storyImage}
        src={`http://localhost:5000/stories/${currentStory.imageUrl}`}
        alt=""
      />
      <div className={styles.overlay}></div>
    </div>
  );
}
