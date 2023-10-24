import styles from "./OptionsButton.module.css";
import propTypes from "prop-types";

export default function OptionsButton({
  openEditPostModal,
  openDeletePostModal,
}) {
  return (
    <>
      <div className={styles.options}>
        <button className={styles.optionsButton} onClick={openEditPostModal}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className={styles.optionsButton + " " + styles.delete}
          onClick={openDeletePostModal}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </>
  );
}

OptionsButton.propTypes = {
  top: propTypes.number,
  right: propTypes.number,
  size: propTypes.number,
};
