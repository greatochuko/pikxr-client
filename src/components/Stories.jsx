import { useEffect, useState } from "react";
import styles from "./Stories.module.css";
import Story from "./Story";
import { useSelector } from "react-redux";
import { fetchStories } from "../services/storyServices";

export default function Stories() {
  const { user } = useSelector((state) => state.user);
  const [stories, setStories] = useState(null);

  useEffect(() => {
    async function refreshStories() {
      setStories(await fetchStories());
    }
    refreshStories();
  }, []);

  let userHasStory = false;
  stories?.forEach((story) => {
    if (story.creator._id === user._id) return (userHasStory = true);
  });

  if (stories)
    return (
      <div className={styles.stories}>
        <div className={styles.header}>
          <h3>Stories</h3>
          <button>Watch all</button>
        </div>
        <div className={styles.storiesList}>
          {!userHasStory ? <Story /> : null}
          {stories.map((story) => (
            <Story stories={stories} story={story} key={story._id} />
          ))}
          <Story type={"watch"} />
        </div>
      </div>
    );
}
