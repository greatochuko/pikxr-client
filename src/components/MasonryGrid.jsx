import styles from "./MasonryGrid.module.css";
import MasonryGridColumn from "./MasonryGridColumn";

export default function MasonryGrid({ data }) {
  return (
    <div className={styles.masonryGrid}>
      {data.map((posts, i) => (
        <MasonryGridColumn key={i} posts={posts} />
      ))}
    </div>
  );
}
