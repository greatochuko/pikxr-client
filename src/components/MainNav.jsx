import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <form>
          <input type="text" placeholder="Search" />
        </form>
        <button className={styles.createPost}>+ Create new Post</button>
        <li className={styles.profile}>
          <Link to={"/profile"}>
            <img
              src="http://localhost:5000/profileImg.jpg"
              alt="profile picture"
              className="profileImg"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
