import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import ProfilePostGrid from "../components/ProfilePostGrid";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../services/userServices";
import ModalContainer from "../components/ModalContainer";

export default function Profile() {
  const { username } = useParams();

  const [activeTab, setActiveTab] = useState("posts");
  const [user, setUser] = useState(null);
  const [modalType, setModalType] = useState(null);

  async function closeModalContainer() {
    setModalType(null);
    const data = await fetchUserProfile(username);
    setUser(data);
  }

  useEffect(() => {
    async function getUser() {
      const data = await fetchUserProfile(username);
      setUser(data);
    }
    getUser();
  }, [username]);

  if (user)
    return (
      <>
        <main className={styles.profile}>
          <div className={styles.profileImages}>
            <img
              src="/cover-photo.png"
              alt="cover photo"
              className={styles.coverPhoto}
            />
            <img
              src={"http://localhost:5000/users/" + user.imageUrl}
              alt="profile picture"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.main}>
            <div className={styles.userInfo}>
              <h3 className={styles.name}>{user.fullname}</h3>
              <p className={styles.username}>@{user.username}</p>
              <p className={styles.email}>{user.email}</p>
              <ul className={styles.userStats}>
                <li>
                  <span>{user.posts?.length || 0}</span>Posts
                </li>
                <li onClick={() => setModalType("followers")}>
                  <span>{user.followers.length}</span>Followers
                </li>
                <li onClick={() => setModalType("following")}>
                  <span>{user.following.length}</span>Following
                </li>
              </ul>
              <p className={styles.about}>{user.about}</p>
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
              <ProfilePostGrid type={activeTab} user={user} />
            </div>
          </div>
        </main>
        {modalType && (
          <ModalContainer
            type={modalType}
            closeModalContainer={closeModalContainer}
            username={username}
          />
        )}
      </>
    );
}
