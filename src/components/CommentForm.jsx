import { useSelector } from "react-redux";
import styles from "./CommentForm.module.css";

export default function CommentForm({ className }) {
  const { user } = useSelector((state) => state.user);
  return (
    <form className={styles.commentForm + " " + className}>
      <img src={user.imgUrl} alt={`${user.fullname} Profile Image`} />
      <input type="text" placeholder="Comment" />
      <button type="submit">Post</button>
    </form>
  );
}
