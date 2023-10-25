import styles from "./Comment.module.css";
import PropType from "prop-types";
import OptionsButton from "./OptionsButton";

const BASE_URL = "http://192.168.0.101:5000";

export default function Comment({ comment, setType }) {
  function openDeleteCommentModal() {
    setType("deleteComment." + comment._id);
  }
  return (
    <li className={styles.comment}>
      <img src={BASE_URL + "/users/" + comment.user.imageUrl} alt="" />
      <div className={styles.details}>
        <h4>{comment.user.fullname}</h4>
        <p>{comment.comment}</p>
      </div>
      <OptionsButton
        type={"comment"}
        openDeletePostModal={openDeleteCommentModal}
      />
    </li>
  );
}

Comment.propTypes = {
  comment: PropType.object,
  setType: PropType.func,
};
