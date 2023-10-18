import styles from "./Comment.module.css";
import PropType from "prop-types";

export default function Comment({ comment }) {
  return (
    <li className={styles.comment}>
      <img src={comment.user.imgUrl} alt="" />
      <div className={styles.details}>
        <h4>{comment.user.fullname}</h4>
        <p>{comment.comment}</p>
      </div>
    </li>
  );
}

Comment.propTypes = {
  comment: PropType.object,
};
