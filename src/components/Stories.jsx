import { setModalStory, togglemodal } from "../slice/postSlice";
import styles from "./Stories.module.css";
import Story from "./Story";
import { useDispatch, useSelector } from "react-redux";

export default function Stories() {
  const { stories } = useSelector((state) => state.story);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  let userHasStory = false;
  stories.forEach((story) => {
    if (story.creator._id === user._id) return (userHasStory = true);
  });

  function openStoryViewModal() {
    dispatch(setModalStory(stories[0]));
    dispatch(togglemodal("viewStory"));
  }

  return (
    <div className={styles.stories}>
      <div className={styles.header}>
        <h3>Stories</h3>
        <button onClick={openStoryViewModal}>Watch all</button>
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
