import styles from "./MainNav.module.css";
import { useDispatch } from "react-redux";
import { togglemodal } from "../slice/postSlice";

export default function MainNav() {
  const dispatch = useDispatch();

  return (
    <>
      <nav className={styles.mainNav}>
        <ul>
          <div className={styles.logo}>Pikxr</div>

          <form>
            <input type="text" placeholder="Search" />
          </form>
          <button
            className={styles.createPost}
            onClick={() => dispatch(togglemodal("createPost"))}
          >
            + Create new Post
          </button>
        </ul>
      </nav>
    </>
  );
}
