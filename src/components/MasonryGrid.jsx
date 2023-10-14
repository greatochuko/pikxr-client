import styles from "./MasonryGrid.module.css";

export default function MasonryGrid() {
  return (
    <div className={styles.masonryGrid}>
      <div>
        <div className="post">
          <img src="/post1.jpg" alt="" />
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
      <div>
        <img src="post5.jpg" alt="" />
        <img src="post6.jpg" alt="" />
        <img src="post7.jpg" alt="" />
      </div>
      <div>
        <img src="post8.jpg" alt="" />
        <img src="post9.jpg" alt="" />
        <img src="post10.jpg" alt="" />
      </div>
    </div>
  );
}
