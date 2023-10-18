import styles from "./OptionsButton.module.css";
import propTypes from "prop-types";

export default function OptionsButton({ top, right, size }) {
  return (
    <button
      className={styles.optionsButton}
      style={{ top: `${top}px`, right: `${right}px` }}
    >
      <i className="fa-solid fa-ellipsis" style={{ fontSize: `${size}px` }} />
    </button>
  );
}

OptionsButton.propTypes = {
  top: propTypes.number,
  right: propTypes.number,
  size: propTypes.number,
};
