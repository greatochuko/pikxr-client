import styles from "./Feed.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Post from "./Post";
import { fetchPosts } from "../services/postServices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../slice/postSlice";
import PostWireFrame from "./PostWireFrame";

export default function Feed() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  let sortedPosts;
  sortedPosts = posts
    ?.map((a) => a)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  if (sortBy === "popular") {
    sortedPosts = posts
      ?.map((a) => a)
      .sort((a, b) => b.likes.length - a.likes.length);
  }

  useEffect(() => {
    async function refreshPosts() {
      setIsLoading(true);
      const data = await fetchPosts();

      dispatch(setPosts(data));
      setIsLoading(false);
    }
    refreshPosts();
  }, [dispatch]);

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
        <div className={styles.posts}>
          {isLoading ? (
            <>
              <PostWireFrame />
              <PostWireFrame />
              <PostWireFrame />
              <PostWireFrame />
            </>
          ) : posts.length ? (
            sortedPosts?.map((post) => (
              <Post key={post._id} currentPost={post} />
            ))
          ) : (
            <div className={styles.empty}>Your feed is empty</div>
          )}
        </div>
      </div>
    );
}
