import styles from "./MasonryGridPost.module.css";

export default function MasonryGridPost({ post }) {
  return (
    <div className={styles.post}>
      <img src={`http://localhost:5000/${post.imageUrl}`} alt="" />
      <div className={styles.overlay}>
        <span>
          <i className="fa-solid fa-heart"></i>
          {post.likes}
        </span>

        <span>
          <i className="fa-solid fa-comment"></i>
          {post.comments}
        </span>
      </div>
    </div>
  );
}
