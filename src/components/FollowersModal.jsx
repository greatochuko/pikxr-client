import styles from "./CreatePostModal.module.css";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { fetchUserFollowers } from "../services/userServices";
import Follower from "./Follower";

export default function FollowersModal({
  username,
  closeModalContainer,
  type,
}) {
  const [followers, setFollowers] = useState([]);

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

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <h2 className={styles.header}>Followers</h2>
      <ul className={styles.followers}>
        {followers.map((follower) => (
          <Follower
            closeModalContainer={closeModalContainer}
            key={follower._id}
            follower={follower}
            type={type}
          />
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
