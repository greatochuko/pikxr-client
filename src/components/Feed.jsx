import styles from "./Feed.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import MasonryGrid from "./MasonryGrid";

export default function Feed() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <h3>Feed</h3>
        <div className={styles.sortBy}>
          <p
            className={sortBy === "latest" ? styles.active : ""}
            onClick={() => navigate("?sortBy=latest")}
          >
            Latest
          </p>
          <p
            className={sortBy === "popular" ? styles.active : ""}
            onClick={() => navigate("?sortBy=popular")}
          >
            Popular
          </p>
        </div>
      </div>
      <MasonryGrid />
    </div>
  );
}
