import styles from "./CreatePostModal.module.css";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { fetchUserFollowers } from "../services/userServices";
import { Link } from "react-router-dom";

export default function FollowersModal({
  username,
  closeModalContainer,
  type,
}) {
  const [followers, setFollowers] = useState([]);

  console.log(followers);

  useEffect(() => {
    async function getUserFollowers() {
      const data = await fetchUserFollowers(username);
      if (type === "followers") {
        setFollowers(data.followers);
      } else if (type === "following") {
        setFollowers(data.following);
      }
    }
    getUserFollowers();
  }, [username, type]);

  function handleRemoveFollower(e) {
    e.preventDefault();
    closeModalContainer();
  }

  function toggleFollow(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <h2 className={styles.header}>Followers</h2>
      <ul className={styles.followers}>
        {followers.map((follower) => (
          <li className={styles.follower} key={follower._id}>
            <Link to={"/profile/" + follower.user.username}>
              <img
                src={"http://localhost:5000/" + follower.user.imageUrl}
                alt=""
              />
              <div className={styles.info}>
                <p>{follower.user.fullname}</p>
                <p>@{follower.user.username}</p>
              </div>
              {type === "followers" ? (
                <button onClick={handleRemoveFollower}>Remove</button>
              ) : (
                <button onClick={toggleFollow}>Unfollow</button>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

FollowersModal.propTypes = {
  username: propTypes.string,
  type: propTypes.string,
  closeModalContainer: propTypes.func,
};
