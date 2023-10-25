import styles from "./Profile.module.css";

import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProfilePostGrid from "../components/ProfilePostGrid";
import ModalContainer from "../components/ModalContainer";

import {
  fetchEditUserAbout,
  fetchUploadCoverPhoto,
  fetchUploadProfilePhoto,
  fetchUserProfile,
} from "../services/userServices";

import {
  resizeCoverPhoto,
  resizeProfilePhoto,
} from "../utils/resizeCoverPhoto";

import { loginUser } from "../slice/userSlice";

export default function Profile() {
  const { username } = useParams();

  const [activeTab, setActiveTab] = useState("posts");
  const [user, setUser] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [previewProfilePhotoUrl, setPreviewProfilePhotoUrl] = useState(null);
  const [previewCoverPhotoUrl, setPreviewCoverPhotoUrl] = useState(null);
  const [editAbout, setEditAbout] = useState(false);
  const [about, setAbout] = useState(user?.about);

  const coverPhotoRef = useRef(null);
  const profilePhotoRef = useRef(null);

  const dispatch = useDispatch();

  async function closeModalContainer() {
    setModalType(null);
    const data = await fetchUserProfile(username);
    setUser(data);
  }

  async function handleEditAbout(e) {
    e.preventDefault();
    await fetchEditUserAbout(about, user._id);
    setEditAbout(false);
  }

  function handleChangeCoverPhoto() {
    resizeCoverPhoto(
      coverPhotoRef.current.files[0],
      setPreviewCoverPhotoUrl,
      async (newImage) => {
        const formData = new FormData();
        formData.append("coverPhoto", newImage);
        formData.append("fileName", newImage.name);
        const data = await fetchUploadCoverPhoto(formData, newImage.name);
        if (data.error)
          console.log("Error, unable to upload image please try again later");
      }
    );
  }

  function handleChangeProfilePhoto() {
    resizeProfilePhoto(
      profilePhotoRef.current.files[0],
      setPreviewProfilePhotoUrl,
      async (newImage) => {
        const formData = new FormData();
        formData.append("coverPhoto", newImage);
        formData.append("fileName", newImage.name);
        const data = await fetchUploadProfilePhoto(formData, newImage.name);
        if (data.error) {
          console.log("Error, unable to upload image please try again later");
          return;
        }
        setUser(data);
        dispatch(loginUser(data));
      }
    );
  }

  useEffect(() => {
    async function getUser() {
      const data = await fetchUserProfile(username);
      setUser(data);
      setAbout(data.about);
    }
    getUser();
  }, [username]);

  if (user)
    return (
      <>
        <main className={styles.profile}>
          <div className={styles.profileImages}>
            <div className={styles.coverPhoto}>
              <label htmlFor="coverPhoto">Change Photo</label>
              <input
                type="file"
                name="coverPhoto"
                id="coverPhoto"
                ref={coverPhotoRef}
                onChange={handleChangeCoverPhoto}
              />
              <img
                src={
                  previewCoverPhotoUrl ||
                  "http://localhost:5000/users/" + user.coverPhotoUrl
                }
                alt="cover photo"
              />
            </div>

            <div className={styles.profileImage}>
              <img
                src={
                  previewProfilePhotoUrl ||
                  "http://localhost:5000/users/" + user.imageUrl
                }
                alt="profile picture"
              />
              <label htmlFor="profilePhoto">
                <i className="fa-regular fa-images"></i>
              </label>
              <input
                type="file"
                name="profilePhoto"
                id="profilePhoto"
                ref={profilePhotoRef}
                onChange={handleChangeProfilePhoto}
              />
            </div>
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
              {editAbout ? (
                <form onSubmit={handleEditAbout}>
                  <input
                    className={styles.about}
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </form>
              ) : (
                <p className={styles.about}>
                  <span>{about || "About me"}</span>
                  <i
                    className="fa-solid fa-pen-to-square"
                    title="Edit about"
                    onClick={() => setEditAbout(true)}
                  ></i>
                </p>
              )}
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
