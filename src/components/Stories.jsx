import { useEffect, useState } from "react";
import styles from "./Stories.module.css";
import Story from "./Story";
import { useDispatch, useSelector } from "react-redux";
import { setStories } from "../slice/storySlice";
import { fetchStories } from "../services/storyServices";
import StoryWireFrame from "./StoryWireFrame";

export default function Stories() {
  const { stories } = useSelector((state) => state.story);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function refreshStories() {
      setIsLoading(true);
      const data = await fetchStories();
      dispatch(setStories(data));
      setIsLoading(false);
    }
    refreshStories();
  }, [dispatch]);

  let userHasStory = false;
  stories?.forEach((story) => {
    if (story.creator._id === user._id) return (userHasStory = true);
  });

  return (
    <div className={styles.stories}>
      <div className={styles.header}>
        <h3>Stories</h3>
        <button>Watch all</button>
      </div>
      <div className={styles.storiesList}>
        {isLoading ? (
          <StoryWireFrame />
        ) : (
          <>
            {!userHasStory ? <Story /> : null}
            {stories?.map((story) => (
              <Story story={story} key={story._id} />
            ))}
            {stories?.length ? <Story type={"watch"} /> : null}
          </>
        )}
      </div>
    </div>
  );
}
