import { useEffect, useRef, useState } from "react";
import MasonryGrid from "../components/MasonryGrid";
import styles from "./Explore.module.css";
import { generateMasonryArray } from "../utils/createMansoryArray";
import { fetchPosts } from "../services/postServices";

export default function Explore() {
  const exploreRef = useRef(null);
  const [columns, setColumns] = useState();
  const [posts, setPosts] = useState(null);

  const MIN_WIDTH = 350;
  let data;
  if (columns) {
    data = generateMasonryArray(columns, posts);
  }

  useEffect(() => {
    async function refreshPosts() {
      setPosts(await fetchPosts());
    }
    refreshPosts();
  }, []);

  useEffect(() => {
    function handleResize() {
      if (columns === Math.floor(exploreRef.current.clientWidth / MIN_WIDTH))
        return;
      setColumns(Math.floor(exploreRef.current.clientWidth / MIN_WIDTH));
    }

    if (!columns && posts) {
      setColumns(Math.floor(exploreRef.current.clientWidth / MIN_WIDTH));
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [columns, posts]);

  if (posts)
    return (
      <main className={styles.explore} ref={exploreRef}>
        {data && <MasonryGrid data={data} />}
      </main>
    );
}
