import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const user = useSelector((state) => state.user.user);

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
            <a href="#" className={styles.active}>
              Feed
            </a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Notifications</a>
          </li>
          <li className={styles.settings}>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
