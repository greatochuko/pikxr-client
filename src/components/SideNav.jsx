import { useDispatch, useSelector } from "react-redux";
import styles from "./SideNav.module.css";
import { Link, useLocation } from "react-router-dom";
import { togglemodal } from "../slice/postSlice";

export default function SideNav() {
  const { pathname } = useLocation();
  const { modalType } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      <nav className={styles.sideNav}>
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? styles.active : ""}>
              <i className="fa-solid fa-house"></i>
              Feed
            </Link>
          </li>

          <li>
            <Link
              to="/explore"
              className={pathname === "/explore" ? styles.active : ""}
            >
              <i className="fa-solid fa-compass"></i>
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={pathname === "/notifications" ? styles.active : ""}
            >
              <i className="fa-solid fa-bell"></i>
              Notifications
            </Link>
          </li>
          <li
            className={styles.createPost}
            onClick={() => dispatch(togglemodal("createPost"))}
          >
            <a>
              <i className="fa-solid fa-circle-plus"></i>Create new Post
            </a>
          </li>
          <li>
            <Link
              to="/profile"
              className={pathname === "/profile" ? styles.active : ""}
            >
              <i className="fa-solid fa-circle-user"></i>
              Profile
            </Link>
          </li>
          <li className={styles.settings}>
            <Link
              to="/settings"
              className={pathname === "/settings" ? styles.active : ""}
            >
              <i className="fa-solid fa-gear"></i>
              Settings
            </Link>
          </li>
          <li onClick={() => dispatch(togglemodal("logout"))}>
            <a className={modalType === "logout" ? styles.active : ""}>
              <i className="fa-solid fa-right-from-bracket"></i>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}