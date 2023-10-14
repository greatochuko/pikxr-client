import styles from "./Stories.module.css";
import Story from "./Story";

export default function Stories() {
  const stories = [
    { src: "/story.jpg", username: "greatochuko" },
    { src: "/story.jpg", username: "greatochuko" },
    { src: "/story.jpg", username: "greatochuko" },
    { src: "/story.jpg", username: "greatochuko" },
    { src: "/story.jpg", username: "greatochuko" },
  ];
  return (
    <div className={styles.stories}>
      <div className={styles.header}>
        <h2>Stories</h2>
        <a href="">Watch all</a>
      </div>
      <div className={styles.storiesList}>
        {stories.map((story, i) => (
          <Story src={story.src} username={story.username} key={i} />
        ))}
      </div>
    </div>
  );
}
