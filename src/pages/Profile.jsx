import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { useState } from "react";
import ProfilePostGrid from "../components/ProfilePostGrid";

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <main className={styles.profile}>
      <div className={styles.profileImages}>
        <img
          src="cover-photo.png"
          alt="cover photo"
          className={styles.coverPhoto}
        />
        <img
          src={user.imageUrl}
          alt="profile picture"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.main}>
        <div className={styles.userInfo}>
          <h3 className={styles.name}>{user.fullname}</h3>
          <p className={styles.username}>@{user.username}</p>
          <p className={styles.email}>@{user.email}</p>
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
          <p className={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            minima! Sint officia voluptas aperiam commodi?
          </p>
        </div>
        <div className={styles.posts}>
          <div className={styles.header}>
            <ul>
              <li
                onClick={() => setActiveTab("posts")}
                className={activeTab === "posts" ? styles.active : ""}
              >
                Posts
              </li>
              <li
                onClick={() => setActiveTab("liked")}
                className={activeTab === "liked" ? styles.active : ""}
              >
                Liked
              </li>
              <li
                onClick={() => setActiveTab("saved")}
                className={activeTab === "saved" ? styles.active : ""}
              >
                Saved
              </li>
            </ul>
          </div>
          <ProfilePostGrid type={activeTab} />
        </div>
      </div>
    </main>
  );
}
