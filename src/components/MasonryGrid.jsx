import styles from "./MasonryGrid.module.css";

export default function MasonryGrid() {
  return (
    <div className={styles.masonryGrid}>
      <div className={styles.grid}>
        <div className={styles.post}>
          <img src="/post1.jpg" alt="" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.post}>
          <img src="/post2.jpg" alt="" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.post}>
          <img src="/post3.jpg" alt="" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.post}>
          <img src="/post4.jpg" alt="" />
          <div className={styles.overlay}></div>
        </div>
      </div>
      <div className={styles.grid}>
        <img src="post5.jpg" alt="" />
        <img src="post6.jpg" alt="" />
        <img src="post7.jpg" alt="" />
      </div>
      <div className={styles.grid}>
        <img src="post8.jpg" alt="" />
        <img src="post9.jpg" alt="" />
        <img src="post10.jpg" alt="" />
      </div>
    </div>
  );
}