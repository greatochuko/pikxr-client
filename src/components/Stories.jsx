import { useEffect, useState } from "react";
import styles from "./Stories.module.css";
import Story from "./Story";
import { fetchStories } from "../services/storyServices";

export default function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function getStories() {
      const data = await fetchStories();
      setStories(data);
    }
    getStories();
  }, []);

  return (
    <div className={styles.stories}>
      <div className={styles.header}>
        <h3>Stories</h3>
        <a href="">Watch all</a>
      </div>
      <div className={styles.storiesList}>
        <Story />
        {stories.map((story, i) => (
          <Story story={story} key={story._id} />
        ))}
      </div>
    </div>
  );
}
