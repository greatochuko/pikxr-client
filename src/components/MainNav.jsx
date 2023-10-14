import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

export default function MainNav() {
  const { user } = useSelector((state) => state.user);
  return (
    <nav className={styles.mainNav}>
      <ul>
        <form>
          <input type="text" placeholder="Search" />
        </form>
        <li className={styles.createPost}>+ Create new Post</li>
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
