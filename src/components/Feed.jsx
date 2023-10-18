import styles from "./Feed.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Post from "./Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../slice/postSlice";
import { fetchPosts } from "../services/postServices";

export default function Feed() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getPost() {
      const data = await fetchPosts();
      dispatch(setPosts(data));
    }
    getPost();
  }, [dispatch]);

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
            <Post key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>Your feed is empty</div>
      )}
    </div>
  );
}
