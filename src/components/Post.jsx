import styles from "./Post.module.css";
import { useSelector } from "react-redux";

export default function Post({ post }) {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={styles.post}>
      <div className={styles.creator}>
        <img src={post.creator.imgUrl} alt={post.creator.username} />
        <h4>@{post.creator.username}</h4>
        <div className={styles.options}></div>
      </div>
      <div className={styles.images}>
        <img src={`http://localhost:5000/${post.imageUrl}`} />
      </div>
      <div className={styles.actionButtons}>
        <button>{post.likes} likes</button>
        <button>{post.comments} comments</button>
        <button>{post.shares} shares</button>
        <button>{post.saves} saves</button>
      </div>
      <p className={styles.caption}>
        {post.caption.length > 20
          ? post.caption.slice(0, 20) + "..."
          : post.caption}
      </p>
      <form className={styles.commentForm}>
        <img src="/profileImg.jpg" alt={`${user.fullname} Profile Image`} />
        <input type="text" placeholder="Comment" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
