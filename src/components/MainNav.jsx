import styles from "./MainNav.module.css";
import { useDispatch } from "react-redux";
import { toggleCreatePostModal } from "../slice/postSlice";

export default function MainNav() {
  const dispatch = useDispatch();

  return (
    <>
      <nav className={styles.mainNav}>
        <ul>
          <form>
            <input type="text" placeholder="Search" />
          </form>
          <button
            className={styles.createPost}
            onClick={() => dispatch(toggleCreatePostModal())}
          >
            + Create new Post
          </button>
        </ul>
      </nav>
    </>
  );
}
