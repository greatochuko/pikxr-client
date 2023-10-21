import { Link } from "react-router-dom";
import styles from "./Follower.module.css";
import { useSelector } from "react-redux";
import { fetchUnFollowUser, fetchfollowUser } from "../services/userServices";
import propTypes from "prop-types";
import { useState } from "react";

export default function Follower({ closeModalContainer, follower, type }) {
  const { user } = useSelector((state) => state.user);

  const [isFollowing, setIsFollowing] = useState(true);

  function handleRemoveFollower(e) {
    e.preventDefault();
    closeModalContainer();
  }

  async function toggleFollow(e) {
    e.preventDefault();
    if (isFollowing) await fetchUnFollowUser(user._id, follower._id);
    else if (!isFollowing) await fetchfollowUser(user._id, follower._id);
    setIsFollowing((curr) => !curr);
  }

  return (
    <li className={styles.follower} key={follower._id}>
      <Link to={"/profile/" + follower.username}>
        <img src={"http://localhost:5000/" + follower.imageUrl} alt="" />
        <div className={styles.info}>
          <p>{follower.fullname}</p>
          <p>@{follower.username}</p>
        </div>
        {type === "followers" ? (
          <button onClick={handleRemoveFollower}>Remove</button>
        ) : (
          <button onClick={toggleFollow}>
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
        )}
      </Link>
    </li>
  );
}

Follower.propTypes = {
  follower: propTypes.object,
  type: propTypes.string,
  closeModalContainer: propTypes.func,
};
