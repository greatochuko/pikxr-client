import styles from "./OptionsButton.module.css";
import propTypes from "prop-types";

export default function OptionsButton({ top, right, size }) {
  return (
    <button
      className={styles.optionsButton}
      style={{ top: `${top}px`, right: `${right}px` }}
    >
      <i
        className="fa-solid fa-ellipsis-vertical"
        style={{ fontSize: `${size}px` }}
      />
    </button>
  );
}

OptionsButton.propTypes = {
  top: propTypes.string,
  right: propTypes.string,
  size: propTypes.string,
};
