import styles from "./MasonryGridPost.module.css";

export default function MasonryGridPost({ post }) {
  return (
    <div className={styles.post}>
      <img src={`http://localhost:5000/${post.imageUrl}`} alt="" />
      <div className={styles.overlay}></div>
    </div>
  );
}
