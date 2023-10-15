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
        <div className={styles.userInfo}>
          <img src="/profileImg.jpg" alt="profile img" />
          <h4>@{username.slice(0, 7)}...</h4>
        </div>
      </div>
    </div>
  );
}
