import { useState } from "react";
import styles from "./Story.module.css";
import PropTypes from "prop-types";

export default function Story({ src, username }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${styles.story} ${isHover ? styles.hover : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={src} alt={username} />
    </div>
  );
}

Story.propTypes = {
  src: PropTypes.string,
  username: PropTypes.string,
};
