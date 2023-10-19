import styles from "./MasonryGridPost.module.css";

export default function MasonryGridPost({ post }) {
  return (
    <div className={styles.post}>
      <img src={post.img} alt="" />
      <div className={styles.overlay}></div>
    </div>
  );
}
