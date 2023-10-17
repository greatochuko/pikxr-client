import styles from "./Comment.module.css";

export default function Comment({ comment }) {
  return (
    <li className={styles.comment}>
      <img src={comment.user.imgUrl} alt="" />
      <div className={styles.details}>
        <h4>{comment.user.username}</h4>
        <p>{comment.comment}</p>
      </div>
    </li>
  );
}
