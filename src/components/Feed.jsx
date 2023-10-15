import styles from "./Feed.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Post from "./Post";

const posts = [
  {
    caption:
      "Hi everyone, today i was on the most beautiful mountain in the world😍",
    images: ["mountain.jpg"],
    likes: 2500,
    saves: 12,
    comments: 125,
    shares: 12,
    creator: { username: "greatochuko", profileImg: "/profileImg.jpg" },
  },
  {
    caption:
      "Hi everyone, today i was on the most beautiful mountain in the world😍",
    images: ["mountain.jpg"],
    likes: 2500,
    saves: 12,
    comments: 125,
    shares: 12,
    creator: { username: "greatochuko", profileImg: "/profileImg.jpg" },
  },
  {
    caption:
      "Hi everyone, today i was on the most beautiful mountain in the world😍",
    images: ["mountain.jpg"],
    likes: 2500,
    saves: 12,
    comments: 125,
    shares: 12,
    creator: { username: "greatochuko", profileImg: "/profileImg.jpg" },
  },
];

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
      <div className={styles.posts}>
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
    </div>
  );
}
