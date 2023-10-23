import { useEffect, useRef, useState } from "react";
import MasonryGrid from "../components/MasonryGrid";
import styles from "./Explore.module.css";
import { generateMasonryArray } from "../utils/createMansoryArray";
import { fetchPosts } from "../services/postServices";

export default function Explore() {
  const exploreRef = useRef(null);
  const [columns, setColumns] = useState();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function refreshPosts() {
      const data = await fetchPosts();

      setPosts(data);
    }
    refreshPosts();
  }, []);

  const explore = exploreRef.current;

  const MIN_WIDTH = 350;
  let data;
  if (columns) {
    data = generateMasonryArray(columns, posts);
  }
  useEffect(() => {
    const handleResize = () => {
      if (columns === Math.ceil(exploreRef.current.clientWidth / MIN_WIDTH))
        return;
      setColumns(Math.ceil(exploreRef.current.clientWidth / MIN_WIDTH));
    };
    if (!columns && posts) {
      setColumns(Math.ceil(exploreRef.current.clientWidth / MIN_WIDTH));
    }

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [explore, posts, columns]);

  if (posts)
    return (
      <main className={styles.explore} ref={exploreRef}>
        {data && <MasonryGrid data={data} />}
      </main>
    );
}
