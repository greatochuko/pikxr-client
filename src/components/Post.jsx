import styles from "./Post.module.css";
import { useSelector } from "react-redux";

export default function Post({ post }) {
  const { user } = useSelector((state) => state.user);
  return (
    <div className={styles.post}>
      <div className={styles.creator}>
        <img src={post.creator.profileImg} alt={post.creator.username} />
        <h4>@{post.creator.username}</h4>
        <div className={styles.options}></div>
      </div>
      <div className={styles.images}>
        {post.images.map((imgUrl, i) => (
          <img src={`http://localhost:5000/${imgUrl}`} key={i} />
        ))}
      </div>
      <div className={styles.actionButtons}>
        <button>{post.likes} likes</button>
        <button>{post.comments} comments</button>
        <button>{post.shares} shares</button>
        <button>{post.saves} saves</button>
      </div>
      <form className={styles.commentForm}>
        <img src="/profileImg.jpg" alt={`${user.fullname} Profile Image`} />
        <input type="text" placeholder="Comment" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
