import styles from "./OptionsButton.module.css";
import propTypes from "prop-types";

export default function OptionsButton({
  openEditPostModal,
  openDeletePostModal,
  type,
}) {
  return (
    <>
      <div className={styles.options}>
        {!type ? (
          <button className={styles.optionsButton} onClick={openEditPostModal}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        ) : null}
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
  openEditPostModal: propTypes.func,
  openDeletePostModal: propTypes.func,
  type: propTypes.string,
};
