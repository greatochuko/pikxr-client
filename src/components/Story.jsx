import { useState } from "react";
import styles from "./Story.module.css";
import PropTypes from "prop-types";

export default function Story({ story }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${styles.story} ${isHover ? styles.hover : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={`http://localhost:5000/${story.imgUrl} `} alt={story.imgUrl} />
      <div className={styles.creatorDetails}>
        <img src={story.user.imgUrl} alt={story.user.username} />
        <h4>@{story.user.username}</h4>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}

Story.propTypes = {
  story: PropTypes.object,
};
