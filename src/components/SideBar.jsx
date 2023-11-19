import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import { useSelector } from "react-redux";

export default function SideBar() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className={styles.sideBar}>
      <div className={styles.userInfo}>
        <div className={styles.userImage}>
          <img className={styles.coverPhoto} src={user.coverPhotoUrl} alt="" />
          <img className={styles.profilePhoto} src={user.imageUrl} alt="" />
        </div>
        <h3>{user.fullname}</h3>
        <p className={styles.username}>@{user.username}</p>
        <p className={styles.about}>{user.about}</p>
        <div className={styles.userStats}>
          <div>
            <span>{user.following.length}</span>Following
          </div>
          <div>
            <span>{user.followers.length}</span>Followers
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>My Profile</Link>
      </div>
      <div className={styles.suggestions}>
        <h3>People to follow</h3>
        <ul>
          <li>
            <img src={user.imageUrl} alt="" />
            <div>
              <h4>{user.fullname}</h4>
              <p>@{user.username}</p>
            </div>
            <button>Follow</button>
          </li>
          <li>
            <img src={user.imageUrl} alt="" />
            <div>
              <h4>{user.fullname}</h4>
              <p>@{user.username}</p>
            </div>
            <button>Follow</button>
          </li>
          <li>
            <img src={user.imageUrl} alt="" />
            <div>
              <h4>{user.fullname}</h4>
              <p>@{user.username}</p>
            </div>
            <button>Follow</button>
          </li>
        </ul>
        <Link to={"/"}>Show More</Link>
      </div>
    </div>
  );
}
