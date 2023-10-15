import styles from "./MasonryGrid.module.css";

export default function MasonryGrid() {
  return (
    <div className={styles.masonryGrid}>
      <div className={styles.grid}>
        <div className="post">
          <div className={styles.imageContainer}>
            <img src="/post1.jpg" alt="" />
          </div>
          <div className={styles.postDetails}>
            <div className={styles.userDetails}>
              <img src="/profileImg.jpg" alt="user profile Image" />
              <p>@greatochuko</p>
            </div>
          </div>
        </div>
        <div className="post">
          <img src="post2.jpg" alt="" />
        </div>
        <div className="post">
          <img src="post3.jpg" alt="" />
        </div>
        <div className="post">
          <img src="post4.jpg" alt="" />
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
