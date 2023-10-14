import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const user = useSelector((state) => state.user.user);
  const { pathname } = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Pikxr</div>
      <div className={styles.userInfo}>
        <img
          src="http://localhost:5000/profileImg.jpg"
          alt="profile picture"
          className="profileImg"
        />
        <h3 className={styles.name}>{user.fullname}</h3>
        <p className={styles.username}>@{user.username}</p>
        <ul className={styles.userStats}>
          <li>
            <span>46</span>Posts
          </li>
          <li>
            <span>2.8k</span>Followers
          </li>
          <li>
            <span>125</span>Following
          </li>
        </ul>
      </div>
      <nav className={styles.sideNav}>
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? styles.active : ""}>
              {pathname === "/" ? (
                <img src="/home-filled.svg" alt="feed" />
              ) : (
                <img src="/home.svg" alt="feed" />
              )}
              Feed
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className={pathname === "/explore" ? styles.active : ""}
            >
              {pathname === "/explore" ? (
                <img src="/compass-filled.png" alt="explore" />
              ) : (
                <img src="/compass.png" alt="feed" />
              )}
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={pathname === "/notifications" ? styles.active : ""}
            >
              {pathname === "/notifications" ? (
                <img src="/notifications-filled.png" alt="feed" />
              ) : (
                <img src="/notifications.png" alt="feed" />
              )}
              Notifications
            </Link>
          </li>
          <li className={styles.settings}>
            <Link
              to="/settings"
              className={pathname === "/settings" ? styles.active : ""}
            >
              {pathname === "/settings" ? (
                <img src="/settings-filled.svg" alt="feed" />
              ) : (
                <img src="/settings.svg" alt="feed" />
              )}
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="#logout"
              className={pathname.includes("#logout") ? styles.active : ""}
            >
              {pathname.includes("#logout") ? (
                <img src="/logout-filled.png" alt="feed" />
              ) : (
                <img src="/logout.png" alt="feed" />
              )}
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
