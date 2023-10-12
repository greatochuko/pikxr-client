import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Pikxr</div>
      <div className={styles.userInfo}>
        <img src="/profileImg" alt="profile picture" className="profileImg" />
        <h3 className="name">{user.name}</h3>
        <p className="username">{user.username}</p>
        <ul className="userStats">
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
    </div>
  );
}
