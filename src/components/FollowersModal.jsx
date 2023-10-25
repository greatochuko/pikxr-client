import styles from "./FollowersModal.module.css";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { fetchUserFollowers } from "../services/userServices";
import Follower from "./Follower";
import FollowerWireframe from "./FollowerWireframe";

export default function FollowersModal({
  username,
  closeModalContainer,
  type,
}) {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUserFollowers() {
      setLoading(true);
      const data = await fetchUserFollowers(username);
      if (type === "followers") {
        setFollowers(data.followers);
      } else if (type === "following") {
        setFollowers(data.following);
      }
      setLoading(false);
    }
    getUserFollowers();
  }, [username, type]);

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <h2 className={styles.header}>Followers</h2>
      <ul className={styles.followers}>
        {loading ? (
          <>
            <FollowerWireframe />
            <FollowerWireframe />
            <FollowerWireframe />
          </>
        ) : (
          followers.map((follower) => (
            <Follower
              closeModalContainer={closeModalContainer}
              key={follower._id}
              follower={follower}
              type={type}
            />
          ))
        )}
      </ul>
    </div>
  );
}

FollowersModal.propTypes = {
  username: propTypes.string,
  type: propTypes.string,
  closeModalContainer: propTypes.func,
};
