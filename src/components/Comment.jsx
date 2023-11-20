import styles from "./Comment.module.css";
import PropType from "prop-types";
import OptionsButton from "./OptionsButton";
import { useSelector } from "react-redux";
import { getDuration } from "../utils/getDuration";

export default function Comment({ comment, setType }) {
  const { user } = useSelector((state) => state.user);

  function openDeleteCommentModal() {
    setType("deleteComment." + comment._id);
  }

  return (
    <li className={styles.comment}>
      <img src={comment.user.imageUrl} alt="" />
      <div className={styles.details}>
        <h4>{comment.user.fullname}</h4>
        <p className={styles.duration}>{getDuration(comment.createdAt)}</p>
        <p>{comment.comment}</p>
      </div>
      {user._id === comment.user._id ? (
        <OptionsButton
          type={"comment"}
          openDeletePostModal={openDeleteCommentModal}
        />
      ) : null}
    </li>
  );
}

Comment.propTypes = {
  comment: PropType.object,
  setType: PropType.func,
};
