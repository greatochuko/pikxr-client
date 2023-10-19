import { useSelector } from "react-redux";
import styles from "./StoryViewModal.module.css";
import Creator from "./Creator";

export default function StoryViewModal() {
  const { story } = useSelector((state) => state.post);
  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.header}>
        <div className={styles.progressBar}>
          <span></span>
        </div>
        <Creator story={story} className={styles.creator} />
      </div>
      <img
        className={styles.storyImage}
        src={`http://localhost:5000/stories/${story.imageUrl}`}
        alt=""
      />
      <div className={styles.overlay}></div>
    </div>
  );
}
