import styles from "./Feed.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Post from "./Post";
import { fetchPosts } from "../services/postServices";
import { useEffect, useState } from "react";

export default function Feed() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function refreshPosts() {
      const data = await fetchPosts();

      setPosts(data);
    }
    refreshPosts();
  }, []);

  if (posts)
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
        {posts.length ? (
          <div className={styles.posts}>
            {posts.map((post) => (
              <Post key={post._id} currentPost={post} setPosts={setPosts} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>Your feed is empty</div>
        )}
      </div>
    );
}
