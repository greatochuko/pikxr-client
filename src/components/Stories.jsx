import styles from "./Stories.module.css";
import Story from "./Story";
import { useDispatch, useSelector } from "react-redux";

export default function Stories() {
  const { stories } = useSelector((state) => state.story);
  const { user } = useSelector((state) => state.user);

  let userHasStory = false;
  stories.forEach((story) => {
    if (story.creator._id === user._id) return (userHasStory = true);
  });

  return (
    <div className={styles.stories}>
      <div className={styles.header}>
        <h3>Stories</h3>
        <button>Watch all</button>
      </div>
      <div className={styles.storiesList}>
        {!userHasStory ? <Story /> : null}
        {stories.map((story) => (
          <Story story={story} key={story._id} />
        ))}
        <Story type={"watch"} />
      </div>
    </div>
  );
}
