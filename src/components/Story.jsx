import { useState } from "react";
import styles from "./Story.module.css";

export default function Story({ src, username }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${styles.story} ${isHover ? styles.hover : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={src} alt={username} />
      <div className={styles.storyContainer}>
        <h4>@{username}</h4>
      </div>
    </div>
  );
}
