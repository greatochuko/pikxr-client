import styles from "./FollowersModal.module.css";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { fetchUserFollowers } from "../services/userServices";
import Follower from "./Follower";
import FollowerWireframe from "./FollowerWireframe";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slice/userSlice";

export default function FollowersModal({
  username,
  closeModalContainer,
  type,
  userProfile,
}) {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserFollowers() {
      setLoading(true);
      const data = await fetchUserFollowers(username);
      console.log(data);
      if (data.error === "jwt expired") {
        dispatch(logoutUser());
        navigate("/login");
      }
      if (type === "followers") {
        setFollowers(data.followers);
      } else if (type === "following") {
        setFollowers(data.following);
      }
      setLoading(false);
    }
    getUserFollowers();
  }, [username, type, dispatch, navigate]);

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
              userProfile={userProfile}
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
  userProfile: propTypes.object,
};
