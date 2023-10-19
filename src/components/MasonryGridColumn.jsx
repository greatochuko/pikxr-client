import styles from "./MasonryGridColumn.module.css";
import MasonryGridPost from "./MasonryGridPost";

export default function MasonryGridColumn({ posts }) {
  return (
    <div className={styles.grid}>
      {posts.map((post, i) => (
        <MasonryGridPost key={i} post={post} />
      ))}
    </div>
  );
}
