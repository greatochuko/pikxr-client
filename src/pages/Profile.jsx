import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import ProfilePostGrid from "../components/ProfilePostGrid";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../services/userServices";
import ModalContainer from "../components/ModalContainer";

export default function Profile() {
  const { username } = useParams();

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
                  <span>{user.posts}</span>Posts
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
            <ProfilePostGrid username={username} user={user} />
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
